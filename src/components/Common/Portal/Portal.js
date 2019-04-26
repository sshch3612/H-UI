import React from "react";
import ReactDom from "react-dom";
import './index.less';

export default class extends React.Component {


  static defaultProps = {
    mask: false,
  }
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount(){
    document.body.removeChild(this.el);
  }
  _renderNodes = () => {
    const { children , mask} = this.props;
    const Ele = (
      <div className="portal-container">
        {mask && <div className="portal-mask" />}
        {children}
      </div>
    );
    return Ele
  };
  render() {
    return ReactDom.createPortal(this._renderNodes(), this.el);
  }
}
