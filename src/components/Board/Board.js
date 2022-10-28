import React from "react";
import styled from 'styled-components/macro';
import Piece from '../Piece';
import { GameContext } from '../GameProvider';
import { QUERIES } from '../../constants';

const Board = () => {
	const {	game, gameSettings } = React.useContext(GameContext)
	const size = gameSettings.size
	const pieceRefs = React.useRef(null)

  return (
  	<Wrapper style={{
  		'--num': size,
  		'--size': size === 4 ? '118px' : '82px',
  		'--gap': size === 4 ? '20px' : '16px',
  		'--flexible-gap': size === 4 ? 
  			'min(var(--gap), calc((100vh - 94px - 132px - 472px) / 10))'
  			: 'min(var(--gap), calc((100vh - 94px - 132px - 492px) / 10))',
  		'--mobile-gap': size === 4 ? '12px' : '9px',
  		'--mobile-columns': size === 4 ? '72px' : '48px'
  	}} size={size}>
  	{
  		game.map(piece => (
  			<React.Fragment key={piece.id}>
  				<Piece info={piece} ref={pieceRefs}/>
  			</React.Fragment>
  		))
  	}
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(var(--num), var(--size));
	gap: var(--flexible-gap);

	@media ${QUERIES.phoneAndDown} {
		grid-template-columns: repeat(var(--num), var(--mobile-columns));
		gap: var(--mobile-gap);
	}
`

export default Board;
