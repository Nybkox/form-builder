import styled from '@emotion/styled';
import { css } from '@emotion/react';

const titleBaseStyles = css`
  color: #fff;
  position: relative;
  overflow: hidden;
  text-align: center;
  font-weight: 400;

  &::before {
    background-color: var(--color-light-blue);
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    margin-left: -50%;
    right: 0.5em;
  }

  &::after {
    background-color: var(--color-light-blue);
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    left: 0.5em;
    margin-right: -50%;
  }
`;

export const ColumnTitle = styled.h2`
  ${titleBaseStyles}
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
`;

export const NestedColumn = styled.section`
  display: flex;
  flex-direction: column;
`;

export const NestedColumnTitle = styled.h3`
  ${titleBaseStyles}
  margin-bottom: 0;
`;

export const NestedColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-light-blue);
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 30px;
  margin-top: -10px;
  row-gap: 20px; ;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const HalfDivider = styled.span`
  position: relative;
  width: 100%;

  &::before {
    background-color: var(--color-light-blue);
    content: '';
    display: inline-block;
    height: 1px;
    position: absolute;
    vertical-align: middle;
    width: 50%;
    left: 0;
  }
`;
