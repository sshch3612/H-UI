import React from 'react';
import Switch from './Switch';
import { Whitespace ListItem} from '../../Layout'
import { Table} from '../../View';

export default class extends React.Component{


  render(){
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
        property: 'checked',
        desc: '开关是否开启',
        type: 'Boolean',
        default: 'false',
      },
      {
        key: '2',
        property: 'disabled',
        desc: '开关是否禁用',
        type: 'Boolean',
        default: 'false',
      },
      
    ]
    return(
      <div className='page-content'>
        <Whitespace>
          基础用法
        </Whitespace>
        <Whitespace>
          <ListItem extra={<Switch checked={true}/>}>
            <span>开启中</span>
          </ListItem>
          <ListItem extra={ <Switch checked={false}/>}>
            <span>已关闭</span>
          </ListItem>
        </Whitespace>
        <Whitespace>
          禁用状态
        </Whitespace>
        <ListItem extra={<Switch checked={true} disabled/>}>
            <span>不可点击</span>
          </ListItem>
          <ListItem extra={ <Switch checked={false} disabled/>} >
            <span>不可点击</span>
          </ListItem>
          <Table columns={columns} datasource={datasource}/>
      </div>
      
    )
  }
}