import styled from "styled-components";

export const ScreenWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScreenContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -60px;

  > h1 {
    font-size: 100px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.second} );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    margin-bottom: 30px;

    > span svg {
      margin-bottom: -9px;
      margin-left: 10px;
      height: 80px;
      width: 80px;
      stroke: ${({ theme }) => theme.colors.second};
    }
  }

  > form {
    width: 100%;
    max-width: 620px;
    display: flex;

    > input,
    > button {
      transition: border .4s linear;
    }
  }

  > form input {
    width: calc(100% - 50px);
    height: 50px;
    border-radius: 10px 0 0 10px;
    font-size: 1.125rem;
    font-weight: 400;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.gray100};
    background-color: ${({ theme }) => theme.colors.darkSecond};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray200};
      font-weight: 300;
    }

    &:focus {
      border-top: 1px solid ${({ theme }) => theme.colors.second};
      border-left: 1px solid ${({ theme }) => theme.colors.second};
      border-bottom: 1px solid ${({ theme }) => theme.colors.second};
      background-color: ${({ theme }) => theme.colors.darkSecond};
    }

    &:focus ~ button {
      border-top: 1px solid ${({ theme }) => theme.colors.second};
      border-right: 1px solid ${({ theme }) => theme.colors.second};
      border-bottom: 1px solid ${({ theme }) => theme.colors.second};
      background-color: ${({ theme }) => theme.colors.second};

      > span svg {
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

  > form button {
    width: 50px;
    height: 50px;
    padding-right: 1rem;
    background-color:  ${({ theme }) => theme.colors.darkSecond};
    border-radius: 0 10px 10px 0;
    font-size: 0;
    padding: 0 15px 0 10px;

    > span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.second};
    }
  }
`;

export const ScreenContent = styled.section`
  width: 100%;
  padding-bottom: 60px;
  position: absolute;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  justify-content: center;
  align-items: center;
`;

export const ScreenContentContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap: 30px;
`;