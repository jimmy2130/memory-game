import React from "react";
import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import {
	getBackgroundAnimation,
	getTextAnimation,
	getEdge
} from './Piece.helpers';
import { GameContext } from '../GameProvider';
import { QUERIES } from '../../constants';

const Piece = React.forwardRef(({ info }, pieceRef) => {
	const { gameSettings, reveal } = React.useContext(GameContext)
	const { size, theme }  = gameSettings
	const { id, content, state } = info
	const { rightEdge, leftEdge, bottomEdge, topEdge } = getEdge(size)

	function getMap() {
    if (!pieceRef.current) {
      // Initialize the Map on first usage.
      pieceRef.current = new Map();
    }
    return pieceRef.current;
  }

	function handleKeyDown(e) {
		if(e.key === 'ArrowUp' || e.key === 'ArrowDown')
			e.preventDefault()
	}

	function handleKeyUp(e, id) {
  	const map = getMap()
		if(e.key === 'ArrowRight') {
			if(!rightEdge.includes(id)) {
    		let node = map.get(id + 1)
				node.focus()
			}
		}
		else if(e.key === 'ArrowLeft') {
			if(!leftEdge.includes(id)) {
				let node = map.get(id - 1)
				node.focus()
			}
		}
		else if(e.key === 'ArrowDown') {
			if(!bottomEdge.includes(id)) {
				let node = map.get(id + size)
				node.focus()
			}
		}
		else if(e.key === 'ArrowUp') {
			if(!topEdge.includes(id)) {
				let node = map.get(id - size)
				node.focus()
			}
		}
	}

  return (
		<Wrapper
			onClick={() => reveal(id)}
			action={state}
			style={{
				'--size': size === 4 ? '118px' : '82px',
				'--mobile-size': size === 4 ? '72px' : '48px',
			}}
			ref={(node) => {
        const map = getMap();
        if(node) {
          map.set(id, node);
        }
        else {
        	map.delete(id)
        }
      }}
			tabIndex={id === 0 ? '0' : '-1'}
			onKeyUp={(e) => handleKeyUp(e, id)}
			onKeyDown={handleKeyDown}
		>
			<Text
				action={state}
				style={{
					'--font-size': size === 4 ? 'calc(56 / 16 * 1rem)' : 'calc(44 / 16 * 1rem)',
					'--mobile-font-size': size === 4 ? 'calc(40 / 16 * 1rem)' : 'calc(24 / 16 * 1rem)',
				}}
				size={size}
				aria-hidden={state === 'cover' ? "true" : "false"}
			>
				{theme === 'numbers' ? content : <Icon content={content}/>}
			</Text>
		</Wrapper>
  );
});

const Wrapper = styled(UnstyledButton)`
	width: var(--size);
	height: var(--size);
	border-radius: 100%;
	display: grid;
	place-content: center;
	background: var(--color-secondary);
	animation: ${p => getBackgroundAnimation(p.action)} 600ms;
	animation-fill-mode: both;

	&:hover {
		background: var(--color-secondary-hover);
	}

	@media ${QUERIES.phoneAndDown} {
		width: var(--mobile-size);
		height: var(--mobile-size);
	}
`

const Text = styled.span`
	font-size: var(--font-size);
	color: var(--color-secondary);
	opacity: 0;
	animation: ${p => getTextAnimation(p.action)} 600ms;
	animation-fill-mode: both;

	@media ${QUERIES.phoneAndDown} {
		font-size: var(--mobile-font-size);
	}
`

export default Piece;
