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
        <Whitespace>布局</Whitespace>
        <Wingblank>
          <Link to="/spin">
            <ListItem arrow>Spin 加载图标</ListItem>
          </Link>
        </Wingblank>
        <Wingblank>
          <Link to="/tag">
            <ListItem arrow>Tag 标签</ListItem>
          </Link>
        </Wingblank>
        <Wingblank>
          <Link to="/divider">
            <ListItem arrow>Divider 分割线</ListItem>
          </Link>
        </Wingblank>
      </List>
    </div>
  );
}

export default Base;
