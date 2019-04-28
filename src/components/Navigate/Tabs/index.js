import React from "react";
import Tabs from "./Tabs";
import {Whitespace,Wingblank} from '../../Layout'

export default class extends React.Component {
  onTabClick = (item, index) => {
    console.log(item, index, 44555);
  };
  render() {
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>等宽标签栏</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Tabs onTabClick={this.onTabClick} position="top">
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
              <div>page4</div>
            </Tabs>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>滚动标签栏</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Tabs onTabClick={this.onTabClick} position="top" titleStyle={{flexBasis:'100px'}} tabs={[
      { title: "Tab1" },
      { title: "Tab2" },
      { title: "Tab3" },
      { title: "Tab4" },
      { title: "Tab5" },
      { title: "Tab6" },
      { title: "Tab7" }
    ]}>
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
              <div>page4</div>
              <div>page5</div>
              <div>page6</div>
              <div>page7</div>
            </Tabs>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Tabs onTabClick={this.onTabClick} position="left">
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
              <div>page4</div>
            </Tabs>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Tabs onTabClick={this.onTabClick} position="right">
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
              <div>page4</div>
            </Tabs>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Tabs onTabClick={this.onTabClick} position="bottom">
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
              <div>page4</div>
            </Tabs>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>自定义形状(button)</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          </Wingblank>
        </Whitespace>
      </div>
    );
  }
}
