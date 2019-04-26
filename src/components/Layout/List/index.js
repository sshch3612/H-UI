import React from 'react';
import {Wingblank, List ,ListItem}   from '../../Layout';
import  {Button}  from '../../Base';
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
            <InputItem  addBefore={'标准五个字'} placeholder={'标准🈚️个字'}/>
            <InputItem  addBefore={'标题是在特别长就换行'} placeholder={'其他路保持正常间距'}/>
            <InputItem  placeholder={'无标题'}/>
          <ListItem>
          <Button inline={true} type='submit' value='提交' onClick={()=>{
            const data = this.Form.getFieldsValue();
            this.Form.globalVerify();
            console.log(data,555);
          }}>提交</Button>
          </ListItem>
        </List>
        <Wingblank>
          输入框类型
        </Wingblank>
        <List>
            <InputItem addBefore={'文本'} placeholder={'单行文本'}/>
            <InputItem inputType={'number'} addBefore={'数字'} placeholder={'请输入数字'}/>
        </List>
        <Wingblank>
          状态
        </Wingblank>
        <List>
            <InputItem addBefore={'禁用'} disabled placeholder={'禁止输入'}/>
            <InputItem error={'fef史可法'} addBefore={'错误提示'} placeholder={'标准🈚️个字'}/>
            <InputItem  addBefore={'清除按钮'} placeholder={'标准🈚️个字'} remove/>
          <ListItem>
            <TextArea />
          </ListItem>
        </List>
        <ListItem>
        <ImagePicker></ImagePicker>
        </ListItem>
      </div>
    )
  }
}