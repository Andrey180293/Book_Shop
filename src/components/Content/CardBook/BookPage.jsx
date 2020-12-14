import { Card, Avatar, Button } from "antd";
import { connect } from "react-redux";
import Preloader from "../../../assets/Preloader/Preloader";
import { hokBook } from "../../hok";
import CardBooK from "./CardBooK";
import { compose } from "redux";

const { Meta } = Card;

const WrapeBookPage = ({
  profile,
  isLoading,
  addBookToCart,
  disableButton,
  books,
}) => {
  //!isLoading && profile == null && <Preloader />;
  if (!isLoading || !profile) return <Preloader />;
  console.log(profile[0].description[0].text);

  return (
    <>
      {books &&
        books.map(
          (el) =>
            el.id === profile[0].id && (
              <CardBooK
                item={el}
                addBookToCart={addBookToCart}
                disableButton={disableButton}
              />
            )
        )}
      <p style={{ width: "900px" }}>{profile[0].description[0].text}</p>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.books.isLoading,
    profile: state.books.profile,
    books: state.books.books,
  };
};
export default compose(connect(mapStateToProps, null), hokBook)(WrapeBookPage);
//const WrapeBookPage = hokBook(BookPage);
//export default WrapeBookPage;
/*
 <CardBooK
        item={profile}
        addBookToCart={addBookToCart}
        disableButton={disableButton}
      />*/
