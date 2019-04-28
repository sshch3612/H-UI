import React from "react";
import classnames from "classnames";

export default class extends React.Component {
  render() {
    const { className, renderHeader, renderFooter,children ,...restProps } = this.props;
    return (
      <div className={classnames("list", className)} {...restProps}>
        {renderHeader && <div className="list-header">{renderHeader}</div>}
        {children}
        {renderFooter && <div className="list-footer">{renderFooter}</div>}
      </div>
    );
  }
}
