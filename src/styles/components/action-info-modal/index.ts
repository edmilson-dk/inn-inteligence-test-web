import styled from "styled-components";

export const ActionInfoModalWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(244, 244, 244, 0.6);
  position: absolute;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;  
  bottom: 0;

  > article {
    position: relative;
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.darkSecond};
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > article button {
    position: absolute;
    top: -15px;
    right: -15px;

    width: 40px;
    height: 40px;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 0;

    &:hover {
      opacity: 0.9;
    }

    > span,
    > span svg {
      width: 30px;
      height: 30px;
      font-size: 0;
    }

    > span svg {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  > article span svg {
    width: 100px;
    height: 100px;
    stroke: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
  }

  > article h3 {
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray200};
  }
`;