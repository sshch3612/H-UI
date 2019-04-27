import React, { ReactElement } from "react";
import classnames from "classnames";
import { CSSTransition } from "react-transition-group";

import "./index.less";

/**
 *open
 *
 * @export
 * @class
 * @extends {React.Component<drawerProps>}
 */
export default class extends React.Component {
  static defaultProps = {
    open: false,
    place: "left"
  };
  constructor(props) {
    super(props);
    this.state = {
      height: null
    };
  }
  //<div className={classnames('drawer',className)} {...restPorps}>
  render() {
    const {
      children,
      place,
      open,
      className,
      onClose,
      style,
      ...restPorps
    } = this.props;
    const { height } = this.state;
    const drawerStyle = {
      height: height,
      ...style
    };
    return (
      <div
        className={classnames("drawer", className)}
        {...restPorps}
        style={drawerStyle}
      >
        {open && (
          <div
            className="drawer-overlay"
            onClick={() => {
              onClose();
            }}
          />
        )}
        <CSSTransition
          in={open}
          timeout={200}
          classNames={classnames({
            "my-node": place === "left",
            "drawer-right": place === "right"
          })}
          onEnter={() => {
            this.setState({
              height: "100%"
            });
          }}
          onExited={() => {
            this.setState({
              height: null
            });
          }}
          unmountOnExit
        >
          <div
            className={classnames({
              "drawer-content-left": place === "left",
              "drawer-content-right": place === "right"
            })}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    );
  }
}
