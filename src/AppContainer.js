import "./App.css";
import { connect } from "react-redux";
import { getBooks, setLoad, setBooks } from "./actions/books";
import { setFilter, setSearchQuery } from "./actions/filter";
import { useEffect } from "react";
import Preloader from "./assets/Preloader/Preloader.jsx";
import App from "./App";
import * as axios from "axios";

function AppContainer({
  totalPrice,
  isLoading,
  setLoad,
  getBooks,
  setFilter,
  setSum,
  searchQuery,
  setSearchQuery,
  count,
  items,
  profile,
  setBooks,
}) {
  useEffect(() => {
    setLoad(false);
    getBooks();
    setLoad(true);
  }, []);

  useEffect(() => {
    return <Preloader />;
  }, [!isLoading]);

  return (
    <App
      count={count}
      setFilter={setFilter}
      totalPrice={totalPrice}
      setSum={setSum}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      books={items}
      profile={profile}
      isLoading={isLoading}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books.books,
    isLoading: state.books.isLoading,
    totalPrice: state.cart.totalPrice,
    count: state.cart.items.length,
    items: state.cart.items,
    searchQuery: state.filter.searchQuery,
    profile: state.books.profile,
  };
};

export default connect(mapStateToProps, {
  getBooks,
  setLoad,
  setFilter,
  setSearchQuery,
  setBooks,
})(AppContainer);
