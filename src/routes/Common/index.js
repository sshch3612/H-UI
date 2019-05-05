import React from "react";
import { Link } from "dva/router";
import { Wingblank, Whitespace, List, ListItem } from "../../components/Layout";
import { Iconfont } from "../../components/Base";

function Base(props) {
  const { match } = props;
  const ListStyle = {
    backgroundColor: "#fff",
    border: "none",
    boxShadow: "0 0 3px #c0c0c0"
  };
  return (
    <div className="page-content">
      <List>
        <Whitespace>公共组件</Whitespace>
        <Wingblank>
          <Link to="/portal">
            <ListItem arrow>portal 弹框</ListItem>
          </Link>
        </Wingblank>
      </List>
    </div>
  );
}

export default Base;
