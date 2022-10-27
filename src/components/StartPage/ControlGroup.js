import React from 'react';
import styled from 'styled-components/macro';

export default function ControlGroup({ values, name, displayedValues, title }) {
	return (
		<fieldset>
			<Title>{title}</Title>
			<ControlWrapper>
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
`

const ControlWrapper = styled.div`
	display: flex;
	gap: 30px;
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
`