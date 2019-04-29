import React from "react";
import classnames from 'classnames';
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    span: 4, //每行个数
    border:true,
  };

  _renderChild = () => {
    const { children, span ,itemstyle ,border} = this.props;
    const count = React.Children.count(children);
    const shang = count / span;
    const listitem = null;
    const result = [];
    const basis = (1 / span) * 100;
    const childStyle = {
      ...itemstyle,
      flexBasis:`${basis}%`
    }
    if (shang) {
      listitem = span - shang;
    }
    for (let i = 0; i < listitem; i += 1) {
      result.push(<div key={`shang${i}`} className={classnames("grid-flex-item")} style={childStyle} />);
    }
    return (
      <React.Fragment>
        {React.Children.map(children, (child, index) => (
          React.cloneElement(child,{...child.props,span:span})
          // <div className={classnames("grid-flex-item")} style={childStyle} key={index}>
          //   {child}
          // </div>
        ))}
        {result}
      </React.Fragment>
    );
  };
  render() {
    const {className } = this.props;
    return <div className={classnames("grid-flex",className)}>{this._renderChild()}</div>;
  }
}
