import { NavLink } from "react-router-dom";

const HeaderComponent = ({ Menu, Header, totalPrice, count }) => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
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
    </Header>
  );
};
export default HeaderComponent;
