import {keyframes} from 'styled-components/macro';

export const BACKGROUND_STYLE = {
	cover: 'var(--color-secondary)',
	active: 'var(--color-primary)',
	inactive: 'var(--color-secondary-inactive)'
}

export const TEXT_STYLE = {
	active: 'var(--color-secondary)',
	inactive: 'var(--color-text)'
}

export const backgroundReveal = keyframes`
	0% {background: ${BACKGROUND_STYLE['cover']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['active']};}
`

export const contentReveal = keyframes`
	0% {opacity: 0;}
	10% {opacity: 1; color: ${TEXT_STYLE['active']};}
	100% {opacity: 1; color: ${TEXT_STYLE['active']};}
`

export const backgroundRevealSuccess = keyframes`
	0% {background: ${BACKGROUND_STYLE['covor']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['inactive']};}
`

export const contentRevealSuccess = keyframes`
	0% {opacity: 0;}
	10% {opacity: 1; color: ${TEXT_STYLE['active']};}
	90% {opacity: 1; color: ${TEXT_STYLE['active']};}
	100% {opacity: 1; color: ${TEXT_STYLE['inactive']};}
`

export const backgroundSuccess = keyframes`
	0% {background: ${BACKGROUND_STYLE['active']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['inactive']};}
`

export const contentSuccess = keyframes`
	0% {opacity: 1; color: ${TEXT_STYLE['active']};}
	10% {opacity: 1; color: ${TEXT_STYLE['active']};}
	90% {opacity: 1; color: ${TEXT_STYLE['active']};}
	100% {opacity: 1; color: ${TEXT_STYLE['inactive']};}
`

export const backgroundRevealFail = keyframes`
	0% {background: ${BACKGROUND_STYLE['covor']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['cover']};}
`

export const contentRevealFail = keyframes`
	0% {opacity: 0;}
	10% {opacity: 1; color: ${TEXT_STYLE['active']};}
	90% {opacity: 1; color: ${TEXT_STYLE['active']};}
	100% {opacity: 0;}
`

export const backgroundFail = keyframes`
	0% {background: ${BACKGROUND_STYLE['active']};}
	10% {background: ${BACKGROUND_STYLE['active']};}
	90% {background: ${BACKGROUND_STYLE['active']};}
	100% {background: ${BACKGROUND_STYLE['cover']};}
`

export const contentFail = keyframes`
	0% {opacity: 1; color: ${TEXT_STYLE['active']};}
	10% {opacity: 1; color: ${TEXT_STYLE['active']};}
	90% {opacity: 1; color: ${TEXT_STYLE['active']};}
	100% {opacity: 0;}
`