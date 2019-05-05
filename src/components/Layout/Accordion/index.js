import React from "react";
import Accordion from "./Accordion";
import { ListItem, Whitespace, Wingblank } from "../../Layout";
import { Iconfont } from '../../Base'

export default class extends React.PureComponent {
  render() {
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>基础用法</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Accordion title={'标题一'}>
              <ListItem>content1</ListItem>
              <ListItem>content2</ListItem>
              <ListItem>content4</ListItem>
            </Accordion>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Accordion title={'默认开启'} arrow={true}>
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
            <Accordion title={'标题三'} thumb={<Iconfont type={'computer'}/>}>
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
