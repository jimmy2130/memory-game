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
						<Input
							type="radio"
							id={displayedValues[i]}
							name={name}
							value={v}
						/>
						<Label htmlFor={displayedValues[i]}>{displayedValues[i]}</Label>
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

const Input = styled.input`
	display: none;
`

const Label = styled.label`
	flex: 1;
	height: 52px;
	background: var(--color-secondary-inactive);
	color: var(--color-text);
	border-radius: 5000px;
	font-size: calc(26 / 16 * 1rem);
	&: hover {
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