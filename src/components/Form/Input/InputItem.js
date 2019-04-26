import React from "react";
import {ListItem } from '../../Layout'
import Input from './Input';


export default (props)=>{
  const {className,...restProps} = props;
  return(
    <ListItem className={className}>
      <Input {...restProps}/>
    </ListItem>
  )
} 
