import React from 'react';
import Pagination from './Pagination';
import {Iconfont} from '../../Base'
import { Whitespace,Wingblank} from '../../Layout'


export default class extends React.Component{


  render(){
    return(
      <div className='page-content'>
        <Whitespace>
          <Wingblank>
            基础用法(button| pointer)
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Pagination mode={'button'} currentPage={1}/>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Pagination mode={'pointer'} currentPage={1}/>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            自定义形状(button)
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Pagination mode={'button'} currentPage={1} localeBtn={{preBtn:<Iconfont  type={'return'}/> ,nextBtn:<Iconfont type={'enter'}/>}}/>
          </Wingblank>
        </Whitespace>
      </div>
    )
  }
}