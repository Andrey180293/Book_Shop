import orderBy from "lodash/orderBy";

const initialization = {
  byFilter: "all",
  searchQuery: "",
};

function filteReducer(state = initialization, action) {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        byFilter: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
}

export default filteReducer;

const sortBy = (books, byFilter) => {
  switch (byFilter) {
    case "all":
      return books;
    case "price_hight":
      return orderBy(books, "price", "desc");
    case "price_low":
      return orderBy(books, "price", "asc");
    case "name":
      return orderBy(books, "name", "asc");

    default:
      return books;
  }
};

export const filterBooks = (books, searchQuery) =>
  books.filter(
    (o) =>
      o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

export const searchBooks = (books, byFilter, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), byFilter);
};
