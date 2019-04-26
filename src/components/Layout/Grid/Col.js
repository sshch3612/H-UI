import React from 'react';
import styles from './index.less';

export default class extends React.Component{
  static defaultProps = {
    span: 1,
    offset: 0,
  }

  render(){
    const { span , offset} = this.props;
    return(
      <div className={styles.col} style={{flex:span,marginRihgt:`${offset}px`}}>
        {this.props.children}
      </div>
    )
  }
}
