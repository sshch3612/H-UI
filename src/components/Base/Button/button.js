import React from "react";
import classnames from "classnames";
// import Spin from "../Spin";

import "./button.less";

/**
 *1.构建基本样式
 *2.loading图标/Icon
 *3.onClick事件
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  fontsize = {
    large: { height: "45px", fontSize: "18px", lineHeight: "45px" },
    small: { height: "30px", fontSize: "13px", lineHeight: "30px" }
  };
  static defaultProps = {
    inline: false,
    fillColor: null,
    borderColor: null,
    opacity: false,
    size: "large"
  };

  _renderLoading = () => {
    const svg = (
      <svg viewBox="0 0 59.75 60.25" height="100%" width="100%">
        <path
          fill="#ccc"
          d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"
        />
        <path
          fill="none"
          stroke="#108ee9"
          strokeWidth="3"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"
        />
      </svg>
    );
    return <div className="loading-icon">{svg}</div>;
  };

  _renderIcon = () => {
    const { Icon } = this.props;
    return <div className="btn-icon">{Icon}</div>;
  };
  
  render() {
    const {
      inline,
      fillColor,
      borderColor,
      className,
      opacity,
      size,
      loading,
      Icon,
      onClick,
      disable,
      style,
      ...restProps
    } = this.props;
    const btnCls = classnames(className, {
      btn: true,
      "btn-loading": loading || Icon,
      "btn-disable": disable
    });
    const btnStyle = {
      width: inline ? "100%" : null,
      display: (!inline && loading) ? 'inline-flex': null  ,
      backgroundColor: fillColor,
      borderColor: borderColor,
      opacity: opacity ? 0.5 : null,
      ...this.fontsize[size],
      ...style
    };
    return (
      <a role="button" className={btnCls} style={btnStyle}
      onClick = {onClick}
      {...restProps}
      >
        {Icon && this._renderIcon()}
        {loading && this._renderLoading()}
        {this.props.children}
      </a>
    );
  }
}
