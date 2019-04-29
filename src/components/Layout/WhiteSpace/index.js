import React, { Children } from 'react';
import  './index.less';
import classnames from 'classnames';

export default class extends React.Component{
  static defaultProps = {
    span: 1,
    offset: 0,
    span:4,
  }

  render(){
    const { className, children, span,  style} = this.props;
    const Itemstyle = {
      flexBasis:`${(1 / span) * 100}%`,
      ...style,
    }
    return(
      <div className={classnames('grid-flex-item',className)} style={Itemstyle}>
        {children}
      </div>
    )
  }
}
