import React from "react";
import Slider from "./Slider";
import {Whitespace ,Wingblank, ListItem} from "../../Layout";

export default class extends React.PureComponent {
  render() {
    return (
      <div className="page-content">
        <Whitespace>基础用法</Whitespace>
        <Whitespace>
          <Wingblank>
            <div style={{ marginBottom: "25px" }}>step=1</div>
            <ListItem>
              <Slider step={1} />
            </ListItem>
          </Wingblank>
        </Whitespace>
        <Whitespace>显示当前value</Whitespace>
        <Wingblank>
          <div style={{ marginBottom: "25px" }}>step=1</div>
          <ListItem>
            <Slider step={1} showvalue/>
          </ListItem>
        </Wingblank>
        <Whitespace>设置最大值/最小值</Whitespace>
        <Wingblank>
          <div style={{ marginBottom: "25px" }}>step=1</div>
          <ListItem>
            <Slider step={1} min={3} max={300} showvalue defaultValue={100}/>
          </ListItem>
        </Wingblank>
        <Whitespace>禁用状态</Whitespace>
        <Wingblank>
          <div style={{ marginBottom: "25px" }}>step=1</div>
          <ListItem>
            <Slider step={1} min={3} max={300} showvalue defaultValue={100} disabled/>
          </ListItem>
        </Wingblank>
      </div>
    );
  }
}
