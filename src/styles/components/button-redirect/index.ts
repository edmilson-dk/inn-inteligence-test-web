import styled from "styled-components";

export const ButtonRedirectWrapper = styled.button`
  height: 50px;
  padding: 0 1rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 1px;

  font-size: 1.375rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  text-align: left;

  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    opacity: 0.9;
  }

  > span {
    font-size: 0;
  }

  > span svg {
    margin-left: 15px;
    width: 30px;
    height: 30px;
    stroke: ${({ theme }) => theme.colors.white};
  }
`;