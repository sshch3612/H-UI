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
        <Whitespace>布局</Whitespace>
        <Wingblank>
         <Link to='/navbar'><ListItem arrow>NavBar 导航栏</ListItem></Link> 
        </Wingblank>
        <Wingblank>
          <Link to='/pagination'><ListItem arrow>Pagination 分页器</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/segmented'><ListItem arrow>Segmented-Control 分段器</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/tabs'><ListItem arrow>Tabs 标签页</ListItem></Link>
        </Wingblank>
      </List>
    </div>
  );
}

export default Base;
