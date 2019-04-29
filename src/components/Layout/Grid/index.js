import React from  'react';
import Flex from './Flex';
import FlexItem from './FlexItem'


export default  (props)=>{

  const value = ['丰富','丰富fe','丰富','丰富','丰富','丰富','丰富']
  return(
    <div className='page-content'>
        <Flex span={4}>
          {value.map((item,index)=>{
            return <FlexItem className='' style={{height:'100px',backgroundColor:'red',flexBasis:'100px'}}>{item}</FlexItem>
          })}
        </Flex>
    </div>
  )
}