import { createGlobalStyle } from "styled-components";

export const GlobalsStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, input, button {
    font-family: 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    object-fit: cover;
    object-position: center;
    display: block;
  }

  a {
    text-decoration: none;
  }

  input, button {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;