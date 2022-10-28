import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

export default function ControlGroup({ values, name, displayedValues, title, gap }) {
	return (
		<fieldset>
			<Title>{title}</Title>
			<ControlWrapper style={{'--gap': `${gap}px`}}>
			{
				values.map((v, i) => (
					<React.Fragment key={displayedValues[i]}>
						<LabelWrapper>
							<Input
								type="radio"
								id={displayedValues[i]}
								name={name}
								value={v}
							/>
							<Label htmlFor={displayedValues[i]}>{displayedValues[i]}</Label>
						</LabelWrapper>
					</React.Fragment>
				))
			}
			</ControlWrapper>
		</fieldset>
	)
}

const Title = styled.legend`
	font-size: calc(20 / 16 * 1rem);
	color: var(--color-tertiary-text);
	margin-bottom: 16px;

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(15 / 16 * 1rem);
		margin-bottom: 12px;
	}
`

const ControlWrapper = styled.div`
	display: flex;
	gap: var(--gap);

	@media ${QUERIES.phoneAndDown} {
		gap: ${'var(--gap)' === '21px' ? '10px' : '11px'}
	}
`

const LabelWrapper = styled.span`
	position: relative;
	flex: 1;
`

const Input = styled.input`
	margin: 0;
	padding: 0;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	cursor: pointer;
	border-radius: 5000px;
`

const Label = styled.label`
	height: 52px;
	background: var(--color-secondary-inactive);
	color: var(--color-text);
	border-radius: 5000px;
	font-size: calc(26 / 16 * 1rem);
	${LabelWrapper}:hover & {
		background: var(--color-secondary-hover);
	}
	${Input}:checked + & {
		background: var(--color-secondary);
	}
	display: grid;
	place-content: center;

	@media ${QUERIES.phoneAndDown} {
		height: 40px;
		font-size: calc(16 / 16 * 1rem);
	}
`