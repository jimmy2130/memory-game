import React from "react";
import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import {
	getAction,
	getBackground,
	getAnimation
} from './Piece.helpers'


function showText(state) {
	if(state === 'cover' || state === 'cover-cover' || state === 'active-cover')
		return false
	return true
}

const Piece = ({ info, reveal}) => {
	const { id, content, state } = info
	function turnOn(id) {
		reveal(id)
	}

  return (
		<Wrapper
			onClick={() => turnOn(id)}
			style={{'--background': getBackground(state)}}
			action={getAction(state)}
		>
			{showText(state) ? content : null}
		</Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
	width: 82px;
	height: 82px;
	border-radius: 100%;
	display: grid;
	place-content: center;
	font-size: calc(44 / 16 * 1rem);
	color: var(--color-text);
	background: var(--background);
	animation: ${p => getAnimation(p.action)} 600ms;
	animation-fill-mode: both;
`

export default Piece;
