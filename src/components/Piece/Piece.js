import React from "react";
import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import {
	getBackgroundAnimation,
	getTextAnimation
} from './Piece.helpers'


const Piece = ({ info, reveal, size, theme }) => {
	const { id, content, state } = info

  return (
		<Wrapper
			onClick={() => reveal(id)}
			action={state}
			style={{
				'--size': size === 4 ? '118px' : '82px',
			}}
		>
			<Text
				action={state}
				style={{'--font-size': size === 4 ? 'calc(56 / 16 * 1rem)' : 'calc(44 / 16 * 1rem)'}}
			>
				{theme === 'numbers' ? content : <Icon content={content}/>}
			</Text>
		</Wrapper>
  );
};

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
`

const Text = styled.span`
	font-size: var(--font-size);
	color: var(--color-text);
	opacity: 0;
	animation: ${p => getTextAnimation(p.action)} 600ms;
	animation-fill-mode: both;
`

export default Piece;
