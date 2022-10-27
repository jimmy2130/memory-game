import React from "react";
import styled from 'styled-components/macro';
import Piece from '../Piece';
import { GameContext } from '../GameProvider'

const Board = () => {
	const {	game, gameSettings } = React.useContext(GameContext)
	const size = gameSettings.size

  return (
  	<Wrapper style={{
  		'--num': size,
  		'--size': size === 4 ? '118px' : '82px',
  		'--gap': size === 4 ? '20px' : '16px',
  	}}>
  	{
  		game.map(piece => (
  			<React.Fragment key={piece.id}>
  				<Piece info={piece}/>
  			</React.Fragment>
  		))
  	}
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(var(--num), var(--size));
	gap: var(--gap);
`

export default Board;
