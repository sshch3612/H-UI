import React from "react";
import classnames from "classnames";
import { Iconfont } from "../../Base";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    thumb: "",
    align: "center"
  };

  _renderThumb = () => {
    const { thumb } = this.props;
    let Ele = null;
    if (typeof thumb === "string") {
      Ele = <img src={thumb} alt="thumb" />;
    } else if (React.isValidElement(thumb)) {
      Ele = thumb;
    }
    return <div className="list-item-thumb">{Ele}</div>;
  };

  renderArrow = () => {
    const { arrow } = this.props;
    let Ele = null;
    if (typeof arrow === "boolean") {
      Ele = (
        <div className="list-item-arrow">
          <Iconfont type="right-circle" />
        </div>
      );
    }else if(React.isValidElement(arrow)){
      Ele = arrow
    }
    return Ele;
  };
  render() {
    const {
      children,
      thumb,
      extra,
      arrow,
      brief,
      className,
      style,
      align,
      disable,
      ...restProps
    } = this.props;
    const listItemStyle = {
      alignItems: align,
      ...style
    };
    return (
      <div
        className={classnames("list-item", className, {
          "list-item-disable": disable
        })}
        style={listItemStyle}
        {...restProps}
      >
        {thumb && this._renderThumb()}
        <div className="list-item-content">
          {children}
          {brief && <div className="list-item-brief">{brief}</div>}
        </div>
        <div className="list-item-extra">{extra}</div>
        {arrow && this.renderArrow()}
        {disable && <div className="list-item-mask" />}
      </div>
    );
  }
}
