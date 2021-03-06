import React from "react";
import {Link } from 'dva/router'
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
        <Whitespace>基础</Whitespace>
        <Wingblank>
         <Link to='/list'><ListItem arrow>List 列表</ListItem></Link> 
        </Wingblank>
        <Wingblank>
          <Link to='/flex'><ListItem arrow>Flex 宫格布局</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/whitespace'><ListItem arrow>WhiteSpace 上下间隙</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/wingblank'><ListItem arrow>WingBlank 左右留白</ListItem></Link>
        </Wingblank>
      </List>
    </div>
  );
}

export default Base;
