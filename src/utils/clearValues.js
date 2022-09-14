const clearValues = (obj, values) => Object.fromEntries(Object.entries(obj).filter(([, v]) => !values.includes(v)));

export default clearValues;
