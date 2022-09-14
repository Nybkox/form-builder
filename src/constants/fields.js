import { CONTROL_TYPES } from './controlTypes';

export const FORM_FIELDS = {
  name: 'name',
  type: 'type',
  defaultValue: 'default_value',
  defaultHidden: 'default_hidden',
  defaultReadonly: 'default_readonly',
  label: 'label',
  order: 'order',
};

export const TECH_FIELDS = {
  showValidation: 'tech_show_validation',
  useCustomName: 'tech_use_custom_name',
  custom_name: 'tech_custom_name',
  section: 'tech_section',
};

export const VALIDATION_FIELDS = {
  required: 'required',
  minLength: 'min_length',
  maxLength: 'max_length',
  pattern: 'pattern',
  validators: 'validators',
};

export const SECTION_FIELDS = {
  name: 'name',
  customClassName: 'custom_class_name',
};

export const FIELD_DEFAULT_VALUES = {
  [FORM_FIELDS.name]: '',
  [FORM_FIELDS.type]: CONTROL_TYPES.TEXT,
  [FORM_FIELDS.defaultValue]: '', // todo
  [FORM_FIELDS.defaultHidden]: false,
  [FORM_FIELDS.defaultReadonly]: false,
  [FORM_FIELDS.label]: '',

  [TECH_FIELDS.showValidation]: false,
  [TECH_FIELDS.useCustomName]: false,
  [TECH_FIELDS.custom_name]: '',
  [TECH_FIELDS.section]: '',

  [VALIDATION_FIELDS.required]: false,
  [VALIDATION_FIELDS.minLength]: '',
  [VALIDATION_FIELDS.maxLength]: '',
  [VALIDATION_FIELDS.pattern]: '',
  [VALIDATION_FIELDS.validators]: [],
};

export const SECTION_DEFAULT_VALUES = {
  [SECTION_FIELDS.name]: '',
  [SECTION_FIELDS.customClassName]: '',
};

export const ALL_FIELDS = [
  ...Object.values(FORM_FIELDS),
  ...Object.values(VALIDATION_FIELDS),
  ...Object.values(TECH_FIELDS),
];

export const CUSTOM_VALIDATORS = ['format', 'sendgrid', 'veis', 'blacklist'];

export const CUSTOM_VALIDATORS_ITEMS = CUSTOM_VALIDATORS.map((i) => ({ label: i, value: i }));
// export const FIELD_VALIDATORS_MAP = {
// }
