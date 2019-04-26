import React from "react";
import ReactDom from "react-dom";
import Icon from '../Icon/Iconfont';
import "./toast.less";

export default (function(){

let Instance = null;
class Toast1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: false
    }
    this.el = document.createElement("div");
    // this.Instance.bind(this);
    this.show.bind(this);
  }

  componentDidMount(){
    document.body.appendChild(this.el);
  }
  show(){
    console.log(33333);
    this.renderElement();
  }
  renderElement = () => {
    console.log(9999999);
    const ele = <div className="toast-mask" ></div>;
    document.body.appendChild(this.el);
    ReactDom.render(ele,this.el)
  }

}
Instance = new Toast1()
return Instance;
})()
