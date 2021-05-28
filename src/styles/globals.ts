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

  /* Removes the clear button from date inputs */
  input[type="date"]::-webkit-clear-button {
    display: none;
  }

  /* Removes the spin button */
  input[type="date"]::-webkit-inner-spin-button { 
    display: none;
  }

  /* Always display the drop down caret */
  input[type="date"]::-webkit-calendar-picker-indicator {
    color: #2c3e50;
  }

  /* A few custom styles for date inputs */
  input[type="date"] {
    appearance: none;
    -webkit-appearance: none;
    color: #95a5a6;
    font-size: 1.125rem;
    border: 1px solid #ecf0f1;
    background:#ecf0f1;
    padding: 5px;
    border-radius: 10px;
    display: inline-block !important;
    visibility: visible !important;
  }

  input[type="date"], focus {
    color: #95a5a6;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .not-found-movie {
    position: absolute;
    top: calc(100vh - 150px);
    left: 50%;
    transform: translate(-50%, -50%);
    color: #893bc8;
    font-size: 50px;
    font-weight: 700;
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