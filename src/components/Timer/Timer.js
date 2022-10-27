import React from "react";
import styled from 'styled-components/macro';

function convertTime(time) {
	let second = time % 60
	let minute = ((time - second) / 60).toString().padStart(2, '0').split('')
	second = second.toString().padStart(2, '0').split('')
	return [...minute, ':', ...second].map((t, i) => ({id: i, digit: t}))
}

const LEFT = ['0px', '23px', '36px', '49px', '72px']
const NUM_POS = ['end', 'start', 'center', 'end', 'start']

const Timer = ({ running = false }) => {
	const [time, setTime] = React.useState(0)
	React.useEffect(() => {
		let timeoutId
		if(running && time < 99 * 60 + 59) {
			timeoutId = window.setTimeout(() => setTime(t => t + 1), 1000)
		}
		return () => {
			window.clearTimeout(timeoutId)
		}
	})
	const convertedTime = convertTime(time)
  return (
  	<>
  		<Wrapper>
  		{
  			convertedTime.map((t, i) => <Digit key={t.id} style={{
  				'--left': LEFT[i],
  				'--pos': NUM_POS[i]
  			}}>{t.digit}</Digit>)
  		}
  		</Wrapper>
  		{/*<button onClick={() => setRunning(r => !r)}>Pause</button>*/}
  	</>
  );
};

const Wrapper = styled.span`
	position: relative;
	width: 48px;
	color: var(--color-secondary);
	font-size: calc(32 / 16 * 1rem);
`

const Digit = styled.span`
	position: absolute;
	top: 0;
	left: var(--left);
	// border: 1px solid;
	width: 24px;
	display: grid;
	place-content: center var(--pos);

`

export default Timer;
