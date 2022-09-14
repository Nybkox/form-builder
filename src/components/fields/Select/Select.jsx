import {
  forwardRef, useCallback, useMemo, useState,
} from 'react';
import ClickAwayListener from 'react-click-away-listener';
import noop from '@/utils/noop';
import { HiddenInput } from '@/components/common/styled';
import { FieldErrorMessage, FieldLabel, FieldRoot } from '@/components/fields/common';
import withController from '@/hoc/withController';
import convertToArray from '@/utils/convertToArray';
import {
  ArrowDown, InputContainer, Option, OptionsContainer, Value,
} from './styled';

const Select = forwardRef(({
  id, name, error, label, items, onBlur, setValue, value, multiple,
}, ref) => {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false) || onBlur(), [onBlur]);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleOptionClickFactory = (item) => () => {
    if (!multiple) {
      setValue(item.value);
      handleClose();
      return;
    }

    const valueArray = convertToArray(value);
    const isSelected = valueArray.includes(item.value);

    if (isSelected) setValue(valueArray.filter((i) => i !== item.value));
    else setValue([...valueArray, item.value]);
  };

  const visibleValue = useMemo(() => (multiple ? convertToArray(value).join(', ') : value), [multiple, value]);

  return (
    <FieldRoot>
      {label && (
        <FieldLabel onClick={handleOpen} htmlFor={id || name}>
          {label}
        </FieldLabel>
      )}
      <InputContainer>
        <HiddenInput aria-hidden="true" name={name} id={id || name} ref={ref} value={visibleValue} onChange={noop} />
        <Value onClick={handleOpen}>{visibleValue}</Value>
        <ArrowDown onClick={handleOpen} />
        {open && (
          <ClickAwayListener onClickAway={handleClose}>
            <OptionsContainer>
              {items.map((item) => (
                <Option
                  isSelectd={multiple ? value.includes(item.value) : value === item.value}
                  key={item.value}
                  onClick={handleOptionClickFactory(item)}
                >
                  {item.label}
                </Option>
              ))}
            </OptionsContainer>
          </ClickAwayListener>
        )}
      </InputContainer>
      {error && <FieldErrorMessage>{error.message}</FieldErrorMessage>}
    </FieldRoot>
  );
});

export default Select;

export const SelectControlled = withController(Select);
