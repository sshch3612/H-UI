import React from "react";
import classnames from 'classnames';
import { Touch} from "../../Operate";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    min: 1,
    max: 100,
    step: 2,
    defaultValue:0,//默认值 
    disabled: false,//
    showvalue:false,
  };
  constructor(props){
    super(props);
    this.state = {
      currentSite:(props.defaultValue - props.min)/(props.max-props.min),
      leftWidth: (props.defaultValue - props.min)/(props.max-props.min),
      showNumber:props.defaultValue,
    };
  }
  
  componentDidMount(){
    const {left, width} = this.sliderSelf.getBoundingClientRect()
    this.lineWidth = width;
    this.lineLeft = left;
  }

  handleTap = (e) => {
    e.preventDefault();
    const move=  (e.pageX - this.lineLeft)/this.lineWidth;
    this.setState({
      leftWidth: move,
      currentSite: move,
    })
  }

  handleonMove = (x, y) => {
    //滑动的间隔数
    // const {} = this.sliderSelf
    const {onChange ,min, max , step} = this.props;
    const move = x /this.lineWidth + this.state.currentSite;
    
    if(move< 0 || move > 1) return;
    const value = Math.round(move * (max - min)/step) * step + min;
    this.setState({
      leftWidth: move,
      showNumber: value,
    },()=>{
      // const value = Math.round(this.state.leftWidth * (max - min)/step) * step + min;
      console.log(value,44);
      onChange && onChange(value);
    })
  };

  handleTouchend = (e) => {
    this.setState({
      currentSite: this.state.leftWidth
    })
  }

  render() {
    const { leftWidth, showNumber } = this.state;
    const { disabled ,showvalue} = this.props;
    const rightWidht = 1 - leftWidth
    return (
      <div className='slider'>
        <div className={classnames('slider-content',{'slider-disabled':disabled})} >
          <div
            ref={self => {
              this.sliderSelf = self
            }}
            className="slider-line"
            onClick={this.handleTap}
          />
          <div className="slider-line-left" style={{ width: `${leftWidth * 100}%` }}/>
          <div className="slider-line-right" style={{ width: `${rightWidht * 100}%` }}/>
          <Touch onMove={this.handleonMove} onTouchEnd={this.handleTouchend}>
            <div className="slider-line-control" style={{left:`${leftWidth * 100}%`}}/>
          </Touch>
        </div>
        {showvalue && <div className='slider-value'>{showNumber}</div>}
      </div>
    );
  }
}
