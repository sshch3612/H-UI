import React, { PureComponent } from "react";
import classnames from "classnames";
import "./index.less";

export default class OnScrol extends PureComponent {
  static defaultProps = {
    mode: "number",//[array,number
    min: 0,
    max: 50,
    data: null,
    step: 1,
    isloop:false,
    itemheight:34,
    currentindex:0,
    unitsnumber:7,
    onChange:()=>{},
  };

  constructor(props) {
    super(props);
    this.isScroll = true;
    this.isActive  = true;
    this.state = {
      translateY: -(props.currentindex - props.min) * props.itemheight,
      initPosition: -(props.currentindex - props.min) * props.itemheight,
      csstime: .3,
    };
  }
  componentDidMount() {
    this.ref.addEventListener("touchmove", (e) => {
      // 执行滚动回调
      e.preventDefault();
      if(this.isActive){
        this._touchMove(e);
        this.isActive = false;
        setTimeout(()=>{
          this.isActive = true;
        },0)
      }
      
    }, {
      passive: false //  禁止 passive 效果http://w3cay.com/post/dc49b55.html
    })
  }

  /**
   *
   * @memberof OnScrol
   */
  _renderItem = () => {
    const { mode, min, max, step, unit,isloop ,unitsnumber} = this.props;
    const result = [];
    if (mode === "number") {
      for (let i = min; i <= max; i += step) {
        result.push(
          <li
            key={`item${i}`}
            role="button"
            className="scroll-item"
          >
            {i < 10 ? `0${i}` : i}
            {unit}
          </li>
        );
      }
    }
    if (mode === "array") {
      const { data } = this.props;
      if (!data) {
        throw "data必填";
      }
      if (!Array.isArray(data)) {
        throw "data必须为数组结构";
      }
      data.map((item, index) => {
        result.push((
          <li
            key={`${item}${index}`}
            role="button"
            className="scroll-item"
          >
            {item}
          </li>
        ));
      });
    }
    for(let i =0; i< Math.floor(unitsnumber/2); i +=1){
      result.unshift(
        <li
        key={`topitem${i}`}
        role="button"
        className="scroll-item"
      >
        {isloop?`${max-i}${unit}`:null}
      </li>
      )
    } 
    for(let i =0; i< Math.ceil(unitsnumber/2); i +=1){
      result.push(
        <li
        key={`bottomitem${i}`}
        role="button"
        className="scroll-item"
      >
         {isloop && (i < 10 ? `0${i}` : i)}{isloop && unit}
      </li>
      )
    }
    return result;
  };



  _touchStart = e => {
    clearTimeout(this.Touchend);
    this.state.startPageX = e.touches[0].pageX;
    this.state.startPageY = e.touches[0].pageY;
    this.state.startTime = Date.now();
  };


  _touchMove = e => {
    const {initPosition, startPageY } = this.state;
    const {itemheight, isloop, min, max ,isbound} = this.props;
    const length = max - min + 1;
    const { pageX, pageY } = e.touches[0];

    const moveY = initPosition + pageY - startPageY;
    this.state.moveTime = Date.now();
    if(isloop){
      if(moveY <=-34*length){
        this.setState({
          translateY: moveY + 34* length,
          csstime:0,
        });
      }else if(moveY >=0){
        this.setState({
          translateY: -34*length + moveY,
          csstime:0,
        });
      }else{
        this.setState({
          translateY: moveY,
          csstime:0,
        });
      }
    }else{
      this.setState({
        translateY: moveY,
        csstime:0,
      });
    }
  };

  _touchend = e => {
    const {translateY} = this.state;
    const { isloop ,itemheight, min, max, mode, data} = this.props;
    const length = mode==='number' ?max - min + 1 : data.length;
    const { pageY } = e.changedTouches[0];
    //根据平均滑动速度计算惯性
    const  average = (pageY - this.state.startPageY)/(Date.now()-this.state.startTime);
    let moveY = null;
    if(Math.abs(average) > .5){
      moveY = translateY + (average*5) ** 3;
    }else{
      moveY = translateY;
    }
    moveY = Math.round(moveY / 34) * 34;
    if(isloop){
      this.setState({
        initPosition: moveY,
        translateY: moveY,
        csstime:.3,
      },,()=>{
        this.getValue();
      });
    }else{
      this.setState({
        initPosition: moveY,
        translateY: moveY,
        csstime:.3,
      },()=>{
        if(moveY >-itemheight * (length -1) && moveY < 0){
          this.getValue();
        }
      });
      if(moveY <=-itemheight * (length -1)){
        this.Touchend = setTimeout(()=>{
          this.setState({
            initPosition: -itemheight * (length -1),
            translateY: -itemheight * (length -1),
            csstime:.5,
          },()=>{
            this.getValue();
          });
        },200)
      }else if( moveY >= 0){
        this.Touchend =  setTimeout(()=>{
          this.setState({
            initPosition: 0,
            translateY: 0,
            csstime:.5,
          },()=>{
            this.getValue();
          });
        },200)
        
      }
    }
    
  };

  getValue = () =>{
    const { translateY } = this.state;
    const {itemheight ,onChange ,min} = this.props;
    const currentIndex = Math.abs( translateY / itemheight );
    console.log(currentIndex);
    onChange &&  onChange(currentIndex + min);
  }
  render() {
    const {itemheight } = this.props;
    const { translateY ,csstime} = this.state;
    const scrollStyle = {
      transform: `translate3d(0,${translateY}px,0)`,
      transition: `all ${csstime}s ease`
    };

    return (
      <div className="scroll" style={{height:`${itemheight*7}px`}}>
          <div
            ref={(self)=>{this.ref=self}}
            onTouchStart={this._touchStart}
            onTouchEnd={this._touchend}
          >
            <div className="scroll-mask"
            >
            </div>
            <div className="scroll-indicator"
            >
            </div>
            <ul
              className="scroll-container"
              ref={el => {
                this.ele = el;
              }}
              style={scrollStyle}
              // onScrollCapture={this._onScroll}
            >
              {this._renderItem()}
            </ul>
          </div>
      </div>
    );
  }
}
