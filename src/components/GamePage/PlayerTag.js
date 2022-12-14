import React from "react";
import styled from 'styled-components/macro';
import { GameContext } from '../GameProvider';
import TriangleTip from './TriangleTip';
import { QUERIES } from '../../constants';
import { setHighlight } from './GamePage.helpers';

export function MultiplePlayerTag({id, label, children}) {
	const { move, playerStats, gameSettings } = React.useContext(GameContext)
	const currentScore = playerStats.reduce((acc, cur) => acc + cur.score, 0)
	const totalScore = gameSettings.size * gameSettings.size / 2
	const end = currentScore === totalScore
	const currentPlayer = id === move % playerStats.length
	return (
		<PlayerTagWrapper style={{
			'--background': setHighlight(end, currentPlayer) ? 'var(--color-primary)' : 'var(--color-tertiary-background)'
		}}>
			<PlayerLabel style={{
				'--color': setHighlight(end, currentPlayer) ? 'var(--color-secondary)' : 'var(--color-tertiary-text)'
			}}>
				{label}
			</PlayerLabel>
			<MobilePlayerLabel style={{
				'--color': setHighlight(end, currentPlayer) ? 'var(--color-secondary)' : 'var(--color-tertiary-text)'
			}}>
				{label[0].toUpperCase()}{label[label.length - 1]}
			</MobilePlayerLabel>
			{children}
			<CurrentTag style={{'--opacity': setHighlight(end, currentPlayer) ? 1 : 0}}>current turn</CurrentTag>
			<TriangleTip hightlight={setHighlight(end, currentPlayer)}/>
		</PlayerTagWrapper>
	)
}

export function SinglePlayerTag({label, children}) {
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

	transition: background;
	transition-delay: var(--delay);

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

	transition: color;
	transition-delay: var(--delay);

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
		transition: color;
		transition-delay: var(--delay);
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
	opacity: var(--opacity);

	transition: opacity;
	transition-delay: var(--delay);

	@media ${QUERIES.tabletAndDown} {
		display: none;
	}
`