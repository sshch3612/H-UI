import React from "react";
import Portal from "./Portal";
import { Button } from "../../Base";
import { Whitespace, Wingblank } from "../../Layout";

export default class extends React.Component {
  state = {
    isOpen: false,
  }
  render() {
    const { isOpen} = this.state;
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>基础用法</Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            {/* {<Portal mask/>} */}
            <Button inline={true} onClick={()=>{
              console.log(4445);
              this.setState({
                isOpen: true
              })
            }}>
              <span style={{ color: "#ffffff" }}>打开Portal
              </span>
              {isOpen && <Portal onClose={()=>{
                console.log(98774);
                this.setState({
                  isOpen:false
                })
              }} mask/>}
            </Button>
          </Wingblank>
        </Whitespace>
      </div>
    );
  }
}
