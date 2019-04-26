import React from "react";
import InputNumber from "./InputNumber";
import { Wingblank, Whitespace } from "../../Layout";
import {Table } from '../../View';

export default class extends React.Component {
  render() {
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
        property: 'defaultValue',
        desc: 'input-number 默认显示值',
        type: 'Number',
        default: '无',
      },
      {
        key: '2',
        property: 'min',
        desc: '最小值',
        type: 'Number',
        default: '无',
      },
      {
        key: '3',
        property: 'max',
        desc: '最大值',
        type: 'Number',
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
        property: 'step',
        desc: '步长',
        type: 'Number',
        default: '无',
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
      <div>
        <Whitespace>
          <Wingblank>基础用法</Wingblank>
        </Whitespace>
        <Whitespace>
          <div>min=0,max=10,step=.2</div>
          <Wingblank>
            <InputNumber min={0} max={10} step={0.2} />
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>禁用状态</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <InputNumber min={0} max={10} disabled />
          </Wingblank>
        </Whitespace>
        <Table columns={columns} datasource={datasource}/>
      </div>
    );
  }
}
