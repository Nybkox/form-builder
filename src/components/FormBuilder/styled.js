import styled from '@emotion/styled';

export const Root = styled.div`
  grid-column-gap: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  margin: 0 auto 100px;
  max-width: 2000px;
  overflow: hidden;
  padding: 0 20px 100px;
`;
