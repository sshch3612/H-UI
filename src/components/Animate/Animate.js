import React from "react";
import classnams from 'classnames';
import './less/animate.less';
/**
 *name  获取animate实例
 *animation链式调用  启动动画、监听动画
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  state = {
    animationName:'',
    duration: null,
    delay: null,
    loop: null,//infinite
  }

  animated = (animation)=>{
    this.setState({
      animationName: animation
    })
    return this;
  }

  duration = (duration)=>{
    this.setState({
      duration: duration
    })
    return this;
  }
  
  delay = (delay)=>{
    this.setState({
      delay: delay
    })
    return this;
  }
  loop = (loop)=>{
    this.setState({
      loop: loop
    })
    return this;
  }

  prefixedEventListener = (element, type, callback) => {
    const  animations = {
        "animation"      : type.toLowerCase(),
        "OAnimation"     : `o${type}`,
        "MozAnimation"   : type.toLowerCase(),
        "WebkitAnimation": `webkit${type}`
      }
      for(let item in animations){
        if(element.style[item] !== undefined){
            element.addEventListener(animations[item], function fn(e){
              element.removeEventListener(e.type, fn, false);
              callback && callback();
            },false)
            return;
        }
      }
  }

  AnimationStart = (callback) =>{
    this.prefixedEventListener(this.ele, 'AnimationStart', callback)
    return this;
  }

  AnimationIteration = (callback) =>{
    this.prefixedEventListener(this.ele, 'AnimationIteration', callback)
    return this;
  }

  AnimationEnd = (callback) =>{
    const _this = this;
    this.prefixedEventListener(this.ele, 'AnimationEnd', callback)
    return this;
  }

  componentDidMount(){
    const {name } = this.props;
    if(name){
      Animation[name] = this;
    }
  }
  render() {
    const { animationName,duration, delay, loop } = this.state;
    const {className, style } = this.props;
    const animateCls = classnams('animated',className,{
      [`${animationName}`] : true
    })
    const animationStyle = {
      WebkitAnimationDuration: duration,
      animationDuration: duration,
      WebkitAnimationDelay: delay,
      animationDelay: delay,
      WebkitAnimationIterationCount: loop,
      animationIterationCount: loop,
      ...style
    }
    return (
      <div ref={(self)=>{
        this.ele = self
      }} className={animateCls}
      style={animationStyle}
      >
        {this.props.children}
      </div>
    );
  }
}
export const Animation = {};//维护所有的动画实例
