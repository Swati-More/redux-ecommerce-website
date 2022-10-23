//for add item to cart

// import Product from "../../components/Product";

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//remove item from cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
