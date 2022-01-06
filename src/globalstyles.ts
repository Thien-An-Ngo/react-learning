import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0 !important;
    padding: 0;
    font-family: "Porsche Next", sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`
