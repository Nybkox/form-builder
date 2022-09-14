const insert = (list, item, position) => {
  const newList = [...list];
  newList.splice(position, 0, item);
  return newList;
};

export default insert;
