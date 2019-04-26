// import React from 'react';


// // import { Menu, Dropdown } from 'antd';

// // const menu = (
  
// // );
// export default class  ItemAdd extends React.PureComponent{
//   _renderMenu = () => {
//     const {currentLine } = this.props;
//     return(
//       <Menu>
//         <Menu.Item 
//           onClick={()=>{
//             this._handleSubmit(currentLine, 1 , 1)
//           }} 
//           key="1">在下方插入一行</Menu.Item>
//         <Menu.Item 
//           onClick={()=>{
//           this._handleSubmit(currentLine, 1 , -1)
//           }}
//           key="2">在上方插入一行</Menu.Item>
//         <Menu.Item 
//           onClick={()=>{
//             this._handleSubmit(currentLine, 3 , 1)
//           }}
//           key="3">在下方插入多行</Menu.Item>
//       </Menu>
//     )
//   }
 
//   _handleSubmit = (currentLine, linesNumber, direction ) => { //
//      this.props.linesInsert(currentLine, linesNumber, direction);
//   }
//   render(){
//     return(
//       <Dropdown overlay={this._renderMenu()} trigger={['contextMenu']}>
//         {React.Children.only(this.props.children)}
//       </Dropdown>
//     )
//   }
// }