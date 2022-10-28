import {
	backgroundReveal,
	backgroundRevealSuccess,
	backgroundSuccess,
	backgroundRevealFail,
	backgroundFail,
	contentReveal,
	contentRevealSuccess,
	contentSuccess,
	contentRevealFail,
	contentFail,
} from './Piece.constants'

export function getBackgroundAnimation(state) {
	if(state === 'active')
		return backgroundReveal
	if(state === 'cover-inactive')
		return backgroundRevealSuccess
	if(state === 'active-inactive')
		return backgroundSuccess
	if(state === 'cover-cover')
		return backgroundRevealFail
	if(state === 'active-cover')
		return backgroundFail
	return undefined
}

export function getTextAnimation(state) {
	if(state === 'active')
		return contentReveal
	if(state === 'cover-inactive')
		return contentRevealSuccess
	if(state === 'active-inactive')
		return contentSuccess
	if(state === 'cover-cover')
		return contentRevealFail
	if(state === 'active-cover')
		return contentFail
	return undefined	
}

export function getEdge(size) {
	const rightEdge = size === 4 ? [3, 7, 11, 15] : [5, 11, 17, 23, 29, 35]
	const leftEdge = size === 4 ? [0, 4, 8, 12] : [0, 6, 12, 18, 24, 30]
	const bottomEdge = size === 4 ? [12, 13, 14, 15] : [30, 31, 32, 33, 34, 35]
	const topEdge = size === 4 ? [0, 1, 2, 3] : [0, 1, 2, 3, 4, 5]
	return {rightEdge, leftEdge, bottomEdge, topEdge}
}