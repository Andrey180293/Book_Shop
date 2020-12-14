import { booksAPI } from "../api/api";

export const setBooks = (payload) => ({ type: "SET_BOOK", payload });
export const setLoad = (payload) => ({ type: "SET_LOAD", payload });
export const setUserProfile = (id) => ({
  type: "SET_USER_PROFILE",
  id,
});

export const getBooks = () => {
  return (dispatch) => {
    booksAPI.getBooks().then((data) => {
      dispatch(setBooks(data));
    });
  };
};
export const getBookPage = (id) => {
  return (dispatch) => {
    booksAPI.getBookPage(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
