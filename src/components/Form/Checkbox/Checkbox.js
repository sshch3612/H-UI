import React from "react";
import {ListItem} from "../../Layout";
import classnames from "classnames";
import "./index.less";

export default class extends React.Component {

  static defaultProps = {
    checked: false,
  }


  render() {
    const { name, value, defaultChecked, checked,children ,onChange, ...restProps} = this.props;
    return (
      <ListItem
        thumb={
          <label>
            <input
              className="checkbox-input"
              type="checkbox"
              name={name}
              value={value}
              checked={checked}
              // defaultChecked={defaultChecked}
              onChange={onChange}
            />
            <span
              className={classnames("checkbox-checked", {
                "checkbox-checked-active": checked || defaultChecked
              })}
            />
          </label>
        }
        {...restProps}
      >
        {children}
      </ListItem>
    );
  }
}
