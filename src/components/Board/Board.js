import React from "react";
import styled from 'styled-components/macro';
import Piece from '../Piece';
import {
	initializeGame,
	getMatchStatus,
	getAnswer,
	resetCover,
	setFail,
	setSuccess
} from './Board.helpers';

const INACTIVE_STATES = ['cover-inactive', 'active', 'active-inactive']

const Board = ({ size = 4, theme = 'icons', players = 1}) => {
	const [game, setGame] = React.useState(() => initializeGame(size))
	const [move, setMove] = React.useState(0)
	const [, setPlayerStats] = React.useState(Array(players).fill(0))
	const answerKey = getAnswer(game)

	function reveal(id) {
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
			setPlayerStats(p => {
				const newP = [...p]
				newP[move % players]++
				return newP
			})
			newGame = setSuccess(newGame, id)
			// console.log('success', newGame)
			setGame(newGame)
		}
	}

  return (
  	<Wrapper style={{
  		'--num': size,
  		'--size': size === 4 ? '118px' : '82px',
  		'--gap': size === 4 ? '20px' : '16px',
  	}}>
  	{
  		game.map(piece => (
  			<React.Fragment key={piece.id}>
  				<Piece info={piece} reveal={reveal} size={size} theme={theme}/>
  			</React.Fragment>
  		))
  	}
{/*  	<div>Move: {move}</div>
  	{
  		playerStats.map((p, index) => <div key={index}>Player {index + 1}: {p}</div>)
  	}*/}
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(var(--num), var(--size));
	gap: var(--gap);
`

export default Board;
