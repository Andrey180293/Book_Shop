import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:3001/books`,
});
export const booksAPI = {
  getBooks() {
    return instance.get(`?_embed=description`).then((response) => {
      return response.data;
    });
  },
  minusFromDbBook(item) {
    return instance
      .patch(`/${item.id}`, {
        amount: item.amount - 1,
      })
      .then((response) => {
        return response.data;
      });
  },
  getBookPage(id) {
    return instance.get(`/${id}?_embed=description`).then((response) => {
      return response.data;
    });
  },
};
