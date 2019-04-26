import React from 'react';
import SearchBar  from  './SearchBar';
import {Whitespace,Wingblank,ListItem } from '../../Layout';

export default class extends React.Component{



  render(){
    return(
      <div className='page-content'>
      <Whitespace>
          <Wingblank>
            基础用法
          </Wingblank>
        </Whitespace>
        <SearchBar />

        <Whitespace>
          <Wingblank>
            按钮始终显示
          </Wingblank>
        </Whitespace>
        <SearchBar  showsearchbtn/>
        <Whitespace>
          <Wingblank>
            自定义按钮文字
          </Wingblank>
        </Whitespace>
        <SearchBar  searchText={'搜一下哦'} onSearch={(val)=>{
          console.log(val);
        }}/>
      </div>
    )
  }
}