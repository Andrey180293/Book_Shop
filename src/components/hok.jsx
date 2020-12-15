import React from "react";
import { connect } from "react-redux";

import { setBooks } from "../actions/books";
import { addToCart, setPricePlus } from "../actions/cart";
import { booksAPI } from "../api/api";

export const hokBook = (WrappedComponent) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = { disableButton: null };
    }
    addBookToCart = (item) => {
      if (item.amount > 0) {
        Promise.all([
          this.setState({ disableButton: true }),

          booksAPI.minusFromDbBook(item).then((data) => {
            this.props.addToCart(data);
          }),

          this.props.setPricePlus(item.price),
        ]).then((values) => {
          booksAPI.getBooks().then((data) => {
            this.props.setBooks(data);
            this.setState({ disableButton: false });
          });
        });
      } else if (item.amount == 0) {
        // this.setState({ disableButton: true });
        alert(item.id);
      }
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          addBookToCart={this.addBookToCart}
          disableButton={this.state.disableButton}
        />
      );
    }
  }

  let ConnectedAuthRedirectComponent = connect(null, {
    setBooks,
    addToCart,
    setPricePlus,
  })(HOC);
  return ConnectedAuthRedirectComponent;
};
