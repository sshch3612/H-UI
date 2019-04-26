import React from 'react';
import './less/font-awesome.less'

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
    size: '22',
    color: '#8f90f9'
  }
  
  render(){
    const {type, size, color} = this.props;
    const iconStyle = {
      fontSize: `${size}px`,
      color: color
    }
    return(<i className={`fa ${type}`} style={iconStyle} aria-hidden="true"></i>)
  }
}
