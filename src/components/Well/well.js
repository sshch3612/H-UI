import React from 'react';
import styles from './index.less';

export default class extends React.Component{
  
  render(){
    return(
      <div  className={styles.well}>
        {this.props.children}
      </div>
    )
  }
}
