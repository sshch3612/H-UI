import React from 'react';
import {Wingblank, List ,ListItem}   from '../../Layout';
import  {Button,Iconfont}  from '../../Base';
import { Textarea as TextArea , ImagePicker,createForm, InputItem} from '../../Form';

export default  class  extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'fefe'
    }
    this.Form = createForm.call(this,[{
      name:'Bob',
      // value:'',
      rules:{message:'请输入内容'}
      onChange: (value)=>{
        this.setState({
          ['Bob']: {...this.state['Bob'],value:value}
        })}
        },
        {
          name:'Age',
          value:12,
          onChange: (value)=>{
            this.setState({
              ['Age']: {...this.state['Age'],value:value}
            })}
        }
      ],{isGlobalverify:false,})
  }

//addBefore={'标准五个字'} placeholder={'标准🈚️个字'}
  render(){
    console.log(this.Form.getFieldDecorator('Bob'),this.Form.getFieldDecorator('Age'),this.state,444);
    return(
      <div className="page-content">
        <Wingblank>
          基础用法
        </Wingblank>
        <List>
          <ListItem ><span>标题文字</span></ListItem>
          <ListItem  arrow><span>标题文字</span></ListItem>
          <ListItem  arrow={<span>详细信息</span>}><span>标题文字</span></ListItem>
          <ListItem  arrow={<span>详细信息</span>} disabled><span>标题文字</span></ListItem>
        </List>
        <Wingblank>
          包含描述信息
        </Wingblank>
        <List>
          <ListItem brief={'描述信息'}><span>标题文字</span></ListItem>
          <ListItem brief={'描述信息'} arrow><span>标题文字</span></ListItem>
          <ListItem brief={'描述信息'} arrow={<span>详细信息</span>}><span>标题文字</span></ListItem>
        </List>
        <Wingblank>
          包含图片
        </Wingblank>
        <List>
          <ListItem  thumb={<Iconfont type={'select'}/>} arrow><span>标题文字</span></ListItem>
          <ListItem thumb={'http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg'} brief={'描述信息'} arrow><span>标题文字</span></ListItem>
          <ListItem thumb={'http://pic28.nipic.com/20130417/9545357_131100209130_2.jpg'} brief={'描述信息'} arrow={<span>详细信息</span>}><span>标题文字</span></ListItem>
        </List>
      </div>
    )
  }
}