import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardBooK from "./CardBooK";
import { searchBooks } from "../../../reducers/filter";
import { setLoad, getBookPage, setUserProfile } from "../../../actions/books";
import Preloader from "../../../assets/Preloader/Preloader";
import { hokBook } from "../../hok";

import { compose } from "redux";

const CardBooKContainer = ({
  books,
  setLoad,
  isLoading,
  getBookPage,
  disableButton,
  addBookToCart,
  setUserProfile,
}) => {
  const GetBookPage = (id) => {
    setLoad(false);
    //  getBookPage(id);
    setUserProfile(id);
    setLoad(true);
  };

  useEffect(() => {
    return <Preloader />;
  }, [!isLoading]);
  return (
    <>
      {" "}
      {books &&
        books.map((item, index) => (
          <div key={index}>
            <CardBooK
              setBookPage={GetBookPage}
              item={item}
              addBookToCart={addBookToCart}
              disableButton={disableButton}
            />
          </div>
        ))}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    books:
      state.books.books &&
      searchBooks(
        state.books.books,
        state.filter.byFilter,
        state.filter.searchQuery
      ),
    isLoading: state.books.isLoading,
    profile: state.books.profile,
  };
};

export default compose(
  connect(mapStateToProps, {
    searchBooks,
    setLoad,
    getBookPage,
    setUserProfile,
  }),
  hokBook
)(CardBooKContainer);
