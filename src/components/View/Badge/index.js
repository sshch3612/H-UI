import React from "react";
import Badge from "./Badge";
import {Whitespace, Wingblank,List,ListItem} from '../../Layout';

export default class extends React.Component {
  render() {
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>一般用法</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Badge number={4} dot />
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Badge number={7} />
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Badge number={234} />
          </Wingblank>
        </Whitespace>
        <Whitespace>
        <List>
          <ListItem extra={<div style={{display:'flex',alignItems:'center'}}><span>新消息</span> <Badge number={3} dot></Badge></div>} arrow><span>红点</span></ListItem>
          <ListItem extra={<div style={{display:'flex',alignItems:'center'}}><span>新消息</span> <Badge number={8} ></Badge></div>} arrow><span>个位数</span></ListItem>
          <ListItem extra={<div style={{display:'flex',alignItems:'center'}}><span>新消息</span> <Badge number={55} ></Badge></div>} arrow><span>多位数</span></ListItem>
        </List>
        </Whitespace>
      </div>
    );
  }
}
