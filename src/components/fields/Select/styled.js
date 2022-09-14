import styled from '@emotion/styled';
import { baseInputStyle } from '../common';

export const InputContainer = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: 4px;
`;

export const Value = styled.span`
  ${baseInputStyle}
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  overflow-x: scroll;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-top: 4px;
  background: #fff;
  width: 100%;
  border-top: 1px solid var(--color-light-grey);
  overflow-y: scroll;
  max-height: 400px;
  z-index: 3000;
`;

export const Option = styled.span`
  padding: 4px 6px;
  cursor: pointer;

  background-color: ${({ isSelectd }) => (isSelectd ? 'var(--color-light-grey)' : '#fff')};
`;

export const ArrowDown = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000;
  cursor: pointer;
`;
