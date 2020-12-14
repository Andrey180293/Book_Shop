import React, { useState } from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { removeFromCart, setPriceMinus } from "../actions/cart";
import { getBooks } from "../actions/books";
import { hokBook } from "../components/hok";
import { compose } from "redux";
import * as axios from "axios";

const Cart = ({
  itemsCart,
  filterItems,
  removeFromCart,
  setPriceMinus,
  addToAmountServer,
  getBooks,
  addBookToCart,
  books,
  disableButton,
}) => {
  const removeCartItem = (item) => {
    setPriceMinus(item.price);
    removeFromCart(item.id);
    axios
      .patch(`http://localhost:3001/books/${item.id}`, {
        amount: item.amount + 1,
      })
      .then(() => {
        getBooks();
      });

    console.log(item.id, item.price);
  };

  const columns = [
    { title: "Назва книги", dataIndex: "name" },
    { title: "Цiна", dataIndex: "price", key: "price" },
    { title: "Автор", dataIndex: "author", key: "author" },
    { title: "Кiлькiсть", dataIndex: "amounts", key: "amounts" },
    {
      title: "Сума",
      dataIndex: "totalprice",
      key: "totalprice",
    },
    {
      title: "Action",
      dataIndex: "delet",
      key: "x",
      render: () => <a onClick={() => removeCartItem(itemsCart)}>Delete</a>,
    },
  ];

  const adCount = (itemsCart, item) => {
    let count = itemsCart.reduce(
      (count, book) => count + (book.id === item.id ? 1 : 0),
      0
    );
    return count;
  };

  const totalPriceItem = (itemsCart, item) => {
    let count = itemsCart.reduce(
      (count, book) => count + (book.id === item.id ? book.price : 0),
      0
    );
    return count;
  };

  const getData = () => {
    var data = [];
    filterItems.forEach((element, index) => {
      data.push({
        key: index,
        name: element.name,
        author: element.author,
        price: element.price,
        amounts: adCount(itemsCart, element),
        totalprice: totalPriceItem(itemsCart, element),
      });
    });
    return data;
  };
  return (
    <>
      <Table columns={columns} dataSource={getData()} pagination={false} />
      <ul>
        {filterItems &&
          filterItems.map((item, index) => (
            <li key={index}>
              <span>
                {item.author +
                  "_+_" +
                  item.name +
                  " Amount" +
                  adCount(itemsCart, item) +
                  "Price " +
                  totalPriceItem(itemsCart, item)}
              </span>
              <span onClick={() => removeCartItem(item)}>Delete</span>

              {books &&
                books.map(
                  (el) =>
                    el.id === item.id && (
                      <Button
                        disabled={disableButton}
                        block
                        onClick={() => {
                          addBookToCart(el);
                        }}
                      >
                        Add
                      </Button>
                    )
                )}
            </li>
          ))}
      </ul>
    </>
  );
};
const addToAmountServer = (item) => {
  axios
    .patch(`http://localhost:3001/books/${item.id}`, {
      amount: item.amount + 1,
    })
    .then(() => {
      getBooks();
    });
};
const mapStateToProps = ({ cart, books }) => ({
  books: books.books,
  itemsCart: cart.items,
  filterItems: cart.items.filter(
    (item, index, a) => a.findIndex((t) => t.id === item.id) === index
  ),
});

export default compose(
  connect(mapStateToProps, {
    removeFromCart,
    setPriceMinus,
    getBooks,
  }),
  hokBook
)(Cart);
