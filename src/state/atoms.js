import { atom } from 'recoil';
import { initialFields, initialSections } from './initialData';

export const fieldsState = atom({
  default: initialFields,
  key: 'fields',
});

export const sectionsState = atom({
  default: initialSections,
  key: 'sections',
});

export const isEditingFieldState = atom({
  default: false,
  key: 'isEditing',
});

export const editFieldTargetState = atom({
  default: null,
  key: 'editFieldTarget',
});

export const isEditingSectionState = atom({
  default: false,
  key: 'isEditingSection',
});

export const editSectionTargetState = atom({
  default: null,
  key: 'editSectionTarget',
});
