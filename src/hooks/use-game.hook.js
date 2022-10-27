import React from 'react'

const INACTIVE_STATES = ['cover-inactive', 'active', 'active-inactive']

export default function useGame() {
	const [gameSettings, setGameSettings] = React.useState(null)
	const [game, setGame] = React.useState(null)
	const [move, setMove] = React.useState(0)
	const [playerStats, setPlayerStats] = React.useState(null)
	const [timerKey, setTimerKey] = React.useState(1)
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
		setTimerKey(t => t + 1)
	}

	function setNewGame() {
		setGameSettings(null)
		setGame(null)
		setMove(0)
		setPlayerStats(null)
	}

	function startGame(props) {
		setGameSettings(props)
		setGame(() => initializeGame(props.size))
		let stats = []
		for(let i = 0; i < props.players; i++) {
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
		timerKey
	}
}

function getRandomBoard(size) {
	let random = []
	let board = []
	for(let i = 1; i <= size * size / 2; i++) {
		board.push(i)
		board.push(i)
	}
	for(let i = 0; i < size * size; i++)
		random.push(Math.random())
	for(let i = 0; i < random.length - 1; i++) {
		for(let j = i + 1; j < random.length; j++) {
			if(random[i] > random[j]) {
				[random[i], random[j]] = [random[j], random[i]];
				[board[i], board[j]] = [board[j], board[i]];
			}
		}
	}
	console.log(board)
	return board
}

function initializeGame(size) {
	const board = getRandomBoard(size)
	const boardInfo = board.map((c, index) => ({id: index, content: c, state: 'cover'}))
	return boardInfo
}

function getMatchStatus(game, answerKey) {
	const arr = game.filter(piece => piece.state === 'active').map(x => x.id)
	if(arr.length === 0 || arr.length % 2 === 1)
		return 'unknown'
	if(answerKey[arr[0]] === arr[1])
		return 'success'
	return 'fail'
}

function resetCover(game) {
	for(let i = 0; i < game.length; i++) {
		if(game[i]['state'] === 'cover-cover' || game[i]['state'] === 'active-cover')
			game[i]['state'] = 'cover'
	}
	return game
}

function setFail(game, id) {
	for(let i = 0; i < game.length; i++) {
		if(game[i]['id'] === id)
			game[i]['state'] = 'cover-cover'
		else if(game[i]['state'] === 'active')
			game[i]['state'] = 'active-cover'
	}
	return game
}

function setSuccess(game, id) {
	for(let i = 0; i < game.length; i++) {
		if(game[i]['id'] === id)
			game[i]['state'] = 'cover-inactive'
		else if(game[i]['state'] === 'active')
			game[i]['state'] = 'active-inactive'
	}
	return game	
}

function getAnswer(boardInfo) {
	let random = boardInfo.map(x => x.content)
	let ans = []
	for(let i = 0; i < random.length; i++) {
		for(let j = 0; j < random.length; j++) {
			if(i === j)
				continue
			if(random[i] === random[j])
				ans.push(j)
		}
	}
	return ans
}