import React from "react";
import styled from 'styled-components/macro';
import useTimer from './use-timer.hook';
import { convertTime } from './Timer.helpers';
import { QUERIES } from '../../constants';

const LEFT = ['0px', '23px', '36px', '49px', '72px']
const MOBILE_LEFT = ['0px', '23px', '31px', '38px', '61px']
const NUM_POS = ['end', 'start', 'center', 'end', 'start']

const Timer = ({ running = false, end = false }) => {
	const time = useTimer(running)
	const convertedTime = convertTime(time)
  return (
  	<>
  		<Wrapper style={{
  			'--mobile-font-size': end ? 'calc(20 / 16 * 1rem)' : 'calc(24 / 16 * 1rem)'
  		}}>
  		{
  			convertedTime.map((t, i) => <Digit key={t.id} style={{
  				'--left': LEFT[i],
  				'--mobile-left': MOBILE_LEFT[i],
  				'--pos': NUM_POS[i]
  			}}>{t.digit}</Digit>)
  		}
  		</Wrapper>
  	</>
  );
};

const Wrapper = styled.span`
	position: relative;
	width: 48px;
	color: var(--color-secondary);
	font-size: calc(32 / 16 * 1rem);

	@media ${QUERIES.phoneAndDown} {
		font-size: var(--mobile-font-size);
	}
`

const Digit = styled.span`
	position: absolute;
	top: 0;
	left: var(--left);
	width: 24px;
	display: grid;
	place-content: center var(--pos);

	@media ${QUERIES.phoneAndDown} {
		left: var(--mobile-left);
	}

`

export default Timer;
