import React from "react";
import Button from "./button";
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import "./button.less";
import { Drawer } from "../../Operate";
import { Wingblank, Whitespace } from "../../Layout";
import { Table } from "../../View";

/**
 *
 *
 * @export
 * @class
 * @extends {React.Component}
 */

@observer
export default class extends React.Component {
  state = {
    open: false
  };

  @observable count = 1;

  handleClick = e => {
    // e.preventDefault();
    // this.count +=1
    console.log(45466464);
    // this.setState(
    //   {
    //     open: !this.state.open
    //   },
    //   () => {
    //     console.log(45464);
    //   }
    // );
  };
  @computed
  get total() {
    console.log(5566666);
    return this.count ** 2;
  }

  render() {
    const columns = [
      {
        title: "属性",
        dataIndex: "property",
        key: "property"
      },
      {
        title: "说明",
        dataIndex: "desc",
        key: "desc"
      },
      {
        title: "类型",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "默认值",
        dataIndex: "default",
        key: "default"
      }
    ];
    const datasource = [
      {
        key: "1",
        property: "inline",
        desc: "设置按钮为块元素/行内元素",
        type: "Boolean",
        default: "false"
      },
      {
        key: "2",
        property: "size",
        desc: "设置按钮大小 |large|small",
        type: "String",
        default: "large"
      },
      {
        key: "3",
        property: "fillColor",
        desc: "设置按钮填充色",
        type: "Color",
        default: "#006633"
      },
      {
        key: "4",
        property: "borderColor",
        desc: "设置按钮边框色",
        type: "Color",
        default: "#006633"
      },
      {
        key: "5",
        property: "fillColor",
        desc: "设置按钮填充色",
        type: "Color",
        default: "#006633"
      },
      {
        key: "6",
        property: "loading",
        desc: "设置按钮加载图标",
        type: "Boolean",
        default: "false"
      },
      {
        key: "7",
        property: "Icon",
        desc: "自定义按钮图标",
        type: "React.Element",
        default: ""
      },
      {
        key: "8",
        property: "disable",
        desc: "设置按钮置灰",
        type: "boolean",
        default: "false"
      },
      {
        key: "9",
        property: "onClick",
        desc: "点击回调函数",
        type: "function",
        default: ""
      },
      {
        key: "10",
        property: "style",
        desc: "自定义样式",
        type: "Object",
        default: "无"
      },
      {
        key: "11",
        property: "className",
        desc: "样式类名",
        type: "string",
        default: "无"
      }
    ];
    return (
      <div className="page-content">
        <div style={{ padding: "28px 0", backgroundColor: "#CCCCCC" }}>
          <Wingblank>
            <h2>Buttons 图标</h2>
          </Wingblank>
        </div>
        <Whitespace>
          <Wingblank>
            <h3>主操作</h3>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button inline={true}>
              <span style={{ color: "#ffffff" }}>主操作按钮</span>
            </Button>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button loading onClick={this.handleClick} inline={true}>
              <span style={{ color: "#ffffff" }}>Loading</span>
            </Button>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button disable inline={true}>
              <span style={{ color: "#ffffff" }}>不可点击</span>
            </Button>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <h3>次要操作</h3>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button inline={true} fillColor="#fff" borderColor="#006633">
              <span style={{ color: "#006633" }}>次操作按钮</span>
            </Button>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button
              loading
              onClick={this.handleClick}
              inline={true}
              fillColor="#fff"
              borderColor="#006633"
            >
              <span style={{ color: "#006633" }}>Loading</span>
            </Button>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button
              disable
              inline={true}
              fillColor="#fff"
              borderColor="#006633"
            >
              <span style={{ color: "#006633" }}>不可点击</span>
            </Button>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <h3>通栏按钮</h3>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Button
            inline={true}
            borderColor="#006633"
            style={{
              borderRadius: "0",
              borderLeft: "none",
              borderRight: "none"
            }}
          >
            <span style={{ color: "#fff" }}>主操作按钮</span>
          </Button>
        </Whitespace>
        <Whitespace>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#006633"
            style={{
              borderRadius: "0",
              borderLeft: "none",
              borderRight: "none"
            }}
          >
            <span style={{ color: "#006633" }}>次操作按钮</span>
          </Button>
        </Whitespace>
        <Whitespace>
          <Button
            disable
            inline={true}
            fillColor="#fff"
            borderColor="#006633"
            style={{
              borderRadius: "0",
              borderLeft: "none",
              borderRight: "none"
            }}
          >
            <span style={{ color: "#006633" }}>不可点击</span>
          </Button>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <h3>小按钮</h3>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Button size="small">
            <span style={{ color: "#ffffff" }}>按钮</span>
          </Button>
          <Button loading onClick={this.handleClick} size="small">
            <span style={{ color: "#ffffff" }}>按钮</span>
          </Button>
          <Button disable size="small">
            <span style={{ color: "#ffffff" }}>按钮</span>
          </Button>
        </Whitespace>
        <Table columns={columns} datasource={datasource} />
        <Drawer open={this.state.open} />
      </div>
    );
  }
}
