import React from "react";
import classnames from "classnames";
import { Button } from "../../Base";
import "./index.less";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage
    };
  }
  static defaultProps = {
    activeColor: "#108ee9",
    total: 5,
    numberShow: true,
    mode: 'button',
    localeBtn: {
      preBtn: (
        <Button size={"large"}>
          <span style={{ color: "#ffffff" }}>上一页</span>
        </Button>
      ),
      nextBtn: (
        <Button size={"large"}>
          <span style={{ color: "#ffffff" }}>下一页</span>
        </Button>
      )
    }
  };

  // static getDerivedStateFromProps(props, state){
  //   if(props.currentPage !== state.currentPage){
  //       return {
  //         currentPage: props.currentPage
  //       }
  //   }
  //   return null;
  // }

  _handleOnclick = (arg, e) => {
    e.preventDefault();
    const current = this.state.currentPage + arg;
    console.log(current);
    if (current <= 0 || current > this.props.total) return;
    const { onChange } = this.props;
    this.setState({
      currentPage: current
    });
    onChange && onChange(arg);
  };

  _handlePointerclick = (arg, e) => {
    e.preventDefault();
    const { onChange } = this.props;
    this.setState({
      currentPage: arg
    });
    onChange && onChange(arg);
  };

  _rendrPointer = () => {
    const { total } = this.props;
    const { currentPage } = this.state;
    const result = [];
    for (let i = 0; i < total; i++) {
      result.push(
        <div
          className={classnames("pagination-dot", {
            "pagination-dot-active": currentPage === i
          })}
          onClick={this._handlePointerclick.bind(this, i)}
        >
          <span />
        </div>
      );
    }
    return result;
  };

  render() {
    const { localeBtn, activeColor, total, numberShow, mode } = this.props;
    const { currentPage } = this.state;
    let resultEle = null;
    if (mode === "pointer") {
      resultEle = this._rendrPointer();
    } else {
      resultEle = <React.Fragment>
        <div
          className="pagination-pre"
          onClick={this._handleOnclick.bind(this, -1)}
        >
          {localeBtn.preBtn}
        </div>
      {
        numberShow && 
          <div className="pagination-number">
            <span style={{ color: activeColor }}>{currentPage}</span> /
            <span>{total}</span>
          </div>
      }
      <div
        className="pagination-next"
        onClick={this._handleOnclick.bind(this, 1)}
      >
        {localeBtn.nextBtn}
      </div></React.Fragment>;
    }
    return <div className="pagination">{resultEle}</div>;
  }
}
