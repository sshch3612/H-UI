import React from "react";
import Modal from "./modal";
import {Button ,Icon } from "../../Base";
import {Wingblank} from "../../Layout";
import {Table} from "../../View";
import "../../markdown.less";

export default class extends React.Component {
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
        property: "message",
        desc: "主体内容(以下)",
        type: "Object",
        default: ""
      },
      {
        key: "2",
        property: "title",
        desc: "模态框标题",
        type: "String",
        default: "无"
      },
      {
        key: "3",
        property: "content",
        desc: "Alert|Confirm 主体内容  propmt|空值",
        type: "String",
        default: "无"
      },
      {
        key: "4",
        property: "promptInput",
        desc: "propmt 的输入框",
        type: 'Array[object] | [{ ref: "username", palcehoder: "请输入姓名", type: "text" },]',
        default: '无'
      },
      {
        key: "5",
        property: "actions",
        desc: "取消/确定操作",
        type: "Array[0bject]",
        default: '[{ text: "确认", onPress: null, style: null }]'
      },
    ];
    return (
      <div className='page-content'>
        <Wingblank >
          <h2>Modal 提示</h2>
        </Wingblank>
        <Wingblank>
          <h3>基本模态框</h3>
        </Wingblank>
        <Wingblank>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Modal.alert({
                title: "标题",
                content: "奇怪富士康法国回来噶看完两个个乌克兰国家控股"
              });
            }}
          >
            <span style={{ color: "#8f90f9" }}>Alert 框</span>
          </Button>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Modal.confirm(
                {
                  title: "confirm标题",
                  content: "奇怪富士康法国回来噶看完两个个乌克兰国家控股"
                },
                [
                  { text: "取消", onPress: null, style: null },
                  { text: "确认", onPress: null, style: null }
                ]
              );
            }}
          >
            <span style={{ color: "#8f90f9" }}>Confirm 框</span>
          </Button>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Modal.prompt(
                {
                  title: "prompt标题",
                  // content: "奇怪富士康法国回来噶看完两个个乌克兰国家控股",
                  promptInput: [
                    { ref: "username", palcehoder: "请输入姓名", type: "text" },
                    {
                      ref: "password",
                      palcehoder: "请输入密码",
                      type: "password"
                    }
                  ]
                },
                [
                  { text: "取消", onPress: null, style: null },
                  { text: "确认", onPress: null, style: null }
                ]
              );
            }}
          >
            <span style={{ color: "#8f90f9" }}>Prompt 框</span>
          </Button>
        </Wingblank>
        <Wingblank>
          <h3>无标题</h3>
        </Wingblank>
        <Wingblank>
          <Button
            inline={true}
            fillColor="#fff"
            borderColor="#8f90f9"
            onClick={() => {
              Modal.alert({
                content: "奇怪富士康法国回来噶看完两个个乌克兰国家控股"
              });
            }}
          >
            <span style={{ color: "#8f90f9" }}>无标题框</span>
          </Button>
        </Wingblank>
        <Wingblank>
          <h3>Modal Api</h3>
        </Wingblank>
        <Wingblank>
          <ul className="markdown">
            <li>
              <p>
                <code>Modal.alert(message, actions)</code>
              </p>
            </li>
            <li>
              <p>
                <code>Modal.confirm(message, actions)</code>
              </p>
            </li>
            <li>
              <p>
                <code>Modal.prompt(message, actions)</code>
              </p>
            </li>
          </ul>
        </Wingblank>
        <Table columns={columns} datasource={datasource} />
      </div>
    );
  }
}
