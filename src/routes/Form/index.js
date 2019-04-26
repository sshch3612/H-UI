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
         <Link to='/input'><ListItem arrow>Input输入框</ListItem></Link> 
        </Wingblank>
        <Wingblank>
          <Link to='/radio'><ListItem arrow>Radio单选框</ListItem></Link>
        </Wingblank>
        <Wingblank>
        <Link to='/checkbox'><ListItem arrow>Checkbox 复选框</ListItem></Link>
        </Wingblank>
        <Wingblank>
        <Link to='/slider'><ListItem arrow>Slider滑动条 </ListItem></Link>
        </Wingblank>
        <Wingblank>
        <Link to='/switch'><ListItem arrow>Switch 开关 </ListItem></Link>
        </Wingblank>
        <Wingblank>
        <Link to='/inputnumber'><ListItem arrow>Input Number 数字输入框</ListItem></Link>
        </Wingblank>
        <Wingblank>
        <Link to='/picker'><ListItem arrow>Picker 选择器</ListItem></Link>
        </Wingblank>
        <Wingblank>
        <Link to='/textarea'><ListItem arrow>TextArea 多行文本框</ListItem></Link>
        </Wingblank>
        <Wingblank>
        <Link to='/range'><ListItem arrow>Range 范围选择器</ListItem></Link>
        </Wingblank>
      </List>
    </div>
  );
}

export default Base;
