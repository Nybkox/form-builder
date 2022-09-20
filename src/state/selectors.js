import { selector, selectorFamily } from 'recoil';
import { fieldsState, sectionsState } from './atoms';

export const usedFieldsState = selector({
  get: ({ get }) => get(fieldsState).map((field) => field.name),
  key: 'usedFields',
});

export const sectionFieldsState = selectorFamily({
  get:
    (sectionId) =>
    ({ get }) => {
      const sections = get(sectionsState);
      const section = sections.find((i) => i.id === sectionId);
      const fields = section?.fields;

      return fields;
    },

  set:
    (sectionId) =>
    ({ get, set }, newValue) => {
      const sections = get(sectionsState);
      const result = sections.map((section) => (section.id === sectionId ? { ...section, fields: newValue } : section));

      set(sectionsState, result);
    },
  key: 'sectionFields',
});

export const fieldsWithoutSectionState = selector({
  get: ({ get }) => {
    const fields = get(fieldsState);
    const sections = get(sectionsState);

    const fieldsWithSectionIds = sections.map((section) => section.fields).flat();
    const result = fields.filter((field) => !fieldsWithSectionIds.includes(field.id));

    return result;
  },
  key: 'fieldsWithoutSection',
});

export const sectionsWithFieldsState = selector({
  get: ({ get }) => {
    const sections = get(sectionsState);
    const fields = get(fieldsState);

    const result = sections.map((section) => ({
      ...section,
      fields: section.fields.map((fieldId) => fields.find((field) => field.id === fieldId)),
    }));

    return result;
  },
  key: 'sectionWithFields',
});
