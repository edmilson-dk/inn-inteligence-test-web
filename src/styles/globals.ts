import { createGlobalStyle, keyframes } from "styled-components";

const loadingAnimate = keyframes`
  0% {
    transform: rotate(0);
  }100% {
    transform: rotate(360deg);
  }
`;

export const GlobalsStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(244, 244, 244, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    
    > div {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border-top: 5px solid #3cc83b;
      border-bottom: 5px solid #3cc83b;
      border-left: 5px solid #ccc;
      border-right: 5px solid #ccc;

      animation: ${loadingAnimate} .8s ease-in-out infinite;
    }
  }

  html {
    font-size: 100%;
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