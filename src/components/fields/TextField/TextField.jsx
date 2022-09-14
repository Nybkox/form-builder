import { forwardRef } from 'react';
import { FieldErrorMessage, FieldLabel, FieldRoot } from '@/components/fields/common';
import withController from '@/hoc/withController';
import { StyledInput } from './styled';

const TextField = forwardRef(({
  name, error, label, id, value, onBlur, setValue, ...rest
}, ref) => (
  <FieldRoot>
    {label && <FieldLabel htmlFor={id || name}>{label}</FieldLabel>}
    <StyledInput
      id={id || name}
      name={name}
      ref={ref}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      {...rest}
    />
    {error && <FieldErrorMessage>{error.message}</FieldErrorMessage>}
  </FieldRoot>
));

export default TextField;

export const TextFieldControlled = withController(TextField);
