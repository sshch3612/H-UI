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
           <Link to='/base'><ListItem  style={ListStyle} thumb={<Iconfont type={'manage'} color={}/>} brief={<span>包含图标、按钮</span>} arrow={<Iconfont type={'enter'}/>}>基础</ListItem></Link> 
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
           <Link to='/layout'><ListItem  style={ListStyle} thumb={<Iconfont type={'workbench'} color={}/>} brief={<span>包含列表、Flex等</span>} arrow={<Iconfont type={'enter'}/>}>布局</ListItem></Link> 
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Link to='/view'><ListItem  style={ListStyle} thumb={<Iconfont type={'shielding'} color={}/>} brief={<span>包含Spin、标签等</span>} arrow={<Iconfont type={'enter'}/>}>视图</ListItem></Link>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Link to='/operate'><ListItem  style={ListStyle} thumb={<Iconfont type={'accessory'} color={}/>} brief={<span>包含对话框、弹框等</span>} arrow={<Iconfont type={'enter'}/>}>操作反馈</ListItem></Link>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Link to='/form'><ListItem  style={ListStyle} thumb={<Iconfont type={'createtask'} color={}/>} brief={<span>包含输入框、单选、复选、开关等</span>} arrow={<Iconfont type={'enter'}/>}>表单</ListItem></Link>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Link to='/navigate'><ListItem  style={ListStyle} thumb={<Iconfont type={'undo'} color={}/>} brief={<span>包含导航栏、分段器等</span>} arrow={<Iconfont type={'enter'}/>}>导航</ListItem></Link>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Link to='/highlevel'><ListItem  style={ListStyle} thumb={<Iconfont type={'activity'} color={}/>} brief={<span>包含动画库 等</span>} arrow={<Iconfont type={'enter'}/>}>高阶组件</ListItem></Link>
          </Wingblank>
        </Whitespace>
      </List>
    </div>
  );
}

export default connect()(IndexPage);
