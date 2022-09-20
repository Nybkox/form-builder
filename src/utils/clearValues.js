import R from 'ramda';

const clearValues = R.curry((obj, values) => R.reject(R.includes(R.__, values))(obj));

export default clearValues;
