import R from 'ramda';

export const reorder = R.curry((start, end, list) => R.insert(end, R.nth(start, list), R.remove(start, 1, list)));
