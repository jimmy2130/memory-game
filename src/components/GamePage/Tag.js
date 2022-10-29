import React from 'react'
import styled from 'styled-components/macro';
import { MultiplePlayerTag, SinglePlayerTag } from './PlayerTag';
import Timer from '../Timer';
import { GameContext } from '../GameProvider';
import { QUERIES } from '../../constants';

export default function Tag({ timerKey, showMobileMenu }) {
	const { playerStats, gameSettings, move} = React.useContext(GameContext)
	const currentScore = playerStats.reduce((acc, cur) => acc + cur.score, 0)
	const totalScore = gameSettings.size * gameSettings.size / 2
	return (
		<>
		{
			playerStats.length !== 1 ? (
				<MultiplePlayerTagGroup
					style={{'--delay': currentScore !== totalScore && currentScore !== 0 ? '550ms' : '0ms'}}
				>
				{
					playerStats.map(p => (
						<React.Fragment key={p.id}>
							<MultiplePlayerTag id={p.id} label={`player ${p.id + 1}`}>
								<MultiplePlayerTagValue>
									{p.score}
								</MultiplePlayerTagValue>
							</MultiplePlayerTag>
						</React.Fragment>
					))
				}
				</MultiplePlayerTagGroup>
			) : (
				<SinglePlayerTagGroup>
					<SinglePlayerTag label={'Time'}>
						<SinglePlayerTagValue style={{'--color': 'var(--color-secondary)'}}>
							<Anchor>
								00:00
								<MidTimerWrapper>
									<Timer
										key={timerKey}
										running={currentScore !== totalScore && !showMobileMenu}
									/>
								</MidTimerWrapper>
							</Anchor>
						</SinglePlayerTagValue>
					</SinglePlayerTag>
					<SinglePlayerTag label={'Moves'}>
						<SinglePlayerTagValue style={{'--color': 'var(--color-secondary)'}}>
							{move}
						</SinglePlayerTagValue>
					</SinglePlayerTag>
				</SinglePlayerTagGroup>
			)
		}
		</>
	)
}

const MultiplePlayerTagGroup = styled.div`
	max-width: 1110px;
	padding: 0px 40px 60px 40px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	gap: 30px;

	@media ${QUERIES.tabletAndDown} {
		padding-bottom: 36px;
		gap: 12px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding-bottom: 24px;
		gap: 24px;
	}
`

const SinglePlayerTagGroup = styled.div`
	max-width: 1110px;
	padding: 0px 40px 60px 40px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	gap: 30px;

	@media ${QUERIES.tabletAndDown} {
		padding-bottom: 36px;
	}
`

const MultiplePlayerTagValue = styled.span`
	color: var(--color-secondary);
	font-size: calc(32 / 16 * 1rem);

	@media ${QUERIES.tabletAndDown} {
		font-size: calc(24 / 16 * 1rem);
	}
`

const SinglePlayerTagValue = styled.span`
	color: var(--color);
	font-size: calc(32 / 16 * 1rem);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(24 / 16 * 1rem);
	}
`

const Anchor = styled.span`
	position: relative;
	color: var(--color-tertiary-background);
	user-select: none;
`

const MidTimerWrapper = styled.span`
	position: absolute;
	top: 0;
	left: 0;

	@media ${QUERIES.phoneAndDown} {
		left: -7px;
	}
`