import React from 'react';
import Steps from './steps';
import {Iconfont } from '../../Base';
import { Whitespace, Wingblank } from '../../Layout';

export default  (props)=>{
  const datasource1 = [
    {
      header:'1',
      text:'步骤1'
      isActive:true,
    },
    {
      header:'2',
      text:'步骤2'
      isActive:false,
    },
  ]
  const datasource2 = [
    {
      header:'1',
      text:'步骤1'
      isActive:true,
    },
    {
      header:'2',
      text:'步骤2'
      isActive:false,
    },
    {
      header:'1',
      text:'步骤3'
      isActive:false,
    },
  ]
  const datasource = [
    {
      header:'1',
      text:'步骤2'
      extra:'fewfwefewf色调开发商可减',
      isActive:true,
      defaultIcon:<Iconfont type={'video'} color={'#fff'} size={22}/>,
      activeIcon:<Iconfont type={'video'} color={'#063'} size={22}/>,
    },
    {
      header:'2',
      text:'步骤1'
      extra:'色调开发商可减肥',
      isActive:false,
      defaultIcon:<Iconfont type={'remind_fill'} color={'#fff'} size={22}/>,
      activeIcon:<Iconfont type={'remind_fill'} color={'#063'} size={22}/>,
    },
    {
      header:'3',
      text:'步骤3'
      extra:'色调开发商可减肥',
      isActive:false,
      defaultIcon:<Iconfont type={'select'} color={'#fff'} size={22}/>,
      activeIcon:<Iconfont type={'select'} color={'#063'} size={22}/>,
    },
    
  ]
  return(
    <div className='page-content'>
      <Whitespace>
        <Wingblank>
          基础用法
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
        <Steps datasource={datasource1} ></Steps> 
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
        <Steps datasource={datasource2} ></Steps> 
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          带附加信息
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          <Steps datasource={datasource} ></Steps>
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          自定义图标
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          <Steps datasource={datasource} showIcon={true}></Steps>
        </Wingblank>
      </Whitespace>
    </div>
  )
}