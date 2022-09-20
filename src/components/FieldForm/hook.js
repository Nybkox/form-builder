import { FIELD_DEFAULT_VALUES, TECH_FIELDS } from '@/constants/fields';
import { SF_SUPPORTED_FIELDS_ITEMS } from '@/constants/sf';
import { sectionsState } from '@/state/atoms';
import { usedFieldsState } from '@/state/selectors';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

const useFieldFormData = () => {
  const usedFields = useRecoilValue(usedFieldsState);
  const sections = useRecoilValue(sectionsState);

  const { setValue, watch } = useFormContext();

  const notUsedFields = useMemo(
    () => SF_SUPPORTED_FIELDS_ITEMS.filter((i) => !usedFields.includes(i.value)),
    [usedFields]
  );

  const useCustomName = watch(TECH_FIELDS.useCustomName);

  const sectionItems = sections.map((section) => ({ label: section.name, value: section.id }));

  useEffect(() => {
    if (!useCustomName) {
      setValue(TECH_FIELDS.custom_name, FIELD_DEFAULT_VALUES[TECH_FIELDS.custom_name]);
    }
  }, [setValue, useCustomName]);

  return {
    notUsedFields,
    useCustomName,
    sectionItems,
  };
};

export default useFieldFormData;
