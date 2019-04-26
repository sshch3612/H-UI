import React from "react";
import OnScroll from "./OnScroll";
import Portarl from '../../Common/Portal/Portal';

import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    currentindex:[0,1],
  };

  constructor(props){
    super(props);
    this.state = {
      itemActive:props.currentindex
    }
  }

  _selectPicker = e => {
    const {
      itemActive
    } = this.state;
    e.preventDefault();
    this.props.close();
    this.props.onChange(
      itemActive
    );
  };

  _closePicker = e => {
    console.log('关闭');
    this.props.close();
  };

  _renderActive = (index ,value )=> {
    console.log(index,value,44)
    this.setState((prestate,props)=>({
      itemActive: prestate.itemActive.map((child, mIndex)=>(mIndex===index?value:child)
      )
    }));
  };


  render() {
    const {
      currentindex,
      close,
      data,
      ...restProps,
    } = this.props;
    const {
      itemActive
    } = this.state;
    return (
      <Portarl mask={true}>
      <div className="datepicker">
        <div className="datepicker-container">
          <div className="datepicker-datecontrol">
            <div className="datepicker-control-close" onClick={this._closePicker}>
              取消
            </div>
            <div className="datepicker-control-submit" onClick={this._selectPicker}>
              确定
            </div>
          </div>
          <div className="datepicker-content">
          {data.map((child, index)=>{
            return <OnScroll key={index} data={child} {...restProps} onChange={this._renderActive.bind(this,index)} currentindex={itemActive[index]}/>
          })}
          {/* <OnScroll {...restProps} onChange={this._renderActive} currentindex={itemActive}/> */}
          </div>
        </div>
      </div>
      </Portarl>
    );
  }
}
