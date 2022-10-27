import React from "react";
import styled from 'styled-components/macro';
import { GameContext } from '../GameProvider';
import { QUERIES } from '../../constants';

export function PlayerTag({id, label, children}) {
	const { move, playerStats } = React.useContext(GameContext)
	const currentPlayer = id === move % playerStats.length
	return (
		<PlayerTagWrapper style={{
			'--background': currentPlayer ? 'var(--color-primary)' : 'var(--color-tertiary-background)'
		}}>
			<PlayerLabel style={{
				'--color': currentPlayer ? 'var(--color-text)' : 'var(--color-tertiary-text)'
			}}>
				{label}
			</PlayerLabel>
			<MobilePlayerLabel style={{
				'--color': currentPlayer ? 'var(--color-text)' : 'var(--color-tertiary-text)'
			}}>
				{label[0].toUpperCase()}{label[label.length - 1]}
			</MobilePlayerLabel>
			{children}
			{currentPlayer && <CurrentTag>current turn</CurrentTag>}
			{currentPlayer && <TriangleTip/>}
		</PlayerTagWrapper>
	)
}

export function BasicTag({label, children}) {
	return (
		<BasicTagWrapper style={{'--background': 'var(--color-tertiary-background)'}}>
			<BasicLabel style={{'--color': 'var(--color-tertiary-text)'}}>{label}</BasicLabel>
			{children}
		</BasicTagWrapper>
	)	
}

const PlayerTagWrapper = styled.div`
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

	@media ${QUERIES.tabletAndDown} {
		height: 80px;
		flex-direction: column;
		justify-content: space-between;
		align-items: revert;
		padding: 14px 16px 12px 16px;
	}

	@media ${QUERIES.phoneAndDown} {
		height: 70px;
		padding: 10px 12px;
		align-items: center;
	}
`

const PlayerLabel = styled.span`
	color: var(--color);
	font-size: calc(18 / 16 * 1rem);

	@media ${QUERIES.tabletAndDown} {
		font-size: calc(15 / 16 * 1rem);
	}

	@media ${QUERIES.phoneAndDown} {
		display: none
	}
`

const MobilePlayerLabel = styled.span`
	display: none;
	@media ${QUERIES.phoneAndDown} {
		display: block;
		color: var(--color);
		font-size: calc(15 / 16 * 1rem);
	}
`

const BasicTagWrapper = styled.div`
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

	@media ${QUERIES.phoneAndDown} {
		padding: 10px 0px 0px 0px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`

const BasicLabel = styled.span`
	color: var(--color);
	font-size: calc(18 / 16 * 1rem);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(15 / 16 * 1rem);
	}
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

	@media ${QUERIES.tabletAndDown} {
		display: none;
	}
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