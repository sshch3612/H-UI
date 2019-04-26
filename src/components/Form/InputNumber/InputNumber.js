import React from "react";
import classnames from "classnames";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    defaultValue: 1,
    min: 1,
    max: 10,
    step: 0.1,
    disabled: false
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue
    };
  }

  _handleCount = (v, e) => {
    e.preventDefault();
    const { min, max, step ,onChange} = this.props;
    const { value } = this.state;
    const currentValue = Math.round((value + step * v) * 100) / 100
    console.log(33);
    if (
      ((value <= min || currentValue < min) && v < 0) ||
      ((value >= max || currentValue > max) && v > 0)
    ) {
      return;
    }
    this.setState({
      value: currentValue
    },()=>{
      onChange && onChange(this.state.value);
    };
  };
  render() {
    const { disabled, className, style } = this.props;
    const { value } = this.state;
    return (
      <div
        className={classnames("inputnumber", className, {
          "inputnumber-disabled": disabled
        })}
        style={style}
      >
        <div
          className="inputnumber-left"
          onClick={this._handleCount.bind(this, -1)}
        />
        <div className="inputnumber-content">{value}</div>
        <div
          className="inputnumber-right"
          onClick={this._handleCount.bind(this, 1)}
        />
        {disabled && <div className="inputnumber-mask" />}
      </div>
    );
  }
}
