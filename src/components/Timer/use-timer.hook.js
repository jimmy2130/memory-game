import React from 'react';

export default function useTimer(running) {
	const [time, setTime] = React.useState(0)

	React.useEffect(() => {
		let timeoutId
		if(running && time < 99 * 60 + 59) {
			timeoutId = window.setInterval(() => setTime(t => t + 1), 1000)
		}
		return () => {
			window.clearInterval(timeoutId)
		}
	}, [running, time])
	return time
}