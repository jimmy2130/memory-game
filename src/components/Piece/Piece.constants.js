import {keyframes} from 'styled-components/macro';

export const BACKGROUND_STYLE = {
	cover: 'var(--color-secondary)',
	active: 'var(--color-primary)',
	inactive: 'var(--color-secondary-inactive)'
}

export const reveal = keyframes`
	0% {background: ${BACKGROUND_STYLE['cover']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['active']};}
`

export const revealSuccess = keyframes`
	0% {background: ${BACKGROUND_STYLE['covor']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['inactive']};}
`

export const success = keyframes`
	0% {background: ${BACKGROUND_STYLE['active']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['inactive']};}
`

export const revealFail = keyframes`
	0% {background: ${BACKGROUND_STYLE['covor']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['cover']};}
`

export const fail = keyframes`
	0% {background: ${BACKGROUND_STYLE['active']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['cover']};}
`