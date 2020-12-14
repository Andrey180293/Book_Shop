import React from "react";
import { Card, Avatar, Button } from "antd";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

const CardBooK = ({ item, addBookToCart, setBookPage, disableButton }) => {
  console.log(disableButton);
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={item.icon} />}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={item.author}
          description={"price " + item.price}
        />
        <NavLink
          onClick={() => setBookPage(item.id)}
          to={"/cartbook/" + item.id}
        >
          <h2> {item.name}</h2>
        </NavLink>

        {item.amount > 0 ? (
          <>
            {" "}
            <Button
              disabled={disableButton}
              block
              onClick={() => {
                addBookToCart(item);
              }}
            >
              Додати в корзину
            </Button>
          </>
        ) : (
          <>
            <Button disabled={true} block>
              Нема в наявностi
            </Button>
          </>
        )}
      </Card>
    </>
  );
};

export default CardBooK;
/*
 <Button
          disabled={disableButton}
          block
          onClick={() => {
            addBookToCart(item);
          }}
        >
          {item.amount > 0 ? <>Додати в корзину</> : <>Нема в наявностi</>}
        </Button>*/
