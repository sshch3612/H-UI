import React from 'react';
import Navbar from './Navbar'
import WhiteSpace from '../WhiteSpace/Whitespace'
import Iconfont from '../Icon/Iconfont';

export default class extends React.Component{





  
  render(){
    return(
      <div className='page-content'>
        <WhiteSpace>基础用法</WhiteSpace>
        <WhiteSpace>
        <Navbar leftContent={<Iconfont type={'left-circle'} color={'#fff'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </WhiteSpace>
        <WhiteSpace>
        <Navbar leftContent={<Iconfont type={'left-circle'} color={'#fff'}/>} rightContent={<Iconfont type={'up-circle'} color={'#fff'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </WhiteSpace>
        <WhiteSpace>
        <Navbar leftContent={<Iconfont type={'left-circle'} color={'#fff'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </WhiteSpace>
        <WhiteSpace>定义颜色</WhiteSpace>
        <WhiteSpace>
        <Navbar mode={'light'} leftContent={<Iconfont type={'left-circle'} color={'#000'}/>}>
            NavBar 导航栏示例
        </Navbar>
        </WhiteSpace>
        <WhiteSpace>
        <Navbar mode={'light'} leftContent={<span style={{color:'red'}}>返回</span>}>
            NavBar 导航栏示例
        </Navbar>
        </WhiteSpace>
      </div>
    )
  }
}

// export default NavBar;