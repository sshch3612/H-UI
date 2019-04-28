import React from 'react';
import Navbar from './Navbar'
import { Whitespace} from '../../Layout'
import {Iconfont } from '../../Base';

export default class extends React.Component{





  
  render(){
    return(
      <div className='page-content'>
        <Whitespace>基础用法</Whitespace>
        <Whitespace>
        <Navbar leftContent={<Iconfont type={'return'} color={'#fff'}/>} rightContent={<Iconfont type={'other'} color={'#fff'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </Whitespace>
        <Whitespace>
        <Navbar leftContent={<Iconfont type={'return'} color={'#fff'}/>} rightContent={<Iconfont type={'other'} color={'#fff'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </Whitespace>
        <Whitespace>
        <Navbar leftContent={<Iconfont type={'return'} color={'#fff'}/>} rightContent={<Iconfont type={'other'} color={'#fff'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </Whitespace>
        <Whitespace>定义颜色</Whitespace>
        <Whitespace>
        <Navbar mode={'light'} leftContent={<Iconfont type={'return'} color={'#000'}/>} rightContent={<Iconfont type={'other'} color={'#000'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </Whitespace>
        <Whitespace>
        <Navbar mode={'light'} leftContent={<span style={{color:'#000'}}>返回</span>} rightContent={<Iconfont type={'other'} color={'#000'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </Whitespace>
      </div>
    )
  }
}

// export default NavBar;