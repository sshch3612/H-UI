import React from 'react';
import Input from './InputItem';
import Pcinput from './pcInput';

export default  class  extends React.Component{

  render(){
    return(
    <div>
      <Input inputType='tel' addBefore='电话好呐' defaultValue='fewfe收腹裤加厚'/>
      <Pcinput addBefore='电话好呐' defaultValue='33'/>
    </div>
    )
  }
}