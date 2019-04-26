import React from "react";
import Radio from "./Radio";
import { Wingblank} from "../../Layout";
import { Table} from '../../View';
import Group from './RadioGroup';

export default class extends React.Component {
  state = {
    fruit: [
      { value: "苹果", checked: true },
      { value: "李子",},
      { value: "香蕉",}
    ],
    fruit1: [
      { value: "苹果",  },
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
        key: '2',
        property: 'defaultValue',
        desc: 'Radio 中的Value值',
        type: 'number|string',
        default: '无',
      },
      {
        key: '3',
        property: 'name',
        desc: 'Radio的name属性值',
        type: 'String',
        default: '无',
      },
      {
        key: '4',
        property: 'disable',
        desc: '复选框是否禁用',
        type: 'Boolean',
        default: 'false',
      },
      {
        key: '5',
        property: 'onChange',
        desc: 'change事件触发回调',
        type: '(event:object):void',
        default: '无',
      },
    ]
    return (
      <div className="page-content">
        <Wingblank>
          <h2>Radio 图标</h2>
        </Wingblank>
        <Wingblank>
          <h3>基础用法</h3>
        </Wingblank>
        <Group defaultValue={1}>
        {fruit.map((item, index) => {
          return (
            <Radio
              key={item.value}
              value={index}
            >
              {item.value}
            </Radio>
          );
        })}
        </Group>
        <Wingblank>
          <h3>含描述信息</h3>
        </Wingblank>
        <Group defaultValue={1}>
        {fruit1.map((item, index) => {
          return (
            <Radio
              key={item.value}
              value={index}
              name="test"
              align={'flex-start'}
              brief={'先确定需求：当切换路由的时候，旧的路由内容在一定时间内过渡消失，新的路由内容过渡显示在这个需要里面有两个重要的部分：过渡期间，会同时存在两个节点：新节点和旧节点'}
            >
              {item.value}
            </Radio>
          );
        })}
        </Group>
        <Wingblank>
          <h3>选项禁用</h3>
        </Wingblank>
        {fruit2.map((item, index) => {
          return (
            <Radio
              key={item.value}
              
              checked={item.checked}
              name="test"
              onChange={e => {
                console.log(e,e.currentTarget.checked,555);
                const checked = e.currentTarget.checked;

                this.setState((prestate, props) => ({
                  fruit2: prestate.fruit1.map((stateitem, stateindex) => {
                    return index === stateindex
                      ? { ...stateitem, checked: checked }
                      : stateitem;
                  })
                }));
              }}
              align={'flex-start'}
              disable
              brief={'先确定需求：当切换路由的时候，旧的路由内容在一定时间内过渡消失，新的路由内容过渡显示在这个需要里面有两个重要的部分：过渡期间，会同时存在两个节点：新节点和旧节点'}
            >
              {item.value}
            </Radio>
          );
        })}
        <Table columns={columns} datasource={datasource}/>
        <div>注：其它属性参考ListItem</div>
      </div>
    );
  }
}
