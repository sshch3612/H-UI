import React from 'react';
import classnames from 'classnames';
import './whitespace.less'


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
        padding = 9;
        break

      default:
        padding = 15;
        break;
    }
    const whiteStyle = {
      marginBottom: `${padding}px`,
      ...style
    }
    return(
      <div className={classnames('whitespace',className)} style={whiteStyle} {...restProps}>
        {children}
      </div>
    )
  }
}