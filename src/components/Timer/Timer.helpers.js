export function convertTime(time) {
	let second = time % 60
	let minute = ((time - second) / 60).toString().padStart(2, '0').split('')
	second = second.toString().padStart(2, '0').split('')
	return [...minute, ':', ...second].map((t, i) => ({id: i, digit: t}))
}