import React from 'react';
import './Iconfonts/iconfont.less'

/**
 *
 *http://www.fontawesome.com.cn/examples/
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component{
  static defaultProps = {
    type: null,
    size: '32',
    color: '#339933'
  }
  
  render(){
    const {type, size, color} = this.props;
    const iconStyle = {
      fontSize: `${size}px`,
      color: color,
    }
    return(<i className={`iconfont  icon-${type}`} style={iconStyle} aria-hidden="true"></i>)
  }
}
