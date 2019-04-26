import React from 'react';
import classnames from 'classnames';
import './wingblank.less'


export default class extends React.Component{
  static defaultProps = {
    size:'lg'
  }

  render(){
    const {children, size ,className, style, ...restProps} = this.props;
    let padding = null;
    switch (size) {
      case 'sm':
        padding = 5;
        break;
      case 'md':
        padding = 8;
        break

      default:
        padding = 15;
        break;
    }
    const winStyle = {
      padding: `0 ${padding}px`,
      ...style
    }
    return(
      <div className={classnames('wingblank',className)} style={winStyle} {...restProps}>
        {children}
      </div>
    )
  }
}