import { forwardRef, useCallback } from 'react';
import { FieldErrorMessage, FieldLabel, FieldRoot } from '@/components/fields/common';
import withController from '@/hoc/withController';
import { StyledInput } from './styled';

const NumberInput = forwardRef(({
  id, error, name, value, onBlur, setValue, label,
}, ref) => {
  const handleChange = useCallback(
    (e) => {
      const nextValue = Number(e.target.value) || '';
      setValue(nextValue);
    },
    [setValue],
  );

  return (
    <FieldRoot>
      {label && <FieldLabel htmlFor={id || name}>{label}</FieldLabel>}
      <StyledInput
        type="tel"
        id={id || name}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        value={value}
        ref={ref}
      />
      {error && <FieldErrorMessage>{error.message}</FieldErrorMessage>}
    </FieldRoot>
  );
});

export default NumberInput;

export const NumberInputControlled = withController(NumberInput);
