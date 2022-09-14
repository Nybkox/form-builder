import Button from '@/components/common/Button';
import { HalfDivider, Column, ColumnContent, ColumnTitle } from '@/components/common/styled';
import { CheckBoxControlled } from '@/components/fields/Checkbox/CheckBox';
import { TECH_FIELDS } from '@/constants/fields';
import { FormProvider } from 'react-hook-form';
import FieldForm from '@/components/FieldForm';
import ValidationForm from '@/components/ValidationForm';
import useFieldCreatorData from './hook';

const FieldCreator = () => {
  const { isEditingField, showValidation, formMethods, handleCreate, handleUpdate } = useFieldCreatorData();

  return (
    <Column>
      <ColumnTitle>{isEditingField ? 'Edit Field' : 'Create Field'}</ColumnTitle>
      <ColumnContent>
        <FormProvider {...formMethods}>
          <FieldForm />
          <HalfDivider />
          <CheckBoxControlled label="Show validation:" name={TECH_FIELDS.showValidation} />
          {showValidation && <ValidationForm />}

          {isEditingField ? (
            <Button variant="secondary" onClick={handleUpdate}>
              update
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleCreate}>
              create
            </Button>
          )}
        </FormProvider>
      </ColumnContent>
    </Column>
  );
};

export default FieldCreator;
