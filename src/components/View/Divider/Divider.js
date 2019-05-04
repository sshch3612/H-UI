import React from "react";
import "./index.less";

export default props => {
  const { children, color } = props;
  return (
    <div className="divider-wrap">
      <div className="divider-wrap-left" style={{ backgroundColor: color }} />
      <div className="divider-wrap-content" style={{ color: color }}>
        {children}
      </div>
      <div className="divider-wrap-right" style={{ backgroundColor: color }} />
    </div>
  );
};
