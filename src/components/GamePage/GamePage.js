import React from "react";
import styled from 'styled-components/macro';
import Board from '../Board';
import UnstyledButton from '../UnstyledButton';
import { PlayerTag, BasicTag } from './PlayerTag';
import { ResultDisplay, SingleResultDisplay } from './ResultDisplay';
import { GameContext } from '../GameProvider';
import Timer from '../Timer';
import { QUERIES } from '../../constants';

const GamePage = () => {
	const { restart, setNewGame, move, playerStats, gameSettings, timerKey } = React.useContext(GameContext)
	const currentScore = playerStats.reduce((acc, cur) => acc + cur.score, 0)
	const totalScore = gameSettings.size * gameSettings.size / 2

  return (
  	<Wrapper>
  		<div>
	  		<Header>
	  			<Title>memory</Title>
	  			<ButtonGroup>
	  				<Restart onClick={restart}>Restart</Restart>
	  				<NewGame onClick={setNewGame}>New Game</NewGame>
	  				<Menu onClick={(e) => e.preventDefault()}>Menu</Menu>
	  			</ButtonGroup>
	  		</Header>
  		</div>
  		<BoardWrapper>
  			<Board/>
  		</BoardWrapper>
  		<div>
				{
					playerStats.length !== 1 ? (
						<MultiplePlayerTagGroup>
						{
							playerStats.map(p => (
								<React.Fragment key={p.id}>
									<PlayerTag id={p.id} label={`player ${p.id + 1}`}>
										<MultiplePlayerTagValue style={{'--color': p.id === move % playerStats.length ? 'var(--color-text)' : 'var(--color-secondary)'}}>
											{p.score}
										</MultiplePlayerTagValue>
									</PlayerTag>
								</React.Fragment>
							))
						}
						</MultiplePlayerTagGroup>
					) : (
						<SinglePlayerTagGroup>
							<BasicTag label={'Time'}>
								<SinglePlayerTagValue style={{'--color': 'var(--color-secondary)'}}>
									<Anchor>
										00:00
										<MidTimerWrapper>
											<Timer key={timerKey} running={currentScore !== totalScore}/>
										</MidTimerWrapper>
									</Anchor>
								</SinglePlayerTagValue>
							</BasicTag>
							<BasicTag label={'Moves'}>
								<SinglePlayerTagValue style={{'--color': 'var(--color-secondary)'}}>
									{move}
								</SinglePlayerTagValue>
							</BasicTag>
						</SinglePlayerTagGroup>
					)
				}				
				{currentScore ===  totalScore && playerStats.length !== 1 && <ResultDisplay/>}
				<SingleResultDisplayWrapper style={{
					'--display': currentScore ===  totalScore && playerStats.length === 1 ? 'block' : 'none'
				}}>
					<SingleResultDisplay>
						<Anchor>
							00:00
							<FinalTimerWrapper>
								<Timer key={timerKey} running={currentScore !== totalScore}/>
							</FinalTimerWrapper>
						</Anchor>
					</SingleResultDisplay>
				</SingleResultDisplayWrapper>
			</div>
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Header = styled.div`
	max-width: 1110px;
	padding-top: 36px;
	padding-left: 40px;
	padding-right: 40px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
`

const Title = styled.h1`
	font-size: calc(40 / 16 * 1rem);
	color: var(--color-background);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(24 / 16 * 1rem);
	}
`

const ButtonGroup = styled.div`
	display: flex;
	gap: 16px;
`

const Restart = styled(UnstyledButton)`
	padding: 14px 28px;
	background: var(--color-primary);
	border-radius: 5000px;
	color: var(--color-text);
	font-size: calc(20 / 16 * 1rem);
	&:hover {
		background: var(--color-primary-light);
	}
	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`

const NewGame = styled(UnstyledButton)`
	padding: 14px 24px;
	background: var(--color-tertiary-background);
	border-radius: 5000px;
	color: var(--color-secondary);
	font-size: calc(20 / 16 * 1rem);
	&:hover {
		background: var(--color-secondary-hover);
		color: var(--color-text);
	}
	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`

const Menu = styled(UnstyledButton)`
	display: none;
	@media ${QUERIES.phoneAndDown} {
		display: block;
		background: var(--color-primary);
		width: 78px;
		height: 40px;
		border-radius: 5000px;
		color: var(--color-text);
		font-size: calc(16 / 16 * 1rem);
		&:hover {
			background: var(--color-primary-light);
		}
	}
`

const BoardWrapper = styled.div`
	width: max-content;
	margin-left: auto;
	margin-right: auto;
`

const MultiplePlayerTagGroup = styled.div`
	// border: 1px solid;
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
	// border: 1px solid;
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
	color: var(--color);
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
`

const MidTimerWrapper = styled.span`
	position: absolute;
	top: 0;
	left: 0;

	@media ${QUERIES.phoneAndDown} {
		left: -14px;
	}
`

const FinalTimerWrapper = styled.span`
	position: absolute;
	top: 0;
	left: 0;
`

const SingleResultDisplayWrapper = styled.div`
	display: var(--display);
`

export default GamePage;
