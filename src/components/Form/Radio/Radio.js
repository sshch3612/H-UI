import React from "react";
import { ListItem } from "../../Layout";
import classnames from "classnames";
import "./index.less";

export default class extends React.Component {
  render() {
    const {
      name,
      value,
      checked,
      defaultChecked,
      onChange,
      children,
      ...restProps
    } = this.props;
    return (
      <ListItem
        extra={
          <div style={{ height: "24px",width:'24px' }}>
            <label>
              <input
                className="radio-input"
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
              />
              <span
                className={classnames("radio-checkd", {
                  "radio-checkd-active": checked
                })}
              />
            </label>
          </div>
        }
        {...restProps}
      >
        {children}
      </ListItem>
    );
  }
}
