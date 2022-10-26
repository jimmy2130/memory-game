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