import React from "react";
import classnames from "classnames";
import "./index.less";

/**
 *1 Tab头部 tabs onTabClick
 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  static defaultProps = {
    tabs: [
      { title: "Tab1" },
      { title: "Tab2" },
      { title: "Tab3" },
      { title: "Tab4" }
    ],
    position: "top"
  };

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }
  _renderTabsTitle = () => {
    const { tabs, onTabClick } = this.props;
    const { currentIndex } = this.state;

    return tabs.map((item, index) => {
      return (
        <div
          className={`tabs-header-item ${
            currentIndex === index ? "tabs-header-item-active" : ""
          }`}
          key={index}
          onClick={e => {
            e.preventDefault();
            this.setState({
              currentIndex: index
            });
            if (onTabClick) {
              onTabClick(item, index);
            }
          }}
        >
          {item.title}
        </div>
      );
    });
  };

  _renderUnderLine = () => {
    const { tabs, position } = this.props;
    const { currentIndex } = this.state;
    let lineStyle = null;
    if (position === "top" || position === "bottom") {
      lineStyle = {
        left: `${(currentIndex * 100) / tabs.length}%`,
        width: `${100 / tabs.length}%`,
      };
    }
    if (position === "left" || position === "right") {
      lineStyle = {
        height: `${100 / tabs.length}%`,
        top: `${(currentIndex * 100) / tabs.length}%`
      };
    }
    return <span className="tabs-header-line" style={lineStyle} />;
  };

  _renderTabs = () => {
    return (
      <div className="tabs-header">
        {this._renderTabsTitle()}
        {this._renderUnderLine()}
      </div>
    );
  };
  _renderTabsPane = () => {
    const { children } = this.props;
    const { currentIndex } = this.state;
    return React.Children.map(children, (item, index) => {
      return (
        <div
          className={classnames("tabs-pane", {
            "tabs-pane-inactive": index !== currentIndex
          })}
        >
          {item}
        </div>
      );
    });
  };

  _renderTabsPosition = () => {
    const { position } = this.props;
    return (
      <React.Fragment>
        {this._renderTabs()}
        {this._renderTabsBody()}
      </React.Fragment>
    );
  };
  _renderTabsBody = () => {
    const { position } = this.props;
    const { currentIndex } = this.state;
    const translate3d =
      position === "top" || position === "bottom"
        ? `translate3d(${-100 * currentIndex}%, 0, 0)`
        : `translate3d(0,${-100 * currentIndex}%, 0)`;
    return (
      <div className="tabs-content-wrap">
        <div
          className="tabs-pane-wrap"
          style={{ transform: translate3d}}
        >
          {this._renderTabsPane()}
        </div>
      </div>
    );
  };

  render() {
    const {position } = this.props;
    const { currentIndex } = this.state;
    return <div className={classnames('tabs',`tabs-${position}`)}>{this._renderTabsPosition()}</div>;
  }
}
