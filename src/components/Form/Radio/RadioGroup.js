import React from "react";
import Radio from "./Radio";
import {Table} from '../../View';

export default class extends React.Component {
  static defaultProps = {
    name:'test',
    defaultValue: 0,
    // datasource: [
    //    "苹果",
    //    "李子",
    //    "香蕉",
    // ]
  };
  constructor(props) {
    super(props);
    this.state = {
      datasource: props.datasource,
      checkedvalue:props.defaultValue,
    };
  }

  render() {
    const {name ,defaultValue,onChange,children, ...restProps } = this.props;
    const { checkedvalue } = this.state;
    return (
      <div className="">
        {/* {datasource.map((item, index) => {
          return (
            <Radio
              key={item}
              value={index}
              checked={checkedvalue === index ?true: false}
              name={name}
              onChange={e => {
                this.setState((prestate, props) => ({
                  checkedvalue:index
                }),()=>{
                  console.log(this.state.checkedvalue);
                  onChange && onChange(this.state.checkedvalue)
                });
              }}
              {...restProps}
            >
              {item}
            </Radio>
          );
        })} */}
        {
          React.Children.map(children, (child, index) => {
              return React.cloneElement(child,{
                name:name,
                onChange:()=>{
                this.setState((prestate, props) => ({
                  checkedvalue:index
                  }),()=>{
                  onChange && onChange(this.state.checkedvalue)});
                },
                checked:checkedvalue === child.props.value?true:false,
                ...restProps
                })
          })
        }
      </div>
    );
  }
}
