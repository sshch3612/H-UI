import React from "react";
import classnames from "classnames";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    values: ["segment1", "segment2", "segment3"],
    selectedIndex: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex
    };
  }
  _handleOnclick = (index, e) => {
    e.preventDefault();
    const { onValueChange, values } = this.props;
    this.setState({
      selectedIndex: index
    });
    onValueChange && onValueChange(index, values[index]);
  };
  _renderItem = () => {
    const { values, tintColor } = this.props;
    const { selectedIndex } = this.state;

    return values.map((item, index) => {
      return (
        <div
          className={classnames("segment-item", {
            "segment-item-active": selectedIndex === index
          })}
          onClick={this._handleOnclick.bind(this, index)}
          style={{
            color: selectedIndex === index ? null : tintColor,
            borderColor: tintColor,
            backgroundColor: selectedIndex === index ? tintColor : null
          }}
        >
          {item}
        </div>
      );
    });
  };
  render() {
    const { className, style } = this.props;

    return (
      <div className={classnames("segment", className)} style={style}>
        {this._renderItem()}
      </div>
    );
  }
}
