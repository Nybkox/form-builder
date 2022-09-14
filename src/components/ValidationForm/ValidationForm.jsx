import { useWatch } from 'react-hook-form';
import { CUSTOM_VALIDATORS_ITEMS, TECH_FIELDS, VALIDATION_FIELDS } from '@/constants/fields';
import { NestedColumn, NestedColumnContent, NestedColumnTitle } from '../common/styled';
import { CheckBoxControlled } from '../fields/Checkbox/CheckBox';
import { NumberInputControlled } from '../fields/NumberInput';
import { TextFieldControlled } from '../fields/TextField';
import { SelectControlled } from '../fields/Select';

const ValidationForm = () => {
  const { [TECH_FIELDS.useCustomName]: useCustomName } = useWatch();

  return (
    <NestedColumn>
      <NestedColumnTitle>Validation</NestedColumnTitle>
      <NestedColumnContent>
        <CheckBoxControlled label="Required:" name={VALIDATION_FIELDS.required} />
        <NumberInputControlled label="Min length:" name={VALIDATION_FIELDS.minLength} />
        <NumberInputControlled label="Max length:" name={VALIDATION_FIELDS.maxLength} />
        <TextFieldControlled label="Pattern:" name={VALIDATION_FIELDS.pattern} />
        {!useCustomName && (
          <SelectControlled
            label="Custom validators"
            name={VALIDATION_FIELDS.validators}
            items={CUSTOM_VALIDATORS_ITEMS}
            multiple
          />
        )}
      </NestedColumnContent>
    </NestedColumn>
  );
};

export default ValidationForm;
