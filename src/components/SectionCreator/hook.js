import R from 'ramda';
import { SECTION_DEFAULT_VALUES } from '@/constants/fields';
import { editSectionTargetState, isEditingSectionState, sectionsState } from '@/state/atoms';
import { nanoid } from 'nanoid';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue } from 'recoil';

const useSectionCreatorData = () => {
  const [sections, setSections] = useRecoilState(sectionsState);
  const sectionsRef = useRef(sections);
  sectionsRef.current = sections;

  const [isEditingSection, setIsEditingSection] = useRecoilState(isEditingSectionState);
  const editTarget = useRecoilValue(editSectionTargetState);

  const methods = useForm({
    defaultValues: SECTION_DEFAULT_VALUES,
    shouldFocusError: true,
    mode: 'onChange',
  });

  const { handleSubmit, reset, setValue } = methods;

  const addSection = (section) => {
    setSections((prev) => [...prev, { id: nanoid(), fields: [], ...section }]);
  };

  const onCreate = (data) => {
    addSection(data);
    reset();
  };

  const onUpdate = (data) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id === editTarget) return { ...section, ...data };
        return section;
      })
    );
    setIsEditingSection(false);
    reset();
  };

  const onInvalid = (errors) => {
    const invalidFieldNames = Object.keys(errors);
    toast.error(`Section fields are not valid: ${invalidFieldNames.join(', ')}`, { theme: 'dark' });
  };

  useEffect(() => {
    if (!isEditingSection) return reset();

    const section = sectionsRef.current.find((i) => i.id === editTarget);
    const keys = R.pipe(R.keys, R.without(['order', 'id']))(section);

    keys.forEach((i) => setValue(i, section[i]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditingSection, editTarget]);

  return {
    formMethods: methods,
    isEditingSection,
    handleCreate: handleSubmit(onCreate, onInvalid),
    handleUpdate: handleSubmit(onUpdate, onInvalid),
  };
};

export default useSectionCreatorData;
