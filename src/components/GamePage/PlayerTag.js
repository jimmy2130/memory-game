import React from "react";
import styled from 'styled-components/macro';

export default function PlayerTag() {
	return (
		<Wrapper>
		hi
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 256px;
	height: 72px;
	background: var(--color-tertiary-background);
	border-radius: 10px;

	display: grid;
	place-content: center;
`