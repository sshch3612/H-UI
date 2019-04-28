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
         <Link to='/message'><ListItem arrow>Message 消息通知</ListItem></Link> 
        </Wingblank>
        <Wingblank>
          <Link to='/toast'><ListItem arrow>Toast 轻提示</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/modal'><ListItem arrow>Modal 模态框</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/popover'><ListItem arrow>Popover 气泡提示</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/drawer'><ListItem arrow>Drawer  抽屉</ListItem></Link>
        </Wingblank>
        <Wingblank>
          <Link to='/refresh'><ListItem arrow>PullToRefresh 下拉刷新 上拉加载更多</ListItem></Link>
        </Wingblank>
      </List>
    </div>
  );
}

export default Base;
