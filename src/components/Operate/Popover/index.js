import React from "react";
import Popover from "./Popover";
import { Button,Icon} from "../../Base";
import {Tag， Icon , Table } from "../../View";
import { Winblank } from "../../Layout";

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
        property: 'className',
        desc: '包裹元素的className',
        type: 'String',
        default: '无',
      },
      {
        key: '2',
        property: 'place',
        desc: '气泡提示位置|left|right|top|bottom|自定义{left:"",top:""}',
        type: 'String',
        default: 'left',
      },
    ]
    return (
      <div className="page-content">
        <Winblank>
          <h3>Popover组件</h3>
        </Winblank>
        <Winblank style={{ textAlign: "center" }}>
          <Popover place={"top"} content={"粉丝看风景呃几个苦瓜"}>
            <Tag shape={"ellipse"} border>
              <span>上面显示</span>
            </Tag>
          </Popover>
        </Winblank>
        <Winblank style={{ textAlign: "center" }}>
          <Popover place={"bottom"} content={"粉丝看风景呃几个苦瓜"}>
            <Tag shape={"ellipse"} border>
              <span>下面显示</span>
            </Tag>
          </Popover>
        </Winblank>
        <Winblank style={{ textAlign: "center" }}>
          <Popover place={"left"} content={"粉丝看风景呃几个苦瓜"}>
            <Tag shape={"ellipse"} border>
              <span>左边显示</span>
            </Tag>
          </Popover>
        </Winblank>
        <Winblank style={{ textAlign: "center" }}>
          <Popover place={"right"} content={"粉丝看风景呃几个苦瓜"}>
            <Tag shape={"ellipse"} border>
              <span>右边显示</span>
            </Tag>
          </Popover>
        </Winblank>
        <Table columns={columns} datasource={datasource}/>
      </div>
    );
  }
}
