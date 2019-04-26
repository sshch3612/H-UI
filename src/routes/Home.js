import React from "react";
import { connect } from "dva";
import { Link, NavLink, Route } from "dva/router";
import "./index.less";
import { Wingblank, Whitespace, List, ListItem } from "../components/Layout";
import {Iconfont } from '../components/Base'

function IndexPage(props) {
  const { match } = props;
  const ListStyle = {backgroundColor:'#fff',border:'none',boxShadow:'0 0 3px #c0c0c0' };
  return (
    <div className="page-content" style={{backgroundColor:'#fbfbf5',height:'100%'}}>
      <List>
        <Whitespace>
          Hui ssc
        </Whitespace>
        <Whitespace>
          <Wingblank>
           <Link to='/base'><ListItem  style={ListStyle} thumb={<Iconfont type={'left-circle'} color={}/>} brief={<span>包含图标、按钮</span>} arrow>基础</ListItem></Link> 
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <ListItem  style={ListStyle} thumb={<Iconfont type={'left-circle'} color={}/>} brief={<span>包含图标、按钮</span>} arrow>视图</ListItem>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <ListItem  style={ListStyle} thumb={<Iconfont type={'left-circle'} color={}/>} brief={<span>包含图标、按钮</span>} arrow>操作反馈</ListItem>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Link to='/form'><ListItem  style={ListStyle} thumb={<Iconfont type={'left-circle'} color={}/>} brief={<span>包含输入框、单选、复选、开关等</span>} arrow>表单</ListItem></Link>
          </Wingblank>
        </Whitespace>
      </List>
    </div>
  );
}

export default connect()(IndexPage);
