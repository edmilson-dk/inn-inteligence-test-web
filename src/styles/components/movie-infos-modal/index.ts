import styled from "styled-components";

export const MovieInfosModalWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(244, 244, 244, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;  
  bottom: 0;
`;

export const MovieInfosModalContent = styled.article`
  width: 100%;
  max-height: 444px;
  max-width: 800px;
  display: grid;
  grid-template-columns: 280px 1fr;
  column-gap: 30px;
  background-color: ${({ theme }) => theme.colors.darkSecond};
  border-radius: 10px;
  position: relative;

  > button#btn-close-modal {
    width: 50px;
    height: 50px;
    top: -20px;
    right: -20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.second};
    position: absolute;
    font-size: 0;

    &:hover {
      opacity: 0.7;
    }
    
    > span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  > header {
    width: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;

    > img { 
      width: 100%;
      height: 444px;
    }
  }

  > section {
    width: 100%;
    padding: 1rem 1rem 1rem 0;
  }

  > section h3 {
    font-size: 1.375rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.gray100};
  }

  > section article {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  > section article p {
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
    margin-bottom: 10px;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.gray200};
  }

  > section article p strong {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.gray100};
  }

  > section footer {
    width: calc(100% - 10px);
    margin-top: 20px;

    > div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    > div strong {
      height: 30px;
      padding: 0 10px;
      border-radius: 10px;
      background-color: rgba(60, 200, 59, 1);
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;