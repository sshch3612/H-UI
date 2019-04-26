import React, { Children } from "react";
import {Portal} from "../../Common";
import "./popover.less";

/**
 *1气泡的显示控制
 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  static defaultProps = {
    place: "left",
  };
  state = {
    isOpen: false,
    popoverPlace:null,
  };
  _handleonClick = e => {
    e.preventDefault();
    this._getPosition();
    this.setState((prevState, props) => ({
      isOpen: !prevState.isOpen
    }));
    document.addEventListener("click", this._handleShow, false);
  };

  _handleShow = e => {
    document.removeEventListener("click", this._handleShow);
    this.setState((prevState, props) => ({
      isOpen: false
    }));
  };

  _getPosition = () => {
    const {top, bottom, left, right, height, width} = this.popover.getBoundingClientRect();
    const scrollleft =  document.documentElement.scrollLeft;
    const scrolltop =  document.documentElement.scrollTop;
    const {place } = this.props;
    let popoverStyle  = null;
    switch (place) {
      case 'left':
        popoverStyle = {
          left:`${left+scrollleft}px`,
          top: `${top+scrolltop+height/2}px`,
          transform:'translate3d(-100%,-50%,0)'  
        }
        break;
      case 'right':
        popoverStyle = {
          left:`${right+scrollleft}px`,
          top: `${top+scrolltop+height/2}px`,
          transform:'translate3d(0,-50%,0)'  
        }
        break;
      case 'top':
        popoverStyle = {
          left:`${left + width/2+scrollleft}px`,
          top: `${top+scrolltop}px`,
          transform:'translate3d(-50%,-100%,0)'  
        }
        break;
      case 'bottom':
        popoverStyle = {
          left:`${left+width/2+scrollleft}px`,
          top: `${bottom+scrolltop}px`,
          transform:'translate3d(-50%,0,0)'  
        }
        break;
      default:
        popoverStyle = {
          left:`${place.left}px`,
          top: `${place.top}px`,
        }
        break;
    }
    this.setState({
      popoverPlace:popoverStyle
    })

  }
  render() {
    const { children, content, place , style, className} = this.props;
    const { isOpen ,popoverPlace} = this.state;
    return (
      <React.Fragment>
        {isOpen && (
          <Portal>
            <div className="popover" style={popoverPlace}>
              <div className={`popover-arrow popover-arrow-${place}`} />
              <div className="popover-content">{content}</div>
            </div>
          </Portal>
        )}
        <div
          className={className}
          ref={self => {
            this.popover = self;
          }}
          onClick={this._handleonClick}
          style={{display:'inline-block',...style}}
        >
          {children}
        </div>
      </React.Fragment>
    );
  }
}
