import React from 'react';
import styled from 'styled-components/macro';
import { GameContext } from '../GameProvider';
import UnstyledButton from '../UnstyledButton';
import useModal from './use-modal.hook';

export default function MobileMenu({ closeMobileMenu }) {
	const { restart, setNewGame } = React.useContext(GameContext)
	const {
		modalRef,
		firstBtnRef,
		lastBtnRef,
		handleScreenClick,
		moveToFirst,
		backToLast
	} = useModal(closeMobileMenu)

	React.useEffect(() => {
		firstBtnRef.current.focus()
	})

	return (
		<>
			<Overlay onClick={handleScreenClick}>
				<ModalWrapper>
					<Modal ref={modalRef}>
		  			<ButtonGroup>
		  				<PrimaryButton 
		  					ref={firstBtnRef}
		  					onKeyDown={backToLast}
		  					onClick={() => {
		  					restart()
		  					closeMobileMenu()
		  				}}>Restart</PrimaryButton>
		  				<SecondaryButton onClick={setNewGame}>Setup New Game</SecondaryButton>
		  				<SecondaryButton
		  					onKeyDown={moveToFirst}
		  					ref={lastBtnRef}
		  					onClick={closeMobileMenu}
		  				>Resume Game</SecondaryButton>
		  			</ButtonGroup>
					</Modal>
				</ModalWrapper>
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

const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	right: 0;
	max-width: calc(327px + 24px + 24px);
	margin-left: auto;
	margin-right: auto;
	padding-left: 24px;
	padding-right: 24px;
`

const Modal = styled.div`
	padding: 24px;
	background: var(--color-modal-background);
	border-radius: 10px;
`

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const PrimaryButton = styled(UnstyledButton)`
	height: 48px;
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

const SecondaryButton = styled(UnstyledButton)`
	height: 48px;
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