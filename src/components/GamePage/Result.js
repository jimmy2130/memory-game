import React from 'react'
import styled from 'styled-components/macro';
import { MultiplePlayerResultDisplay, SinglePlayerResultDisplay } from './ResultDisplay';
import { GameContext } from '../GameProvider';
import Timer from '../Timer';
import { QUERIES } from '../../constants';

export default function Result({ timerKey, createNewTimer, showMobileMenu }) {
	const { playerStats, gameSettings } = React.useContext(GameContext)
	const currentScore = playerStats.reduce((acc, cur) => acc + cur.score, 0)
	const totalScore = gameSettings.size * gameSettings.size / 2
	return (
		<>
		{currentScore ===  totalScore && playerStats.length !== 1 && <MultiplePlayerResultDisplay/>}
		<SingleResultDisplayWrapper style={{
			'--display': currentScore ===  totalScore && playerStats.length === 1 ? 'block' : 'none'
		}}>
			<SinglePlayerResultDisplay createNewTimer={createNewTimer}>
				<Anchor>
					00:00
					<FinalTimerWrapper>
						<Timer
							key={timerKey}
							running={currentScore !== totalScore  && !showMobileMenu}
							end
						/>
					</FinalTimerWrapper>
				</Anchor>
			</SinglePlayerResultDisplay>
		</SingleResultDisplayWrapper>
		</>
	)
}

const SingleResultDisplayWrapper = styled.div`
	display: var(--display);
`

const Anchor = styled.span`
	position: relative;
	color: var(--color-tertiary-background);
	user-select: none;
`

const FinalTimerWrapper = styled.span`
	position: absolute;
	top: 0;
	left: 0;

	@media ${QUERIES.phoneAndDown} {
		left: -15px;
	}
`
