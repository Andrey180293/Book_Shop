import { booksAPI } from "../api/api";
//import { getBooks } from "./books";

export const addToCart = (obj) => ({
  type: "ADD_TO_CART",
  payload: obj,
});

export const removeFromCart = (payloadId) => ({
  type: "REMOVE_FROM_CART",
  payloadId,
});
export const setPricePlus = (payload) => ({ type: "SET_PRICE_PLUS", payload });
export const setPriceMinus = (payload) => ({
  type: "SET_PRICE_MINUS",
  payload,
});

export const minusBookFromDb = (item) => {
  return (dispatch) => {
    booksAPI
      .minusFromDbBook(item)
      .then((data) => {
        dispatch(addToCart(data));
      })
      .then(() => {
        dispatch(setPricePlus(item.price));
      });
  };
};
