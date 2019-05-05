import React from "react";
import classnames from "classnames";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    showIcon: false //是否显示选项卡的图标，默认为false
  };
  handleOnchange = (index, e) => {
    e.preventDefault();
    const { onChange } = this.props;
    onChange && onChange(index);
  }
  render() {
    const { datasource, showIcon } = this.props;
    return (
      <div className="steps-wrap">
        {datasource.map((item, index, self) => {
          console.log(self, 4444);
          return (
            <div className="steps-wrap-item" onClick={this.handleOnchange.bind(this,index)}>
              <div className="steps-wrap-item-header">
                {index > 0 && <div className="steps-wrap-item-line-left" />}
                {!showIcon && (
                  <div
                    className={classnames("steps-wrap-item-circular", {
                      "steps-wrap-item-circular-active": item.isActive
                    })}
                  >
                    {item.header}
                  </div>
                )}
                {showIcon && (
                  <div className={classnames("steps-wrap-item-circular")}>
                    {item.isActive ? item.activeIcon : item.defaultIcon}
                  </div>
                )}
                {index < self.length - 1 && (
                  <div className="steps-wrap-item-line-right" />
                )}
              </div>
              <div className="steps-wrap-item-text">{item.text}</div>
              <div className="steps-wrap-item-extra">{item.extra}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
