import React from "react";
import styled from 'styled-components/macro';

const ErrorPage = () => {
  return (
  	<Wrapper>
  		<ErrorMessage>Sorry, there is nothing here...</ErrorMessage>
  	</Wrapper>
  );
};

const Wrapper = styled.main`
	height: 100%;
	background: var(--color-background);
	display: grid;
	place-content: center;
`

const ErrorMessage = styled.p`
	display: block;
	padding-left: 24px;
	padding-right: 24px;
	text-align: center;
	color: var(--color-text);
	font-size: calc(24 / 16 * 1rem);
`

export default ErrorPage;
