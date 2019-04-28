import React from "react";
import classnames from "classnames";

import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    leftContent: "Back",
    rightContent: "Right",
    mode: "dark", //用于主题色light
    onLeftClick: () => {},
    float: false,
  };

  render() {
    const {
      children,
      className,
      mode,
      leftContent,
      rightContent,
      onLeftClick,
      style,
      float,
      ...restProps
    } = this.props;

    const NavStyle = {
      position: float ? 'fixed' : null,
      ...style
    } 
    return (
      <div
        className={classnames(className, "navbar", `navbar-${mode}`)}
        style={NavStyle}
        {...restProps}
      >
        <div className="navbar-left" role="button" onClick={onLeftClick}>
          {leftContent}
        </div>
        <div className="navbar-title">{children}</div>
        <div className="navbar-right">{rightContent}</div>
      </div>
    );
  }
}
