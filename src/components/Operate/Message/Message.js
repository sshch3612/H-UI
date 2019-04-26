import React from "react";
import ReactDom from "react-dom";
import Animate, { Animation } from "../../Animate/Animate";
import "./message.less";

export default (function() {
  let MessageInstance = null;
  function Message() {
    // constructor() {
    this.el = document.createElement("div");
    this.count = 0;
    this.timer = null;
    // }
  }
  Message.prototype.hide = function() {
    document.body.removeChild(this.el);
  };

  Message.prototype.info = function(
    content,
    duration = 3000,
    onClose = null,
    color = "#78a4fa"
  ) {
    clearTimeout(this.timer); //清除定时器，多次点击
    document.body.appendChild(this.el);
    let containEle = null;
    if (React.isValidElement(content)) {
      containEle = <div className="message-content">{content}</div>;
    }
    if (typeof content === "string") {
      containEle = <div className="message-content">{content}</div>;
    }
    ReactDom.render(
      <React.Fragment>
        <Animate
          name="Message"
          className="message-animate"
          style={{ backgroundColor: color }}
        >
          {containEle}
        </Animate>
      </React.Fragment>,
      this.el
    );
    if (this.count === 0) {
      Animation.Message.animated("translateDown").duration("1s");
      this.count += 1;
    } else {
      clearTimeout(this.timer);
      Animation.Message.animated("");
    }
    this.timer = setTimeout(() => {
      Animation.Message.animated("translateUp")
        .duration("1s")
        .AnimationEnd(() => {
          document.body.removeChild(this.el);
          this.count = 0;
          console.log("fef", this.count);
          if (onClose && duration != 0) {
            onClose();
          }
        });
    }, duration);
    return;
  };
  Message.prototype.success = function(
    content,
    duration = 3000,
    onClose = null,
    color = "#13ce66"
  ) {
    this.info(content,duration,onClose,color)
  };

  Message.prototype.error = function(
    content,
    duration = 3000,
    onClose = null,
    color = "#ff4949"
  ) {
    this.info(content,duration,onClose,color)
  };
  Message.prototype.warning = function(
    content,
    duration = 3000,
    onClose = null,
    color = "#ffc82c"
  ) {
    this.info(content,duration,onClose,color)
  };

  MessageInstance = new Message();
  return MessageInstance;
})();
