import React from 'react';
import classnames from 'classnames';
import './tag.less';

export default class extends React.PureComponent{



  static defaultProps = {
    shape:false,//ellipse
    size:'normal',
    value: false,  
  }
  state = {
    value: this.props.value
  }
  handleClick = (e) => {
    const {onClick } = this.props;
    if(onClick){
      e.preventDefault();
      this.setState((prestate,props)=>({
        value: !prestate.value
      }))
    onClick()
    }
  }
  render(){
    const {children, shape, size, className,border, fill,onClick ...restProps} = this.props;
    const Tagcls = classnames('tag',className,{
      [`tag-${shape}`]:shape,
      [`tag-${size}`]:true,
      ['tag-border']:border,
      ['tag-fill']: fill,
    })
    return(
      <div className={Tagcls} role='tag' {...restProps} onClick={this.handleClick}>{children}</div>
    )
  }
}