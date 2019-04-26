import React from "react";
import Checkbox from "./Checkbox";
import { Wingblank } from "../../Layout";
import { Table } from '../../View';
import Grounp from './CheckboxGroup';

export default class extends React.Component {
  state = {
    fruit: [
      { value: "苹果", checked: false },
      { value: "李子", checked: false },
      { value: "香蕉", checked: false }
    ],
    fruit1: [
      { value: "苹果", checked: false },
      { value: "李子", checked: false },
      { value: "香蕉", checked: false }
    ],
    fruit2: [
      { value: "苹果", checked: false },
      { value: "李子", checked: false },
      { value: "香蕉", checked: false }
    ]
  };
  _handleClick = index => {
    this.setState({
      value1: index
    });
  };
  render() {
    const { value1, fruit,fruit1,fruit2 } = this.state;
    console.log(fruit,444);
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
        property: 'datasource',
        desc: '必填项',
        type: "Array| [{value:'',checked:false}]",
        default: '无',
      },
      {
        key: '2',
        property: 'name',
        desc: 'checkbox的name属性值',
        type: 'String',
        default: '无',
      },
      {
        key: '3',
        property: 'disable',
        desc: '复选框是否禁用',
        type: 'Boolean',
        default: 'false',
      },
      {
        key: '4',
        property: 'onChange',
        desc: 'change事件触发回调',
        type: '(event:object):void',
        default: '无',
      },
    ]
    return (
      <div className="page-content">
        <Wingblank>
          <h2>CheckBox 图标</h2>
        </Wingblank>
        <Wingblank>
          <h3>基础用法</h3>
        </Wingblank>
        <Grounp name="test" datasource={fruit}>
        
        {fruit.map((item, index) => {
          return (
            <Checkbox
              key={item.value}
            >
              {item.value}
            </Checkbox>
            
          );
        })}
        </Grounp>
        <Wingblank>
          <h3>含描述信息</h3>
        </Wingblank>
        <Grounp name="test" datasource={fruit1}>
        {fruit1.map((item, index) => {
          return (
            <Checkbox
              key={item.value}
              
              align={'flex-start'}
              brief={'先确定需求：当切换路由的时候，旧的路由内容在一定时间内过渡消失，新的路由内容过渡显示在这个需要里面有两个重要的部分：过渡期间，会同时存在两个节点：新节点和旧节点'}
            >
              {item.value}
            </Checkbox>
          );
        })}
        </Grounp>
        <Wingblank>
          <h3>选项禁用</h3>
        </Wingblank>
        <Grounp name="test" datasource={fruit2}>
        {fruit2.map((item, index) => {
          return (
            <Checkbox
              key={item.value}
              
              align={'flex-start'}
              disable={index===1?true:false}
              brief={'先确定需求：当切换路由的时候，旧的路由内容在一定时间内过渡消失，新的路由内容过渡显示在这个需要里面有两个重要的部分：过渡期间，会同时存在两个节点：新节点和旧节点'}
            >
              {item.value}
            </Checkbox>
          );
        })}
        </Grounp>
        <Table columns={columns} datasource={datasource}/>
        <div>注：其它属性参考ListItem</div>
      </div>
    );
  }
}
