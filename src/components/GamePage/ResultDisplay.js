import React from 'react'
import styled from 'styled-components/macro';
import { GameContext } from '../GameProvider'
import UnstyledButton from '../UnstyledButton'
import { sortPlayerStats } from './GamePage.helpers'

export function ResultDisplay() {
	const { playerStats, restart, setNewGame } = React.useContext(GameContext)
	let sortedPlayerStats = sortPlayerStats([...playerStats])

	const maxScore = sortedPlayerStats[0]['score']
	const tie = sortedPlayerStats[0]['score'] === sortedPlayerStats[1]['score']
	return (
		<>
			<Overlay>
				<Modal>
					<Result>{tie ? 'It\'s a tie' : `Player ${sortedPlayerStats[0]['id'] + 1} Wins!`}</Result>
					<Detail>Game over! Here are the results...</Detail>
					<DisplayGroup>
					{
						sortedPlayerStats.map(p => (
							<PlayerWrapper key={p.id} style={{
								'--background': p.score === maxScore ? 'var(--color-background)' : 'var(--color-tertiary-background)'
							}}>
								<PlayerName style={{
									'--name-color': p.score === maxScore ? 'var(--color-text)' : 'var(--color-tertiary-text)'
								}}>
									{`Player ${p.id + 1} `}{p.score === maxScore && '(Winner!)'}
								</PlayerName>
								<PlayerValue style={{
									'--value-color': p.score === maxScore ? 'var(--color-text)' : 'var(--color-secondary)'
								}}>
									{`${p.score} Pairs`}
								</PlayerValue>
							</PlayerWrapper>
						))
					}
					</DisplayGroup>
	  			<ButtonGroup>
	  				<Restart onClick={restart}>Restart</Restart>
	  				<NewGame onClick={setNewGame}>Setup New Game</NewGame>
	  			</ButtonGroup>
				</Modal>
			</Overlay>
		</>
	)
}

export function SingleResultDisplay({children}) {
	const { move, restart, setNewGame } = React.useContext(GameContext)

	return (
		<>
			<Overlay>
				<Modal>
					<Result>{'You did it!'}</Result>
					<Detail>Game over! Here are the results...</Detail>
					<DisplayGroup>
					<>						
						<PlayerWrapper style={{'--background': 'var(--color-tertiary-background)'}}>
							<PlayerName style={{'--name-color': 'var(--color-tertiary-text)'}}>Time Elapsed</PlayerName>
							<PlayerValue style={{'--value-color': 'var(--color-secondary)'}}>{children}</PlayerValue>
						</PlayerWrapper>
						<PlayerWrapper style={{'--background': 'var(--color-tertiary-background)'}}>
							<PlayerName style={{'--name-color': 'var(--color-tertiary-text)'}}>Moves Taken</PlayerName>
							<PlayerValue style={{'--value-color': 'var(--color-secondary)'}}>{`${move} Moves`}</PlayerValue>
						</PlayerWrapper>
					</>
					</DisplayGroup>
	  			<ButtonGroup>
	  				<Restart onClick={restart}>Restart</Restart>
	  				<NewGame onClick={setNewGame}>Setup New Game</NewGame>
	  			</ButtonGroup>
				</Modal>
			</Overlay>
		</>
	)	
}



const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: var(--color-backdrop);
`

const Modal = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	right: 0;
	max-width: 654px;
	margin-left: auto;
	margin-right: auto;
	background: var(--color-modal-background);
	border-radius: 20px;
	padding: 52px 56px 68px 56px
`

const Result = styled.div`
	font-size: calc(48 / 16 * 1rem);
	color: var(--color-background);
	text-align: center;
	line-height: 60px;
	margin-bottom: 16px;
`

const Detail = styled.div`
	font-size: calc(18 / 16 * 1rem);
	color: var(--color-tertiary-text);
	text-align: center;
	margin-bottom: 40px;
`

const DisplayGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 56px;
`

const PlayerWrapper = styled.div`
	height: 72px;
	background: var(--background);
	border-radius: 10px;
	padding-left: 32px;
	padding-right: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const PlayerName = styled.div`
	font-size: calc(18 / 16 * 1rem);
	color: var(--name-color);
`

const PlayerValue = styled.div`
	font-size: calc(32 / 16 * 1rem);
	color: var(--value-color);
`

const ButtonGroup = styled.div`
	display: flex;
	gap: 16px;
`

const Restart = styled(UnstyledButton)`
	flex: 1;
	height: 52px;
	display: grid;
	place-content: center;
	background: var(--color-primary);
	border-radius: 5000px;
	color: var(--color-text);
	font-size: calc(20 / 16 * 1rem);
	&:hover {
		background: var(--color-primary-light);
	}
`

const NewGame = styled(UnstyledButton)`
	flex: 1;
	height: 52px;
	display: grid;
	place-content: center;
	background: var(--color-tertiary-background);
	border-radius: 5000px;
	color: var(--color-secondary);
	font-size: calc(20 / 16 * 1rem);
	&:hover {
		background: var(--color-secondary-hover);
		color: var(--color-text);
	}
`