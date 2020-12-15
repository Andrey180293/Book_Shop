import React from "react";
import { connect } from "react-redux";
import { Menu, Input } from "antd";
import {
  DownOutlined,
  MenuUnfoldOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { setFilter, setSearchQuery } from "../actions/filter";

const { Search } = Input;

const Filter = ({ setFilter, setSearchQuery, searchQuery }) => {
  const filterItemClick = (item) => {
    setFilter(item);
    console.log(item);
  };

  return (
    <>
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
        <Menu.Item
          key="1"
          icon={<MenuUnfoldOutlined />}
          onClick={() => filterItemClick("all")}
        >
          Всi
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<DownOutlined />}
          onClick={() => filterItemClick("price_hight")}
        >
          Цiна(дорогi){" "}
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<UpOutlined />}
          onClick={() => filterItemClick("price_low")}
        >
          Цiна(дешевi){" "}
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<DownOutlined />}
          onClick={() => filterItemClick("name")}
        >
          Назва{" "}
        </Menu.Item>
        <Search
          placeholder="input search text"
          allowClear
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: 200, margin: "0 10px" }}
          value={searchQuery}
          placeholder="Введите запрос..."
        />
      </Menu>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchQuery: state.filter.searchQuery,
  };
};
export default connect(mapStateToProps, { setFilter, setSearchQuery })(Filter);
