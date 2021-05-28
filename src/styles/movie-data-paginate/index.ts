import styled from "styled-components";

export const MovieDataPaginateWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  margin: 40px auto;

  > button {
    width: 100%;
    height: 40px;
    font-size: 0;
    filter: brightness(0.9);
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      filter: brightness(0.8);
    }
    &:focus {
      filter: brightness(0.8);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    };

    > span {
      width: 40px;
      height: 40px;

      > svg {
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

  > button:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }

  > button:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;