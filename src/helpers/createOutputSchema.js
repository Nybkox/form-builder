import { FORM_FIELDS, TECH_FIELDS, VALIDATION_FIELDS } from '@/constants/fields';
import clearValues from '@/utils/clearValues';
import pick from '@/utils/pick';

const FORM_FIELDS_NAMES = Object.values(FORM_FIELDS);
const VALIDATION_FIELDS_NAMES = Object.values(VALIDATION_FIELDS);

const getValidation = (field) => {
  const base = pick(field, VALIDATION_FIELDS_NAMES);
  const cleared = clearValues(base, ['', null]);

  return cleared;
};

const getBase = (field) => {
  const base = pick(field, FORM_FIELDS_NAMES);
  if (field[TECH_FIELDS.useCustomName]) base[FORM_FIELDS.name] = field[TECH_FIELDS.custom_name];

  return base;
};

const mapField = (field) => {
  const base = getBase(field);
  const validation = getValidation(field);

  return {
    ...base,
    defaultValidation: validation,
  };
};

const createOutputSchema = (sectionsWithfields) => {
  const filedsWithOrder = [...sectionsWithfields]
    .sort((a, b) => a.order - b.order)
    .map((section) => section.fields)
    .flat()
    .map((field, index) => ({ ...field, order: index * 10 }));
  const sectionsWithOrder = sectionsWithfields
    .map((section, index) => ({ ...section, order: index * 10 }))
    .map((section) => ({ ...section, fields: section.fields.map((field) => field.name) }));
  const mappedFields = filedsWithOrder.map(mapField);

  return { fields: mappedFields, sections: sectionsWithOrder };
};

export default createOutputSchema;
