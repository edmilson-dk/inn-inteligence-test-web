import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 10px;
  
  @media screen and (min-width: 1100px) { 
    max-width: 1080px;
  }

  @media screen and (min-width: 980px) and (max-width: 1099px) {
    max-width: 940px;
  }
  
  @media screen and (min-width: 740px) and (max-width: 979px) {
    max-width: 720px;
  } 
`;