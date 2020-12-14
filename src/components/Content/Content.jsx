import React from "react";
import Filter from "../Filter";
import CardBooKContainer from "./CardBook/CardBooKConteiner";

const ContentComponent = ({ Content }) => {
  return (
    <Content
      style={{
        padding: "0 50px",
        minheight: "1000px",
        display: "flex",
      }}
    >
      <div className="site-layout-content" style={{ marginRight: "50px" }}>
        <CardBooKContainer />
      </div>
    </Content>
  );
};
export default ContentComponent;
