import { CheckBoxControlled } from '@/components/fields/Checkbox/CheckBox';
import { SelectControlled } from '@/components/fields/Select';
import { TextFieldControlled } from '@/components/fields/TextField';
import { CONTROL_TYPES_ITEMS } from '@/constants/controlTypes';
import { ALL_FIELDS, FORM_FIELDS, TECH_FIELDS } from '@/constants/fields';
import useFieldFormData from './hook';

const FieldForm = () => {
  const { useCustomName, notUsedFields, sectionItems } = useFieldFormData();

  return (
    <>
      {useCustomName ? (
        <TextFieldControlled
          label="Name:"
          name={TECH_FIELDS.custom_name}
          rules={{
            required: {
              value: true,
              message: 'Name is required',
            },
            validate: (value) => !ALL_FIELDS.includes(value) || 'The name is already in use.',
          }}
        />
      ) : (
        <SelectControlled
          name={FORM_FIELDS.name}
          label="Name:"
          items={notUsedFields}
          rules={{
            required: {
              value: true,
              message: 'Name is required',
            },
          }}
        />
      )}
      <CheckBoxControlled name={TECH_FIELDS.useCustomName} label="Use custom name:" />

      <SelectControlled name={FORM_FIELDS.type} label="Control type:" items={CONTROL_TYPES_ITEMS} />
      <TextFieldControlled
        label="Label:"
        name={FORM_FIELDS.label}
        rules={{
          required: {
            value: true,
            message: 'Label is required',
          },
        }}
      />
      <TextFieldControlled name={FORM_FIELDS.defaultValue} label="Default value:" />
      <CheckBoxControlled name={FORM_FIELDS.defaultHidden} label="Default hidden:" />
      <CheckBoxControlled name={FORM_FIELDS.defaultReadonly} label="Default readonly:" />
      <SelectControlled rules={{ required: true }} name={TECH_FIELDS.section} label="Section" items={sectionItems} />
    </>
  );
};

export default FieldForm;
