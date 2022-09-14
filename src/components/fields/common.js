import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const FieldRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.label`
  color: #fff;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const FieldErrorMessage = styled.span`
  color: var(--color-light-pink);
  font-size: 0.9rem;
  margin-top: 4px;
`;

export const baseInputStyle = css`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding: 0 6px;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  transition: border 0.3s;

  &:hover {
    outline: 1px solid var(--color-light-pink);
  }
`;
