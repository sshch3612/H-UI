import React from 'react';
import Input from './InputItem';

export default  class  extends React.Component{

  getFieldsValue = () => {
    
  }
  render(){
    return(<form onSubmit={}>
      {this.props.children}
    </form>)
  }
}