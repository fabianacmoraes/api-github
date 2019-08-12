import * as ramda from "ramda";

const getAscendOrDescendFn = (key, order) => {
  if (order && order === "desc") return ramda.descend(ramda.prop(key));
  return ramda.ascend(ramda.prop(key));
};

const sortByKey = (arr, key) => {
  return ramda.sortBy(ramda.prop(key))(arr);
};

const sortByKeys = (arr, orderKeys) => {
  const orderArrayFn = orderKeys.map(key =>
    getAscendOrDescendFn(key.name, key.order)
  );
  return ramda.sortWith(orderArrayFn)(arr);
};

export default {
  getAscendOrDescendFn,
  sortByKey,
  sortByKeys
};
