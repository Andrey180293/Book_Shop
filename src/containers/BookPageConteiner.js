import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import CardBooK from "./Content/CardBook/CardBooK";
import { searchBooks, sortBy, filterBooks } from "../reducers/filter";
import { setBooks } from "../reducers/books";
import { setSum, addToCart } from "../reducers/cart";

const BookPageConteiner = ({ books, setSum, setBooks, searchQuery }) => {
  const AddBook = (item) => {
    let b = 0;
    b = b + item.price;
    setSum(b);
  };
  const removeBook = (item) => {
    if (item.amount > 0) {
      axios
        .patch(`http://localhost:3001/books/${item.id}`, {
          amount: item.amount - 1,
        })
        .then(() => {
          axios.get(`http://localhost:3001/books`).then(({ data }) => {
            setBooks(data);
            AddBook(item);
          });
        });
    } else {
      alert("Nema");
    }
  };
  {
  }
  console.log(searchQuery);

  return (
    <>
      {" "}
      {books &&
        books.map((item, index) => (
          <div key={index}>
            <CardBooK item={item} removeBook={removeBook} />
          </div>
        ))}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    profile: state.books.profile,
  };
};

export default connect(mapStateToProps, {
  setSum,
  setBooks,
  searchBooks,
  sortBy,
  filterBooks,
  addToCart,
})(BookPageConteiner);
