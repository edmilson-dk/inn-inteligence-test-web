import styled from "styled-components";

export const HomeWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeContainer = styled.section`
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
    border-radius: 30px 0 0 30px;
    font-size: 18px;
    font-weight: 400;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.gray200};
    background-color: ${({ theme }) => theme.colors.darkSecond};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray100};
      font-weight: 300;
    }

    &:focus {
      border-top: 1px solid ${({ theme }) => theme.colors.second};
      border-left: 1px solid ${({ theme }) => theme.colors.second};
      border-bottom: 1px solid ${({ theme }) => theme.colors.second};
    }

    &:focus ~ button {
      border-top: 1px solid ${({ theme }) => theme.colors.second};
      border-right: 1px solid ${({ theme }) => theme.colors.second};
      border-bottom: 1px solid ${({ theme }) => theme.colors.second};
    }
  }

  > form button {
    width: 50px;
    height: 50px;
    padding-right: 1rem;
    background-color:  ${({ theme }) => theme.colors.darkSecond};
    border-radius: 0 30px 30px 0;
    font-size: 0;

    > span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.second};
    }
  }
`;