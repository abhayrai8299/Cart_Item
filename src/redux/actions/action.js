export const Default_ADD_TO_CART = (item) => {
  return {
    type: "Default_ADD_TO_CART",
    payload: item,
  };
};
export const ADD_TO_CART = (item) => {
    return {
      type: "ADD_TO_CART",
      payload: item,
    };
  };
  export const REMOVE_FROM_CART = (id) => {
    return {
      type: "REMOVE_FROM_CART",
      payload:id,
    };
  };
  
  export const ADJUST_QNTY_ITEM = (item) => {
    return {
      type: "ADJUST_QNTY_ITEM",
      payload:item,
    };
  };
  