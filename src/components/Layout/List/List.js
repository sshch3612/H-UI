import React from 'react';
import classnames from 'classnames';


export default  class  extends React.Component{


  render(){
    const {className, renderHeader, renderFooter } = this.props;
    return(<div className={classnames('list',className)}>
      {renderHeader && <div className='list-header'>{renderHeader}</div>}
      {this.props.children}
      {renderFooter && <div className='list-footer'>{renderFooter}</div>}
    </div>)
  }
}