import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 16px 16px;
  margin: 10px 0;
  background: var(--color-primary);
  border: 1px solid ${({ isDragging }) => (isDragging ? 'var(--color-light-pink)' : 'var(--color-light-blue)')};
  column-gap: 20px;
  border-radius: 4px;
  transition: border 0.3s;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  column-gap: 16px;
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 15px; // can't use rem here due to rendering bug in FE
`;

export const Actions = styled.div`
  display: flex;
  column-gap: 15px;
`;
