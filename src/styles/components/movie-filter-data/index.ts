import styled from "styled-components";

export const MovieFilterDataWrapper = styled.article`
  max-width: 180px;
  padding: 1rem;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.darkLight};
  align-self: flex-end;
  margin-top: 20px;

  &,
  > div#buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  > div#buttons button + button {
    margin-top: 10px;
  }

  > div#buttons button {
    background-color: transparent;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray200};

    display: flex;
    justify-content: flex-start;
    align-items: center;

    > span {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      border-radius: 2px;
      border: 1px solid ${({ theme }) => theme.colors.primary};

      &.active {
        background-color: ${({ theme }) => theme.colors.primary};
      }

      &.active svg {
        display: block;
      }

      > svg {
        width: 20px;
        height: 20px;
        display: none;
        stroke:  ${({ theme }) => theme.colors.white};
      }
    }
  }

  > div#year {
    width: 100%;
    margin-top: 10px;

    > input {
      max-width: 100%;
    }

    > label {
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray200};
      text-align: left;
      margin-bottom: 5px;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      > span svg {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }  
`;