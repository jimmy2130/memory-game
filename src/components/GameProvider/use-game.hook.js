import React from 'react'
import {
	initializeGame,
	getMatchStatus,
	resetCover,
	setFail,
	setSuccess,
	getAnswer
} from './GameProvider.helpers'

const INACTIVE_STATES = ['cover-inactive', 'active', 'active-inactive']

export default function useGame() {
	const [gameSettings, setGameSettings] = React.useState(null)
	const [game, setGame] = React.useState(null)
	const [move, setMove] = React.useState(0)
	const [playerStats, setPlayerStats] = React.useState(null)
	const answerKey = game ? getAnswer(game) : null

	function reveal(id) {
		const {players} = gameSettings
		let newGame = [...game]
		const piece = newGame.find(g => g.id === id)
		const pieceIndex = newGame.findIndex(g => g.id === id)
		if(INACTIVE_STATES.includes(piece.state))
			return

		const newPiece = {...piece, state: 'active'}
		newGame[pieceIndex] = newPiece
		const matchStatus = getMatchStatus(newGame, answerKey)
		// console.log(matchStatus)
		if(matchStatus === 'unknown') {
			newGame = resetCover(newGame)
			// console.log('unknown', newGame)
			setGame(newGame)
		}
		else if(matchStatus === 'fail') {
			setMove(m => m + 1)
			newGame = setFail(newGame, id)
			// console.log('fail', newGame)
			setGame(newGame)
		}
		else if(matchStatus === 'success') {
			setMove(m => m + 1)
			setPlayerStats(oldPlayerStats => {
				return [...oldPlayerStats].map(p => {
					if(p.id === move % players)
						return {...p, score: p.score + 1}
					return p
				})
			})
			newGame = setSuccess(newGame, id)
			// console.log('success', newGame)
			setGame(newGame)
		}
	}

	function restart() {
		setGame(oldGame => [...oldGame].map(p => ({...p, state: 'cover'})))
		setMove(0)
		setPlayerStats(oldPlayerStats => [...oldPlayerStats].map(p => ({...p, score: 0})))
	}

	function setNewGame() {
		setGameSettings(null)
		setGame(null)
		setMove(0)
		setPlayerStats(null)
	}

	function startGame({size, players, theme}) {
		setGameSettings({
			size: parseInt(size),
			players: parseInt(players),
			theme: theme,
		})
		setGame(() => initializeGame(parseInt(size)))
		let stats = []
		for(let i = 0; i < parseInt(players); i++) {
			stats.push({id: i, score: 0})
		}
		setPlayerStats(stats)
	}

	return {
		gameSettings,
		game,
		move,
		playerStats,
		reveal,
		restart,
		setNewGame,
		startGame,
	}
}