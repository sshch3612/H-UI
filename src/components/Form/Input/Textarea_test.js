import React from 'react';
import Textarea from './Textarea';
import { Whitespace, Wingblank ,ListItem} from '../../Layout';




export default class extends React.Component{


  render(){

    return(
      <div>
        <Whitespace>
          <Wingblank>
            基础
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <div style={{border:'1px solid #c0c0c0',padding:'5px'}} >
            <Textarea  showtotal placeholder={'你的问题是'}/>
            </div>
            
          </Wingblank>
        </Whitespace>
        <Wingblank>
            不现实字数
        </Wingblank>
        <Whitespace>
          <Wingblank>
            <div style={{border:'1px solid #c0c0c0',padding:'5px'}} >
            <Textarea placeholder={'你的问题是'}/>
            </div>
            
          </Wingblank>
        </Whitespace>
        <Wingblank>
            自定义高度
        </Wingblank>
        <Whitespace>
          <Wingblank>
            <div style={{border:'1px solid #c0c0c0',padding:'5px'}} >
            <Textarea placeholder={'你的问题是'} height={90}/>
            </div>
            
          </Wingblank>
        </Whitespace>
        <Wingblank>
            自适应高度
        </Wingblank>
        <Whitespace>
          <Wingblank>
            <div style={{border:'1px solid #c0c0c0',padding:'5px'}} >
            <Textarea placeholder={'你的问题是'} height={22} autoheight/>
            </div>
            
          </Wingblank>
        </Whitespace>
      </div>
    )
  }
}