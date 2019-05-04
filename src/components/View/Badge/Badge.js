import React from "react";
import classnames from "classnames";
import "./index.less";
export default class extends React.PureComponent {
  static defaultProps = {
    overflowCount: 99,
    dot: false
  };
  render() {
    const { number, overflowCount, dot } = this.props;
    return (
      <React.Fragment>
        {number && (
          <span
            className={classnames("badge-wrap", {
              "badge-wrap-dot": dot,
              "badge-wrap-single": !dot && number < 10
            })}
          >
            {number <= overflowCount ? number : "99+"}
          </span>
        )}
      </React.Fragment>
    );
  }
}
