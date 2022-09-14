import { forwardRef, useCallback, useRef } from 'react';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import { HiddenInput } from '@/components/common/styled';
import noop from '@/utils/noop';
import withController from '@/hoc/withController';
import { FieldErrorMessage, FieldLabel, FieldRoot } from '@/components/fields/common';
import { Box, ContentContainer } from './styled';

const CheckBox = forwardRef(({
  id, name, error, label, disabled, value, setValue,
}, ref) => {
  // one day rhf developers will add an option to use an updater function for onChange/setValue...
  const valueRef = useRef(value);
  valueRef.current = value;

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      setValue(!valueRef.current);
    },
    [setValue],
  );

  return (
    <FieldRoot>
      <HiddenInput id={id || name} ref={ref} checked={value} disabled={disabled} onChange={noop} type="checkbox" />
      <ContentContainer>
        <Box onClick={handleClick}>{value && <Icon path={mdiCheck} size="20px" color="var( --color-secondary)" />}</Box>
        {label && (
          <FieldLabel htmlFor={name} onClick={handleClick}>
            {label}
          </FieldLabel>
        )}
      </ContentContainer>
      {error && <FieldErrorMessage>{error.message}</FieldErrorMessage>}
    </FieldRoot>
  );
});

export default CheckBox;

export const CheckBoxControlled = withController(CheckBox);
