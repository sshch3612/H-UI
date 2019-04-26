import React from 'react';
import Toast from './Toast'
import Ceshi from './ceshi'
import Alert from './Alert'
import {Iconfont,Button} from '../../Base';
import {Winblank} from '../../Layout';
import  { Table}  from '../../View';
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
        desc: '延时关闭时间，单位 秒',
        type: 'number',
        default: '1000',
      },
      {
        key: '3',
        property: 'onClose',
        desc: 'toast关闭后回调',
        type: 'Function',
        default: '无',
      },
      {
        key: '4',
        property: 'mask',
        desc: '是否显示透明蒙层，防止触摸穿透',
        type: 'Boolean',
        default: 'true',
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
          <Button inline={true} fillColor='#fff' borderColor='#8f90f9' onClick={()=>{
              Toast.info('文本内容')
          }}>
            <span style={{ color: "#8f90f9" }}>文本Toast</span>
          </Button>
          <Button inline={true} fillColor='#fff' borderColor='#8f90f9' onClick={()=>{
              Toast.info(<div><Iconfont type='reload' color='#8f90f9'/><div>文本内容</div></div>)
          }}>
            <span style={{ color: "#8f90f9" }}>文本 + ICON</span>
          </Button>
        </Winblank>
        <Winblank>
          <h3>Fail Toast</h3>
        </Winblank>
        <Winblank>
        <Button inline={true} fillColor='#fff' borderColor='#8f90f9' onClick={()=>{
              Toast.fail('错误提示')
          }}>
            <span style={{ color: "#8f90f9" }}>错误提示Toast</span>
          </Button>
        </Winblank>
        <Winblank>
          <h3>Success Toast</h3>
        </Winblank>
        <Winblank>
        <Button inline={true} fillColor='#fff' borderColor='#8f90f9' onClick={()=>{
              Toast.success('成功提示')
          }}>
            <span style={{ color: "#8f90f9" }}>正确提示Toast</span>
          </Button>
        </Winblank>
        <Winblank>
          <h3>Loading Toast</h3>
        </Winblank>
        <Winblank>
        <Button inline={true} fillColor='#fff' borderColor='#8f90f9' onClick={()=>{
              Toast.loading('正在加载...')
          }}>
            <span style={{ color: "#8f90f9" }}>加载中 Toast</span>
          </Button>
        </Winblank>
        <Winblank>
          <h3>Api</h3>
        </Winblank>
        <Winblank>
        <ul className='markdown'>
          <li><p><code>Toast.info(content, duration, onClose, mask)</code></p></li>
          <li><p><code>Toast.success(content, duration, onClose, mask)</code></p></li>
          <li><p><code>Toast.fail(content, duration, onClose, mask)</code></p></li>
          <li><p><code>Toast.loading(content, duration, onClose, mask)</code></p></li>
          <li><p><code>Toast.hide()</code></p></li>
        </ul>
        </Winblank>
        <Table columns={columns} datasource={datasource}/>
        <Winblank>
        <p>
        注： duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide
        </p>
        </Winblank>
      </div>
    )
  }
}
