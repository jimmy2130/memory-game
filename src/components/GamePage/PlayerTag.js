import React from "react";
import styled from 'styled-components/macro';
import { GameContext } from '../GameProvider';

export function PlayerTag({id, label, children}) {
	const { move, playerStats } = React.useContext(GameContext)
	const currentPlayer = id === move % playerStats.length
	return (
		<Wrapper style={{
			'--background': currentPlayer ? 'var(--color-primary)' : 'var(--color-tertiary-background)'
		}}>
			<Label style={{
				'--color': currentPlayer ? 'var(--color-text)' : 'var(--color-tertiary-text)'
			}}>
				{label}
			</Label>
			{children}
			{currentPlayer && <CurrentTag>current turn</CurrentTag>}
			{currentPlayer && <TriangleTip/>}
		</Wrapper>
	)
}

export function BasicTag({label, children}) {
	return (
		<Wrapper style={{'--background': 'var(--color-tertiary-background)'}}>
			<Label style={{'--color': 'var(--color-tertiary-text)'}}>{label}</Label>
			{children}
		</Wrapper>
	)	
}

const Wrapper = styled.div`
	position: relative;
	flex: 1;
	padding: 24px;
	max-width: 256px;
	height: 72px;
	background: var(--background);
	border-radius: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Label = styled.span`
	color: var(--color);
	font-size: calc(18 / 16 * 1rem);
`

const CurrentTag = styled.span`
	position: absolute;
	top: calc(100% + 16px);
	left: 0px;
	right: 0px;
	margin-left: auto;
	margin-right: auto;
	width: max-content;
	color: var(--color-background);
	letter-spacing: calc(5 / 16 * 1rem);
	text-transform: uppercase;
`

function TriangleTip() {
	return (
		<TipWrapper>
			<svg width="38" height="19" viewBox="0 0 38 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M0 19L19 0L38 19H0Z" fill="var(--color-primary)"/>
			</svg>
		</TipWrapper>
	)
}

const TipWrapper = styled.span`
	position: absolute;
	top: -19px;
	left: 0px;
	right: 0px;
	margin-left: auto;
	margin-right: auto;
	width: max-content;	
`