import styled from "styled-components";

export const MoviePreviewCardWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto;
  background-color: ${({ theme }) => theme.colors.darkSecond};
  grid-gap: 0;

  > header {
    width: 100%;
    margin-bottom: 0;

    > img { 
      width: 100%;
      height: 280px;
    }
  }
`;

export const MoviePreviewCardContent = styled.div`
  width: 100%;
  padding: 1rem;

  > article {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  > article h3 {
    font-size: 1.125rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.gray100};
  }

  > article span,
  > article time {
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
    text-align: left;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.gray200};
  }

  > footer {
    width: 100%;
  }

  > footer button {
    float: right;
    width: 60px;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.second};
    font-size: 0;


    &:hover {
      opacity: 0.9;
    }
    > span {
      font-size: 0;
    }

    > span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`;