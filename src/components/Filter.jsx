import React from "react";
import { connect } from "react-redux";
import { Menu, Input } from "antd";
import { MailOutlined, CalendarOutlined } from "@ant-design/icons";
import { setFilter, setSearchQuery } from "../actions/filter";

const { Search } = Input;

const Filter = ({ setFilter, setSearchQuery, searchQuery }) => {
  const filterItemClick = (item) => {
    setFilter(item);
    console.log(item);
  };

  return (
    <>
      <Menu style={{ width: 256, height: "auto" }} defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={<MailOutlined />}
          onClick={() => filterItemClick("all")}
        >
          Всi
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<CalendarOutlined />}
          onClick={() => filterItemClick("popular")}
        >
          Популярнi{" "}
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<CalendarOutlined />}
          onClick={() => filterItemClick("price_hight")}
        >
          Цiна(дорогi){" "}
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<CalendarOutlined />}
          onClick={() => filterItemClick("price_low")}
        >
          Цiна(дешевi){" "}
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<CalendarOutlined />}
          onClick={() => filterItemClick("author")}
        >
          Автор{" "}
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
