import React from "react";
import Accordion from "./Accordion";
import { ListItem, Whitespace, Wingblank } from "../../Layout";
import { Iconfont } from "../../Base";

export default class extends React.PureComponent {
  render() {
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>基础用法</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Accordion title={"标题一"}>
              <ListItem>content1</ListItem>
              <ListItem>content2</ListItem>
              <ListItem>content4</ListItem>
            </Accordion>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Accordion title={"标题二"}>
              <div>
                CSS的 content CSS 属性用于在元素的 ::before 和 ::after
                伪元素中插入内容。使用content
                属性插入的内容都是匿名的可替换元素。
                https://developer.mozilla.org/... - 百度快照
              </div>
            </Accordion>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Accordion title={"默认开启"} arrow={true}>
              <ListItem>content1</ListItem>
              <ListItem>content2</ListItem>
              <ListItem>content4</ListItem>
            </Accordion>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>配置图标</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Accordion title={"标题三"} thumb={<Iconfont type={"computer"} />}>
              <ListItem>content1</ListItem>
              <ListItem>content2</ListItem>
              <ListItem>content4</ListItem>
            </Accordion>
          </Wingblank>
        </Whitespace>
      </div>
    );
  }
}
