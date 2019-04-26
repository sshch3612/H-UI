import React from "react";
import Range from "./Range";
import { ListItem, Whitespace, Wingblank } from "../../Layout";

export default class extends React.Component {
  state = {
    minvalue1:[50,120],
    maxvalue2:[50,79],
  }
  render() {
    const { minvalue1, maxvalue1,maxvalue2} = this.state;
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>
            基础用法
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <ListItem>数值范围：{Math.min(...minvalue1)}~{Math.max(...minvalue1)} </ListItem>
          <ListItem >
            <Range min={4} max={200} defaultValue={minvalue1} onChange={(value)=>{
                this.setState({
                  minvalue1: value
                })
            }}/>
          </ListItem>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            自定义样式
          </Wingblank>
        </Whitespace>
        <Whitespace>
        <ListItem>数值范围：{Math.min(...maxvalue2)}~{Math.max(...maxvalue2)} </ListItem>
          <ListItem >
            <Range trackStyle={'red'} handleStyle={'blue'} min={4} max={200} defaultValue={maxvalue2} onChange={(value)=>{
                this.setState({
                  maxvalue2: value
                })
            }}/>
          </ListItem>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            禁用状态
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <ListItem >
            <Range disabled min={4} max={200} defaultValue={maxvalue2} onChange={(value)=>{
                this.setState({
                  maxvalue2: value
                })
            }}/>
          </ListItem>
        </Whitespace>
      </div>
    );
  }
}
