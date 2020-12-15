import { NavLink, Route } from "react-router-dom";
import Filter from "./Filter";

const HeaderComponent = ({ Menu, Header, totalPrice, count }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: "100px",
        backgroundColor: "white",
      }}
    >
      <div>
        <div className="logo" />
        <Menu
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            {" "}
            <NavLink to="/">Magazin</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <NavLink to="/cart"> Корзина({count})</NavLink>{" "}
          </Menu.Item>
          <Menu.Item key="3">Сума({totalPrice})</Menu.Item>
        </Menu>
      </div>
      <div>
        <Route exact path="/" render={() => <Filter />} />
      </div>
    </div>
  );
};
export default HeaderComponent;
