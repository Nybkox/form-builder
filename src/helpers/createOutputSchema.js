import R from 'ramda';
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

const mapIndexed = R.addIndex(R.map);
const orderDiff = (a, b) => a.order - b.order;
const addOrder = (item, index) => ({ ...item, order: index * 10 });
const getFieldNames = (section) => ({ ...section, fields: R.map(R.prop(FORM_FIELDS.name), section.fields) });

const createOutputSchema = (sectionsWithfields) => {
  const filedsWithOrder = R.pipe(
    R.sort(orderDiff),
    R.pluck('fields'),
    R.flatten,
    mapIndexed(addOrder)
  )(sectionsWithfields);

  const sectionsWithOrder = mapIndexed(R.pipe(addOrder, getFieldNames))(sectionsWithfields);

  const mappedFields = R.map(mapField, filedsWithOrder);

  return { fields: mappedFields, sections: sectionsWithOrder };
};

export default createOutputSchema;
