import React from "react";
import classnames from "classnames";
import Input from "../Input/Input";
import { Iconfont } from "../../Base";
import { Tag } from "../../View";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    searchText: "搜索"
    showsearchbtn:false,
  };
  constructor(props) {
    super(props);
    this.state = {
      leftIcon: false,
      mask: true,
      leftText: true,
      showbtn: false,
      value:null,
    };
  }

  _handlePlaceholde = e => {
    e.preventDefault();
    this.refSearch.inputSelf.focus();
    this.setState({
      leftIcon: true,
      mask: false,
      showbtn:true,
    });
  };

  _handleChange = val => {
    if (val) {
      this.setState({
        leftText: false,
        value:val,
      });
    } else {
      this.setState({
        leftText: true,
        value:val,
      });
    }
    const {onChange } = this.props;
    onChange && onChange(val);
  };

  _handleBlur = val => {
    if (!val) {
      this.setState({
        leftIcon: false,
        mask: true,
        showbtn:false,
      });
    }
    const {onBlur } = this.props;
    onBlur && onSearch(val);
  };

  _handleSearch = (e) => {
    const {onSearch} = this.props;
    onSearch && onSearch(this.state.value);
  }

  render() {
    const { searchText ,showsearchbtn} = this.props;
    const { leftIcon, mask, leftText ,showbtn} = this.state;
    return (
      <div className="searchbar">
        <div className="searchbar-content">
          <Input
            ref={self => {
              this.refSearch = self;
            }}
            className="searchbar-content-input"
            placeholder={null}
            onChange={this._handleChange}
            onBlur={this._handleBlur}
          />
          {mask && (
            <div
              className="searchbar-content-mask"
              onClick={this._handlePlaceholde}
            />
          )}
          <div
            className={classnames("searchbar-content-placeholder", {
              "searchbar-content-placeholder-left": leftIcon
            })}
          >
            <Iconfont type={"search"} size={22} />
            {leftText && (
              <span className="searchbar-content-placeholder-text">搜索</span>
            )}
          </div>
        </div>
       {(showbtn || showsearchbtn) && <di className="searchbar-btn" onClick={this._handleSearch}>{searchText}</di>}
      </div>
    );
  }
}
