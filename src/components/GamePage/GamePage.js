import React from "react";
import styled from 'styled-components/macro';
import Board from '../Board';
import UnstyledButton from '../UnstyledButton';
import PlayerTag from './PlayerTag';

const GamePage = () => {
  return (
  	<Wrapper>
  		<div>
	  		<Header>
	  			<Title>memory</Title>
	  			<ButtonGroup>
	  				<Restart>Restart</Restart>
	  				<NewGame>New Game</NewGame>
	  			</ButtonGroup>
	  		</Header>
  		</div>
  		<BoardWrapper>
  			<Board/>
  		</BoardWrapper>
  		<div>
				<PlayerTagGroup>
					<PlayerTag/>
					<PlayerTag/>
					<PlayerTag/>
					<PlayerTag/>
				</PlayerTagGroup>
			</div>
  	</Wrapper>
  );
};

const Wrapper = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Header = styled.header`
	max-width: 1110px;
	padding-top: 68px;
	padding-left: 40px;
	padding-right: 40px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h1`
	font-size: calc(40 / 16 * 1rem);
	color: var(--color-background);
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
`

const NewGame = styled(UnstyledButton)`
	padding: 14px 24px;
	background: var(--color-tertiary-background);
	border-radius: 5000px;
	color: var(--color-secondary);
	font-size: calc(20 / 16 * 1rem);
`

const BoardWrapper = styled.div`
	width: max-content;
	margin-left: auto;
	margin-right: auto;
`

const PlayerTagGroup = styled.div`
	max-width: 1110px;
	padding: 0px 40px 36px 40px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 30px;
`

export default GamePage;
