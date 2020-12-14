const initialization = {
  books: [],
  isLoading: null,
  page: null,
  profile: null,
};

function bookReducer(state = initialization, action) {
  switch (action.type) {
    case "SET_BOOK":
      return { ...state, books: action.payload };
    case "SET_LOAD":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_BOOK_PAGE": {
      return { ...state, page: action.page };
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: state.books.filter((item) => item.id === action.id),
      };
    }

    default:
      return state;
  }
}

export default bookReducer;
