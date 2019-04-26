import React from 'react';
import Tabs from './Tabs';
import Touch from '../Touch/Touch'
import Pull from '../PullToRefresh/PullToRefresh'

export default class extends React.Component{


  onTabClick = (item, index) => {
    console.log(item, index, 44555)
  }
  render(){
    return(<div><Tabs  onTabClick={this.onTabClick} position='top'>
      
      <Pull onRefresh={(self)=>{
          console.log(self,4444);
          setTimeout(()=>{
            console.log(11111);
            self.resetData();
          },1000)
      }}><div>page1</div></Pull>
      <div>page2</div>
      <div>page3</div>
      <div>page4</div>
    </Tabs>
    <Pull onRefresh={(self)=>{
      console.log(self,4444);
      setTimeout(()=>{
        console.log(11111);
        self.resetData();
      },1000)
  }}><div>page1</div></Pull>
  </div>
    )
  }
}