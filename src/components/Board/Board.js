import React from "react";
import styled from 'styled-components/macro';
import Piece from '../Piece';
import { resetCover, setFail, setSuccess} from './Board.helpers';

function getMatchStatus(game) {
	const arr = game.filter(piece => piece.state === 'active').map(x => x.id)
	if(arr.length === 0 || arr.length % 2 === 1)
		return 'unknown'
	if(Ans[arr[0]] === arr[1])
		return 'success'
	return 'fail'
}

// const random = [3, 3, 7, 7]

const Ans = {
	0: 1,
	1: 0,
	2: 3,
	3: 2
}

const INACTIVE_STATES = ['cover-inactive', 'active', 'active-inactive']

const Test = () => {
	const [game, setGame] = React.useState([
		{id: 0, content: 3, state: 'cover'},
		{id: 1, content: 3, state: 'cover'},
		{id: 2, content: 7, state: 'cover'},
		{id: 3, content: 7, state: 'cover'},
	])
	function reveal(id) {
		let newGame = [...game]
		const piece = newGame.find(g => g.id === id)
		const pieceIndex = newGame.findIndex(g => g.id === id)
		if(INACTIVE_STATES.includes(piece.state))
			return

		const newPiece = {...piece, state: 'active'}
		newGame[pieceIndex] = newPiece
		const matchStatus = getMatchStatus(newGame)
		// console.log(matchStatus)
		if(matchStatus === 'unknown') {
			newGame = resetCover(newGame)
			// console.log('unknown', newGame)
			setGame(newGame)
		}
		else if(matchStatus === 'fail') {
			newGame = setFail(newGame, id)
			// console.log('fail', newGame)
			setGame(newGame)
		}
		else if(matchStatus === 'success') {
			newGame = setSuccess(newGame, id)
			// console.log('success', newGame)
			setGame(newGame)
		}
	}

  return (
  	<Wrapper>
  	{
  		game.map(piece => (
  			<React.Fragment key={piece.id}>
  				<Piece info={piece} reveal={reveal}/>
  			</React.Fragment>
  		))
  	}
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
`

export default Test;
