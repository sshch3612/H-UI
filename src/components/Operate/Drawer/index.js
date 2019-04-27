import React from "react";
import { Button } from "../../Base";
import { Whitespace, Wingblank, ListItem ,List} from "../../Layout";
import Drawer from './Drawer';

export default class extends React.Component {
  state = {
    left1:false,
    left2:false,
    left3:false,
  }
  render() {
    const { left1,left2,left3 } = this.state;
    return (
      <div className="page-content" style={{position:'absolute',height:'100%'}}>
      <Whitespace>
          <Wingblank>
            左边划出
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button inline={true} fillColor="#fff" borderColor="#8f90f9" onClick={()=>{
              this.setState({
                left1:!this.state.left1,
              })
            }}>
              <span style={{ color: "#8f90f9" }}>打开抽屉，相对位置 absolute</span>
            </Button>
            <Drawer open={left1}  onClose={()=>{
              this.setState({
                left1:false
              })
            }}
            >
              <List >
                <ListItem arrow>菜单一</ListItem>
                <ListItem arrow>菜单二</ListItem>
              </List>
            </Drawer>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button inline={true} fillColor="#fff" borderColor="#8f90f9" onClick={()=>{
              this.setState({
                left2:!this.state.left2,
              })
            }}>
              <span style={{ color: "#8f90f9" }}>打开抽屉，绝对位置 fixed</span>
            </Button>
            <Drawer open={left2}  onClose={()=>{
              this.setState({
                left2:false
              })
            }}
            style={{position:'fixed'}}
            >
              <List >
                <ListItem arrow>菜单一</ListItem>
                <ListItem arrow>菜单二</ListItem>
              </List>
            </Drawer>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            右边划出
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Button inline={true} fillColor="#fff" borderColor="#8f90f9" onClick={()=>{
              this.setState({
                left3:!this.state.left3,
              })
            }}>
              <span style={{ color: "#8f90f9" }}>打开抽屉 </span>
            </Button>
            <Drawer open={left3}  onClose={()=>{
              this.setState({
                left3:false
              })
            }}
            place={'right'}
            style={{position:'fixed'}}
            >
              <List >
                <ListItem arrow>菜单一</ListItem>
                <ListItem arrow>菜单二</ListItem>
              </List>
            </Drawer>
            </Wingblank>
          </Whitespace>
      </div>
    );
  }
}
