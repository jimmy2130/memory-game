import React from "react";
import styled from 'styled-components/macro';
import ControlGroup from './ControlGroup';
import UnstyledButton from '../UnstyledButton';
import { GameContext } from '../GameProvider';
import { QUERIES } from '../../constants';

const StartPage = () => {
	const { startGame } = React.useContext(GameContext)
  return (
  	<Wrapper>
  		<Title>memory</Title>
  		<FormWrapper>
	  		<Form onSubmit={(e) => {
	  			e.preventDefault()
	  			if(!e.target.size.value || !e.target.theme.value || !e.target.players.value) {
	  				return
	  			}
	  			startGame({
	  					size: e.target.size.value,
	  					theme: e.target.theme.value,
	  					players: e.target.players.value,
	  				}
	  			)
	  		}}>
	  			<ControlGroup
	  				values={['numbers', 'icons']}
	  				name="theme"
	  				displayedValues={['Numbers', 'Icons']}
	  				title="Select Theme"
	  				gap="30"
	  			/>
	  			<ControlGroup
	  				values={[1, 2, 3, 4]}
	  				name="players"
	  				displayedValues={[1, 2, 3, 4]}
	  				title="Numbers of Players"
	  				gap="21"
	  			/>
	  			<ControlGroup
	  				values={[4, 6]}
	  				name="size"
	  				displayedValues={['4x4', '6x6']}
	  				title="Grid Size"
	  				gap="30"
	  			/>
	  			<StartGameButton type="submit">Start Game</StartGameButton>
	  		</Form>
  		</FormWrapper>
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	height: 100%;
	background: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	gap: 40px;
`

const Title = styled.h1`
	font-size: calc(40 / 16 * 1rem);
	color: var(--color-text);
	text-align: center;

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(32 / 16 * 1rem);
	}
`

const FormWrapper = styled.div`
	padding-left: 56px;
	padding-right: 56px;
`

const Form = styled.form`
	max-width: 654px;
	margin-left: auto;
	margin-right: auto;
	padding: 56px;
	background: var(--color-text);
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media ${QUERIES.phoneAndDown} {
		padding: 24px;
		border-radius: 10px;
		gap: 24px;
	}
`

const StartGameButton = styled(UnstyledButton)`
	height: 70px;
	display: grid;
	place-content: center;
	background: var(--color-primary);
	border-radius: 5000px;
	font-size: calc(32 / 16 * 1rem);
	color: var(--color-text);
	&:hover {
		background: var(--color-primary-light);
	}
	@media ${QUERIES.phoneAndDown} {
		height: 48px;
		font-size: calc(18 / 16 * 1rem);
		margin-top: 8px;
	}
`

export default StartPage;
