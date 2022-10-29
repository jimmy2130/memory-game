import React from "react";
import styled from 'styled-components/macro';
import Board from '../Board';
import UnstyledButton from '../UnstyledButton';
import Tag from './Tag';
import Result from './Result';
import MobileMenu from '../MobileMenu';
import { GameContext } from '../GameProvider';
import { QUERIES } from '../../constants';
import useMobileMenu from './use-mobile-menu.hook'

const GamePage = () => {
	const { showMobileMenu, closeMobileMenu, openMobileMenu, handleEscape } = useMobileMenu()
	const [timerKey, setTimerKey] = React.useState(1)
	const createNewTimer = () => setTimerKey(t => t + 1)
	const { restart, setNewGame } = React.useContext(GameContext)

  return (
  	<Wrapper onKeyUp={handleEscape}>
  		<HeaderWrapper>
	  		<Header>
	  			<Title>memory</Title>
	  			<ButtonGroup>
	  				<PrimaryButton onClick={() => {
	  					createNewTimer()
	  					restart()
	  				}}>Restart</PrimaryButton>
	  				<SecondaryButton onClick={setNewGame}>New Game</SecondaryButton>
	  				<MenuButton onClick={openMobileMenu}>Menu</MenuButton>
	  			</ButtonGroup>
	  		</Header>
  		</HeaderWrapper>
  		<BoardWrapper>
  			<Board/>
  		</BoardWrapper>
  		<TagWrapper>
  			<Tag timerKey={timerKey} showMobileMenu={showMobileMenu}/>
			</TagWrapper>
			<Result
				timerKey={timerKey}
				showMobileMenu={showMobileMenu}
				createNewTimer={createNewTimer}
			/>
			{showMobileMenu && <MobileMenu
				closeMobileMenu={closeMobileMenu} createNewTimer={createNewTimer}/>}
  	</Wrapper>
  );
};

const Wrapper = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const HeaderWrapper = styled.div`
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

const PrimaryButton = styled(UnstyledButton)`
	padding: 14px 28px;
	background: var(--color-primary);
	border-radius: 5000px;
	color: var(--color-secondary);
	font-size: calc(20 / 16 * 1rem);
	&:hover {
		background: var(--color-primary-light);
	}
	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`

const SecondaryButton = styled(UnstyledButton)`
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

const MenuButton = styled(UnstyledButton)`
	display: none;
	@media ${QUERIES.phoneAndDown} {
		display: block;
		background: var(--color-primary);
		width: 78px;
		height: 40px;
		border-radius: 5000px;
		color: var(--color-secondary);
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

const TagWrapper = styled.div`
`

export default GamePage;
