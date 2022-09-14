import styled from '@emotion/styled';

const Button = styled.button`
  background: ${({ variant }) => (variant === 'secondary' ? 'var(--color-light-pink)' : 'var(--color-light-blue)')};
  color: #fff;
  padding: 5px 10px;
  font-size: 0.9rem;
  text-transform: uppercase;
  border: 1px solid transparent;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    border: 1px solid var(--color-secondary);
    background: ${({ variant }) => (variant === 'secondary' ? 'var(--color-secondary)' : 'var(--color-primary)')};
  }
`;

export default Button;
