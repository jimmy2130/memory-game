import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

export default function TriangleTip({ currentPlayer }) {
	return (
		<TipWrapper style={{'--opacity': currentPlayer ? 1 : 0}}>
			<svg width="38" height="19" viewBox="0 0 38 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M0 19L19 0L38 19H0Z" fill="var(--color-primary)"/>
			</svg>
		</TipWrapper>
	)
}

const TipWrapper = styled.span`
	position: absolute;
	top: -18px;
	left: 0px;
	right: 0px;
	margin-left: auto;
	margin-right: auto;
	width: max-content;
	opacity: var(--opacity);

	transition: opacity;
	transition-delay: var(--delay);

	@media ${QUERIES.tabletAndDown} {
		top: -14px;
		& svg {
			width: 24px;
			height: 12px;
		}
	}

	@media ${QUERIES.phoneAndDown} {
		top: -14px;
		& svg {
			width: 16px;
			height: 8px;
		}
	}
`