import React from "react";
import styled from 'styled-components/macro';
import Board from '../Board';
import UnstyledButton from '../UnstyledButton';
import { PlayerTag, BasicTag } from './PlayerTag';
import { ResultDisplay, SingleResultDisplay } from './ResultDisplay';
import { GameContext } from '../GameProvider';
import Timer from '../Timer';

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
	  			</ButtonGroup>
	  		</Header>
  		</div>
  		<BoardWrapper>
  			<Board/>
  		</BoardWrapper>
  		<div>
				<PlayerTagGroup>
				{
					playerStats.length !== 1 ? (playerStats.map(p => (
						<React.Fragment key={p.id}>
							<PlayerTag id={p.id} label={`player ${p.id + 1}`}>
								<TagValue style={{'--color': p.id === move % playerStats.length ? 'var(--color-text)' : 'var(--color-secondary)'}}>
									{p.score}
								</TagValue>
							</PlayerTag>
						</React.Fragment>
					))) : (
						<>
							<BasicTag label={'Time'}>
								<TagValue style={{'--color': 'var(--color-secondary)'}}>
									<Anchor>
										00:00
										<TimerWrapper style={{}}>
											<Timer key={timerKey} running={currentScore !== totalScore}/>
										</TimerWrapper>
									</Anchor>
								</TagValue>
							</BasicTag>
							<BasicTag label={'Moves'}>
								<TagValue style={{'--color': 'var(--color-secondary)'}}>
									{move}
								</TagValue>
							</BasicTag>
						</>
					)
				}
				</PlayerTagGroup>
				{currentScore ===  totalScore && playerStats.length !== 1 && <ResultDisplay/>}
				<SingleResultDisplayWrapper style={{
					'--display': currentScore ===  totalScore && playerStats.length === 1 ? 'block' : 'none'
				}}>
					<SingleResultDisplay>
						<Anchor>
							00:00
							<TimerWrapper style={{}}>
								<Timer key={timerKey} running={currentScore !== totalScore}/>
							</TimerWrapper>
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
	color: ;
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
`

const BoardWrapper = styled.div`
	width: max-content;
	margin-left: auto;
	margin-right: auto;
`

const PlayerTagGroup = styled.div`
	// border: 1px solid;
	max-width: 1110px;
	padding: 0px 40px 60px 40px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	gap: 30px;
`

const TagValue = styled.span`
	color: var(--color);
	font-size: calc(32 / 16 * 1rem);
`

const Anchor = styled.span`
	position: relative;
	color: var(--color-tertiary-background);
`

const TimerWrapper = styled.span`
	position: absolute;
	top: 0;
	left: 0;
`

const SingleResultDisplayWrapper = styled.div`
	display: var(--display);
`

export default GamePage;
