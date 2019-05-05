import React from "react";
import { ListItem } from "../../Layout";
import classnames from "classnames";
import "./index.less";

export default class extends React.PureComponent {
  static defaultProps = {
    arrow: false
  };
  state = {
    arrow: true
  };

  componentDidMount() {
    this.accordionHeight = this.accordionSelf.clientHeight;
    this.setState((prestate, props) => ({
      arrow: props.arrow
    }));
  }

  handleClick = e => {
    e.preventDefault();
    this.setState((prestate, props) => ({
      arrow: !prestate.arrow
    }));
  };
  render() {
    const { children,thumb, title } = this.props;
    const { arrow } = this.state;
    return (
      <div className="accordion">
        <ListItem
          extra={
            <span
              className={classnames("accordion-arrow", {
                "accordion-arrow-up": arrow,
                "accordion-arrow-down": !arrow
              })}
            />
          }
          thumb={thumb}
          onClick={this.handleClick}
        >
          {title}
        </ListItem>
        <div
          ref={self => {
            this.accordionSelf = self;
          }}
          className='accordion-content'
          style={{
            // display: arrow ? "block" : "none",
            height: arrow ? `${this.accordionHeight}px` : "0"
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}
