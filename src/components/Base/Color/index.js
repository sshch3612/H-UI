import React from 'react';
import {List, ListItem} from '../../Layout'

/**
 *
 *http://www.fontawesome.com.cn/examples/
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component{
  
  render(){
    return(
      <List>
        <ListItem style={{backgroundColor:'#339933',color:'#fff'}}>
          <div style={{textAlign:'center'}}>
            #339933
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'#CC9900',color:'#fff'}}>
          <div style={{textAlign:'center'}}>
            #CC9900
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'#666666',color:'#fff'}}>
          <div style={{textAlign:'center'}}>
            #666666
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'#FF0033',color:'#fff'}}>
          <div style={{textAlign:'center'}}>
            #FF0033
          </div>
        </ListItem>
        <ListItem style={{backgroundColor:'#999999',color:'#fff'}}>
          <div style={{textAlign:'center'}}>
            #999999
          </div>
        </ListItem>
        <div>
          备注：可参考<a href='http://tool.c7sky.com/webcolor/#character_16'>http://tool.c7sky.com/webcolor/#character_16</a>
        </div>
      </List>
    )
  }
}
