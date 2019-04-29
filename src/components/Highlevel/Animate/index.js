import React from "react";

import Animate ,{Animation}from './Animate';

export default class extends React.Component {

  render() {
    return (
      <div>
        <div onClick={()=>{
          console.log(Animation.bounce ,444)
          Animation.bounce.animated('fadeIn')
          .AnimationEnd(function(){
            console.log('动画结束');
          })
          ;
        }}>惦记我</div>
        <Animate name='bounce'>
          <div style={{height:'20px',width:'120px',backgroundColor:'red'}}></div>
        </Animate>
      </div>
    );
  }
}
