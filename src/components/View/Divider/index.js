import React from "react";
import {Whitespace, Wingblank} from '../../Layout';
import {Iconfont } from '../../Base';
import Divider from "./Divider";
import { Icon } from "antd";

export default class extends React.PureComponent {
  render() {
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>一般用法</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Divider>分割线</Divider>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>自定义颜色</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Divider color={'red'}>没有更多了</Divider>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Divider color={'#FFCC00'}>没有更多了</Divider>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Divider color={'#336699'}>没有更多了</Divider>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>自定义内容</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Divider><Iconfont type={'camera'}/></Divider>
          </Wingblank>
        </Whitespace>
      </div>
    );
  }
}
