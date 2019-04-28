import React from 'react';
import SegmentedControl from './SegmentedControl';
import {Iconfont} from '../../Base'
import { Whitespace,Wingblank} from '../../Layout'


export default class extends React.Component{
  state = {
    index1: 1,
  }

  render(){
    const {index1 }  = this.state;
    return(
      <div className='page-content'>
        <Whitespace>
          <Wingblank>
            基础用法
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <div>
          <SegmentedControl selectedIndex={index1} onValueChange={(index)=>{this.setState({index1:index})}}/>
            <div style={{height:'100px',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#c0c0c0'}}>
              标签{index1+1}的内容
            </div>
            </div>
          
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            自定义颜色
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <SegmentedControl tintColor={'red'}/>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            禁用
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <SegmentedControl disabled/>
          </Wingblank>
        </Whitespace>
      </div>
    )
  }
}