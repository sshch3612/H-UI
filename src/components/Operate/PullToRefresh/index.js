import React from "react";
import PullToRefresh from "./PullToRefresh";
import { Whitespace, Wingblank,List, ListItem } from "../../Layout";

export default class extends React.Component {
  items = ["1", "2", "4", "5", "6", "7", "8", "9", "10"];
  state = {
    data1: this.items.sort(() => 0.5 - Math.random())
  };
  render() {
    const { data1 } = this.state;
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>
            下拉刷新
          </Wingblank>
        </Whitespace>
        <List>
          <PullToRefresh
            onRefresh={self => {
              setTimeout(() => {
                this.setState(
                  {
                    data1: this.items.sort(() => 0.5 - Math.random())
                  },
                  () => {
                    self.resetData();
                  }
                );
              },1000);
            }}
            onLoadMore={
              (self)=>{
                console.log(data1,444);
                setTimeout(()=>{
                this.setState({
                    data1: [...this.state.data1,4,5,6,7,2,8]
                },()=>{
                  self.resetLoadData();
                })
              },1000)
              }
            }
          >
            {data1.map((item, index) => {
              return <ListItem key={index}>{item}</ListItem>;
            })}
          </PullToRefresh>
        </List>
      </div>
    );
  }
}
