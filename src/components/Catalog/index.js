import React from 'react';
import { Link } from 'dva/router';
import Tag from '../tag/Tag'
import './index.less'


export default class  extends React.PureComponent{

  render(){
    const {history,match,} = this.props;

    return(
      <div className='catalog' >
         <Link to={`${match.url}/spin`}>
          <Tag shape={'ellipse'} border><span>Spin</span></Tag>
         </Link>
         <Link to={`${match.url}/icon`}>
         <Tag shape={'ellipse'} border><span>Icon</span></Tag>
         </Link>
         <Link to={`${match.url}/dropdown`}>
         <Tag shape={'ellipse'} border><span>DropDown</span></Tag>
         </Link>
         <Link to={`${match.url}/button`}>
         <Tag shape={'ellipse'} border><span>Button</span></Tag>
         </Link>
         <Link to={`${match.url}/input`}>
         <Tag shape={'ellipse'} border><span>Input</span></Tag>
         </Link>
         <Link to={`${match.url}/tabs`}>
         <Tag shape={'ellipse'} border><span>Tabs标签页</span></Tag>
         </Link>
         <Link to={`${match.url}/alert`}>
         <Tag shape={'ellipse'} border><span>Alert</span></Tag>
         </Link>
         <Link to={`${match.url}/animate`}>
         <Tag shape={'ellipse'} border><span>Animate Css动画</span></Tag>
         </Link>
         <Link to={`${match.url}/switch`}>
         <Tag shape={'ellipse'} border><span>Switch滑动开关</span></Tag>
         </Link>
      </div>  
    )
  }
}