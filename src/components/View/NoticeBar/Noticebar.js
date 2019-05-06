import React from "react";
import classnames from "classnames";
import "./index.less";

export default class extends React.PureComponent {
  static defaultProps = {
    rows: "single", //multiline
    animate: false,
    mode: "" //closable link
  };
  render() {
    const { children, icon, rows, animate, mode } = this.props;
    return (
      <div className="noticebar">
        <div className={classnames("noticebar-content")}>
          {icon && (
            <div className={classnames("noticebar-content-icon")}>{icon}</div>
          )}
          <div
            className={classnames("noticebar-content-text", {
              "noticebar-content-singletext": !animate && rows === "single",
              "noticebar-content-animate": animate
            })}
          >
            <div className="noticebar-content-text-content">{children}</div>
          </div>
          {mode && <div className={classnames('noticebar-content-action')}>fejf </div>}
        </div>
      </div>
    );
  }
}
