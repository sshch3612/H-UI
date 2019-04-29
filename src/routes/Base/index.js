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
         <Link to='/icon'><ListItem arrow={<Iconfont type={'enter'}/>}>Icon图标</ListItem></Link> 
        </Wingblank>
        <Wingblank>
          <Link to='/buttons'><ListItem arrow={<Iconfont type={'enter'}/>}>Button 按钮</ListItem></Link>
        </Wingblank>
        <Wingblank>
          {/* <ListItem arrow={<Iconfont type={'enter'}/>}>Icon图标</ListItem> */}
        </Wingblank>
      </List>
    </div>
  );
}

export default Base;
