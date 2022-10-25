import {
	BACKGROUND_STYLE,
	reveal,
	revealSuccess,
	success,
	revealFail,
	fail
} from './Piece.constants'



export function getAction(state) {
	if(state === 'active')
		return 'reveal'
	if(state === 'cover-inactive')
		return 'revealSuccess'
	if(state === 'active-inactive')
		return 'success'
	if(state === 'cover-cover')
		return 'revealFail'
	if(state === 'active-cover')
		return 'fail'
	return undefined
}

export function getBackground(state) {
	if(state === 'cover' || state === 'cover-cover' || state === 'cover-inactive') {
		return BACKGROUND_STYLE['cover']
	}
	else if(state === 'active' || state === 'active-cover')
		return BACKGROUND_STYLE['active']
	else
		return BACKGROUND_STYLE['inactive']
}

export function getAnimation(action) {
	if(action === 'reveal')
		return reveal
	if(action === 'revealSuccess')
		return revealSuccess
	if(action === 'success')
		return success
	if(action === 'revealFail')
		return revealFail
	if(action === 'fail')
		return fail
	return undefined
}