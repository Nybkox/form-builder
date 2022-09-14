import { FormProvider } from 'react-hook-form';
import { Column, ColumnContent, ColumnTitle } from '@/components/common/styled';
import { TextFieldControlled } from '@/components/fields/TextField';
import { SECTION_FIELDS } from '@/constants/fields';
import Button from '@/components/common/Button';
import useSectionCreatorData from './hook';

const SectionCreator = () => {
  const { isEditingSection, formMethods, handleUpdate, handleCreate } = useSectionCreatorData();

  return (
    <Column>
      <ColumnTitle>{isEditingSection ? 'Edit Section' : 'Create Section'}</ColumnTitle>
      <ColumnContent>
        <FormProvider {...formMethods}>
          <TextFieldControlled label="Name:" name={SECTION_FIELDS.name} rules={{ required: true }} />
          <TextFieldControlled label="Custom class:" name={SECTION_FIELDS.customClassName} />
        </FormProvider>
        {isEditingSection ? (
          <Button variant="secondary" onClick={handleUpdate}>
            update
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleCreate}>
            create
          </Button>
        )}
      </ColumnContent>
    </Column>
  );
};

export default SectionCreator;
