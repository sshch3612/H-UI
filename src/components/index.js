// import React, { Children } from 'react';
// import Catalog from  './Catalog/index';
// import { Router , Switch, Route, Redirect} from 'dva/router'
// import Spin from './Spin'
// import Icon from './Icon'
// import Dropdown  from './DropDown'
// import Button from './Button'
// import Input from './Input'
// import Tabs from './Tabs'
// import './index.less'
// import Alert from './Alert';
// import Animate from './Animate'
// import NavBar from './NavBar'
// import Popover from './Popover/Popover';
// import Pagination from './Pagination/Pagination';
// import Segment from './SegmentedControl/SegmentedControl';
// import ListItem from './List/ListItem';
// import List from './List/List'
// import Radio from './Radio/Radio'
// import Checkbox from './Checkbox/Checkbox';
// import SwitchControl from './Switch/Switch'
// import Slider from './Slider/Slider'
// import Tag from './tag/Tag';
// import Datepicker from './DatePickerView';

// export default class extends React.Component{
  
//   render(){
//     const {location ,match} = this.props;
//     return(
//       <div className='ceshi'>
//         <Catalog {...this.props}/>
//         <div style={{flex:1,marginLeft:'15px'}}>
//             <Switch>
//               <Route path={`${match.url}/spin`}  component={Spin} />
//               <Route path={`${match.url}/icon`}  component={Icon}/>
//               <Route path={`${match.url}/dropdown`}  component={Dropdown}/>
//               <Route path={`${match.url}/button`}  component={Button}/>
//               <Route path={`${match.url}/input`}  component={Input}/>
//               <Route path={`${match.url}/tabs`}  component={Tabs}/>
//               <Route path={`${match.url}/alert`}  component={Alert}/>
//               <Route path={`${match.url}/animate`}  component={Animate}/>
//             </Switch>
//         </div>
//         <NavBar />
//         <Popover place={'top'} content={'粉丝看风景呃几个苦瓜'}><div style={{height:'100px'}}>点位丰富的</div></Popover>
//         <Popover place={'right'} content={'粉丝看风景呃几个苦瓜'}><span >点位fef富的</span></Popover>
//         <Pagination currentPage={1}></Pagination>
//         <Pagination currentPage={2} mode='pointer'></Pagination>
//         <Segment selectedIndex={1} tintColor={'red'} style={{height:'44px'}}/>
        
//         <List>
//         <ListItem thumb='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2741955546,197394094&fm=58' arrow={'right'}>十分丰富</ListItem>
//         <ListItem thumb='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2741955546,197394094&fm=58' arrow={'right'}>是风口浪尖</ListItem>
       
//         <Radio name='name' defaultChecked={true} >测试仪</Radio>
//         <Radio name='name'>测试二</Radio>
//         <Radio name='name'>测试三</Radio>
//         <Checkbox name='test'>苹果</Checkbox>
//         <SwitchControl color={'blue'} disabled checked/>
//         <SwitchControl color={'orange'} />
//         <ListItem><Slider /></ListItem>
//         <ListItem><Tag shape={'ellipse'} size={'small'} fill>标签</Tag>
//         <Tag shape={'ellipse'}>标签</Tag>
//         <Tag  >标签</Tag>
//         <Tag border >标签</Tag>
//         </ListItem>
//         <ListItem>
//           <Datepicker />
//         </ListItem>
//         </List>
//       </div>
//     )
//   }
// }
