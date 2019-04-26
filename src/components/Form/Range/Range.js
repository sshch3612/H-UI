import React from "react";
import classnames from 'classnames';
import { Touch} from "../../Operate";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    min: 1,
    max: 100,
    step: 2,
    defaultValue:[10,50],//默认值 
    disabled: false,//
    showvalue:false,
    handleStyle:null,//滑块的样式
    trackStyle:null,//选中部分滑动条的样式
    railStyle:null,//未选中部分
  };
  constructor(props){
    super(props);
    this.initvalue = props.defaultValue.map((item)=>(item - props.min)/(props.max-props.min));
    this.state = {
      currentSite: this.initvalue
      leftWidth: this.initvalue,
      showNumber:props.defaultValue,
    };
  }
  
  componentDidMount(){
    const {left, width} = this.rangeSelf.getBoundingClientRect()
    this.lineWidth = width;
    this.lineLeft = left;
  }

  handleTap = (e) => {
    e.preventDefault();
    const { min, max, step,onChange} = this.props;
    const move=  (e.pageX - this.lineLeft)/this.lineWidth;
    const value = Math.round(move * (max - min)/step) * step + min;
    const random  =  Math.round(Math.random());
    this.setState((prestate,props)=>({
      leftWidth: prestate.leftWidth.map((item,index)=>{
        return random === index? move: item;
      }),
      currentSite:  prestate.leftWidth.map((item,index)=>{
        return random === index? move: item;
      }),
      showNumber: prestate.showNumber.map((item,index)=>{
        return random===index? value:item
      }),
    }),()=>{
      onChange && onChange(this.state.showNumber);
    })
  }

  handleonMove = (index,x, y) => {
    //滑动的间隔数
    // const {} = this.rangeSelf
    const {onChange ,min, max , step} = this.props;
    const move = x /this.lineWidth + this.state.currentSite[index];
    let value = Math.round(move * (max - min)/step) * step + min;
    if( move < 0 ){
      move = 0;
      value = min;
    }
    if( move > 1 ){
      move = 1;
      value = max;
    }
    this.setState((prestate,props)=>({
      leftWidth: prestate.leftWidth.map((item,j)=>{
        return index===j? move:item
      }) ,
      showNumber: prestate.showNumber.map((item,j)=>{
        return index===j? value:item
      }),
    }),()=>{
      // const value = Math.round(this.state.leftWidth * (max - min)/step) * step + min;
      onChange && onChange(this.state.showNumber);
    })
  };

  handleTouchend = (e) => {
    this.setState({
      currentSite: this.state.leftWidth
    })
  }

  render() {
    const { leftWidth, showNumber } = this.state;
    const { disabled ,showvalue,handleStyle ,trackStyle, railStyle} = this.props;
    // const rightWidht = 1 - leftWidth
    return (
      <div className='range'>
        <div className={classnames('range-content',{'range-disabled':disabled})} >
          <div
            ref={self => {
              this.rangeSelf = self
            }}
            className="range-line"
            onClick={this.handleTap}
          />
          <div className="range-line-content" style={{backgroundColor:railStyle}}/>
          <div className="range-line-light" style={{ left: `${Math.min(...leftWidth) * 100}%`,width: `${(Math.max(...leftWidth)-Math.min(...leftWidth)) * 100}%` ,backgroundColor:trackStyle}}/>
          {leftWidth.map((item,index)=>{
            return <Touch onMove={this.handleonMove.bind(this,index)} onTouchEnd={this.handleTouchend}>
            <div className="range-line-control" style={{left:`${item * 100}%`,backgroundColor:handleStyle}}/>
          </Touch>
          })}
          
        </div>
        {showvalue && <div className='range-value'>{showNumber}</div>}
      </div>
    );
  }
}
