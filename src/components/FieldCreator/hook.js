import R from 'ramda';
import { FIELD_DEFAULT_VALUES, FORM_FIELDS, TECH_FIELDS } from '@/constants/fields';
import { editFieldTargetState, fieldsState, isEditingFieldState, sectionsState } from '@/state/atoms';
import { nanoid } from 'nanoid';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const normalizeField = (field) => ({
  ...field,
  [FORM_FIELDS.name]: field[TECH_FIELDS.useCustomName] ? field[TECH_FIELDS.custom_name] : field[FORM_FIELDS.name],
});

const useFieldCreatorData = () => {
  const [fields, setFields] = useRecoilState(fieldsState);
  const setSections = useSetRecoilState(sectionsState);
  const fieldsRef = useRef(fields);
  fieldsRef.current = fields;

  const [isEditingField, setIsEditing] = useRecoilState(isEditingFieldState);
  const editTarget = useRecoilValue(editFieldTargetState);

  const methods = useForm({
    defaultValues: FIELD_DEFAULT_VALUES,
    shouldFocusError: true,
    mode: 'onChange',
  });

  const { handleSubmit, reset, watch, setValue } = methods;

  const showValidation = watch(TECH_FIELDS.showValidation);

  const addField = (field) => {
    const targetSectionId = field[TECH_FIELDS.section];
    const id = nanoid();

    setFields((prev) => [...prev, { id, ...field }]);
    setSections((prev) =>
      prev.map((section) => {
        if (section.id === targetSectionId) return { ...section, fields: [...section.fields, id] };
        return section;
      })
    );
  };

  const onCreate = (data) => {
    addField(data);
    reset();
  };

  const onUpdate = (data) => {
    setFields((prev) => {
      const targetIndex = prev.findIndex((field) => field.id === editTarget);
      const next = [
        ...prev.slice(0, targetIndex),
        { ...normalizeField(data), id: prev[targetIndex].id },
        ...prev.slice(targetIndex + 1),
      ];
      return next;
    });
    setIsEditing(false);
    toast.success('Field updated', { theme: 'dark' });
    reset();
  };

  const onInvalid = (errors) => {
    const invalidFieldNames = Object.keys(errors);
    toast.error(`Fields are not valid: ${invalidFieldNames.join(', ')}`, { theme: 'dark' });
  };

  useEffect(() => {
    if (!isEditingField) return reset();

    const field = fieldsRef.current.find((i) => i.id === editTarget);
    const keys = R.pipe(R.keys, R.without(['order', 'id']))(field);

    keys.forEach((i) => setValue(i, field[i]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditingField, editTarget]);

  return {
    isEditingField,
    showValidation,
    formMethods: methods,
    handleCreate: handleSubmit(onCreate, onInvalid),
    handleUpdate: handleSubmit(onUpdate, onInvalid),
  };
};

export default useFieldCreatorData;
