import React from "react";
import Aweicon from "./IconAwe";
import Iconfont from "./Iconfont";
import  {Wingblank, Flex}  from '../../Layout';
import { Table } from '../../View';
// import Csstransition from '../Animate/Csstransition';
import { CSSTransition } from 'react-transition-group';

import './index.less';


export default class Icon extends  React.Component {
  render() {
    console.log("icon", this.props);
    const columns = [{
      title: '属性',
      dataIndex: 'property',
      key: 'property',
    }, {
      title: '说明',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '默认值',
      dataIndex: 'default',
      key: 'default',
    }];
    const datasource = [
      {
        key: '1',
        property: 'type',
        desc: 'icon 内置',
        type: 'String',
        default: '',
      },
      {
        key: '2',
        property: 'size',
        desc: '图标大小',
        type: 'Number',
        default: '32',
      },
      {
        key: '3',
        property: 'color',
        desc: '图标颜色',
        type: 'Color',
        default: '#000',
      }
    ]
    return (
        
      <div className='page-content'>
        <Wingblank >
          <h2>ICON 图标</h2>
        </Wingblank> 
        <Flex className='icon-content' itemstyle={{padding:'15px 0',textAlign:'center'}}>
        <Aweicon type="fa-camera-retro" />
        <Aweicon type="fa-camera-retro" size="34" color="red" />
        <Iconfont type="video"/>
        <Iconfont type="add"/>
        <Iconfont type="camera"/>
        <Iconfont type="enter"/>
        <Iconfont type="return"/>
        <Iconfont type="right"/>
        <Iconfont type="search"/>
        <Iconfont type="packup"/>
        </Flex>
        <Table columns={columns} datasource={datasource}/>
        <div style={{color:'#666',padding:'15px'}}>
        注： 分为两种Icon：<br/>
          1.基于font-awesome构建，类型请参考<a href='http://www.fontawesome.com.cn/examples/'>http://www.fontawesome.com.cn/examples/</a> <br/>
          2.基于iconfont构建，类型请查阅 <a href='https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a'>ttps://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a</a>
        </div>
      </div>
    );
  }
}


// export default Csstransition(Icon)