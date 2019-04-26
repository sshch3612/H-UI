import React from 'react';
import Message from './Message';
import {Button  } from "../../Base";
import {Winblank} from "../../Layout";
import {Table} from "../../View";
import '../../markdown.less';

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
        property: 'content',
        desc: '提示内容',
        type: 'String| React.Element',
        default: '无',
      },
      {
        key: '2',
        property: 'duration',
        desc: '延时关闭时间，单位 毫秒',
        type: 'number',
        default: '3000',
      },
      {
        key: '3',
        property: 'onClose',
        desc: 'Message关闭后回调',
        type: 'Function',
        default: '无',
      },
      {
        key: '4',
        property: 'color',
        desc: '背景色',
        type: 'color',
        default: '#78a4fa',
      }
    ]
    return(
      <div className='page-content'>
        <Winblank >
          <h2>Toast 提示</h2>
        </Winblank>
        <Winblank>
          <h3>基本案例</h3>
        </Winblank>
        <Winblank>
        <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Message.info('普通消息')
            }}
          >
            <span style={{ color: "#8f90f9" }}>普通消息</span>
          </Button>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Message.success('成功消息')
            }}
          >
            <span style={{ color: "#8f90f9" }}>成功消息</span>
          </Button>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Message.error('错误消息')
            }}
          >
            <span style={{ color: "#8f90f9" }}>错误消息</span>
          </Button>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Message.warning('警告消息')
            }}
          >
            <span style={{ color: "#8f90f9" }}>警告消息</span>
          </Button>
        </Winblank>  
        <Winblank>
          <h3>Api</h3>
        </Winblank>
        <Winblank>
        <ul className='markdown'>
          <li><p><code>Message.info(content, duration, onClose, color)</code></p></li>
          <li><p><code>Message.success(content, duration, onClose, color)</code></p></li>
          <li><p><code>Message.error(content, duration, onClose, color)</code></p></li>
          <li><p><code>Message.warning(content, duration, onClose, color)</code></p></li>
        </ul>
        </Winblank>
        <Table columns={columns} datasource={datasource}/>
        <Winblank>
        </Winblank>
      </div>
    )
  }
}
