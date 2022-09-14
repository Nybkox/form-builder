import { Column } from '@/components/common/styled';
import styled from '@emotion/styled';
import { HandleRoot } from '@/components/common/Handle/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0;
  border: 1px solid ${({ isDragging }) => (isDragging ? 'var(--color-light-pink)' : 'var(--color-light-blue)')};
  background-color: var(--color-background);
  width: 100%;
  transition: border 0.3s;

  ${Column} {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-light-blue);
  padding: 1rem;

  ${HandleRoot} {
    margin-right: 1rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Name = styled.h4`
  color: #fff;
  margin: 0;
  user-select: none;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;
