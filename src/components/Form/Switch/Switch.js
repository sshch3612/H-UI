import React from "react";
import classnames from "classnames";
import "./switch.less";

export default class extends React.Component {
  static defaultProps = {
    checked: false,
    disabled: false,
  };

  constructor(props){
    super(props);
    this.state = {
      checked: props.checked,
    }  
  }
  state = {
    value: "off",
  };

  handleOnchange = e => {
    console.log(e,e.currentTarget.value);
    const {onChange} = this.props;
    onChange && onChange(e.currentTarget.value)
  };  

  handleClick = e => {
    const {disabled } = this.props;
    if(disabled) return;
    e.preventDefault();
    this.setState((prestate,props)=>({
      checked: !prestate.checked
    }))

  };
  render() {
    const { name  ,color, disabled} = this.props;
    const { checked } = this.state;
    const checkboxColor = {
      backgroundColor:color,
      borderColor:color,
    }
    return (
      <label className="switch">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          value={checked?'On':'Off'}
          onChange={this.handleOnchange}
        />
        <a
          className={classnames("checkbox", { "checkbox-active": checked,'checkbox-disabled': disabled })}
          style={checked?checkboxColor:null}
          onClick={this.handleClick}
        >
          <span />
        </a>
      </label>
    );
  }
}
