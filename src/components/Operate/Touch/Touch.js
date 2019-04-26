import React from "react";

/**
 *1.tap 事件
 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.isActive = true;
    this.state = {
      Events: {},
      startPageX: null,
      startPageY: null,
      startTime: null,
      tapTime: 200,
      tapAway: 5,
      firstTag: 0,
      singleTapTimer: null,
      doubleTapTimer: null
    };
  }

  componentDidMount() {}
  touchStart = e => {
    e.preventDefault();
    this.state.startPageX = e.touches[0].pageX;
    this.state.startPageY = e.touches[0].pageY;
    this.state.startTime = Date.now();
    this.ref.addEventListener("touchmove", (e) => {
      // 执行滚动回调
      e.preventDefault();
      this.touchMove(e)
    }, {
      passive: false //  禁止 passive 效果http://w3cay.com/post/dc49b55.html
    })
  }

  touchMove = e => {
    console.log('touchMove',Date.now());
    if (this.isActive) {
      const { onMove } = this.props;
      const { pageX, pageY } = e.touches[0];
      const { startPageX, startPageY } = this.state;
      this.isActive = false;
      onMove && onMove(pageX - startPageX, pageY - startPageY);
      setTimeout(() => {
        this.isActive = true;
      },0);
    }
  }

  touchEnd = e => {
    this.state.endPageX = e.changedTouches[0].pageX;
    this.state.endPageY = e.changedTouches[0].pageY;
    this.state.endTime = Date.now();
    const isTime = this.eventTime(
      this.state.startTime,
      this.state.endTime,
      this.state.tapTime
    );
    const isAway = this.deltaAway(
      this.state.startPageX,
      this.state.endPageX,
      this.state.startPageY,
      this.state.endPageY,
      this.state.tapAway
    );
    if (isTime && isAway) {
      //执行tap 事件
      this.Tap();
    }
    if (!isTime && isAway) {
      //执行长按事件
      console.log("执行长按事件");
    }
    if (isTime && !isAway) {
      //执行滑动事件
      console.log("执行滑动事件");
      const direction = this.swipeDirection();
      const { onSwiper } = this.props;
      onSwiper && onSwiper(direction);
    }
    const { onTouchEnd } = this.props;
    const { startPageX, startPageY } = this.state;
    console.log('this.state.endTime',this.state.endTime);
    onTouchEnd && onTouchEnd(this.state.endPageX-startPageX,this.state.endPageY-startPageY);
  };

  eventTime = (startTime, endTime, tapTime) => {
    console.log(startTime, endTime, tapTime);
    if (endTime - startTime < tapTime) {
      return true;
    }
    return false;
  };

  deltaAway = (x1, x2, y1, y2, away) => {
    const deltaX = x2 - x1;
    const deltay = y2 - y1;
    if (deltaX < away && deltay < away) {
      return true;
    }
    return false;
  };

  Tap = () => {
    const { onTap } = this.props;
    if (this.state.firstTag === 0) {
      this.state.firstTag += 1;
      this.state.singleTapTimer = setTimeout(() => {
        this.state.firstTag = 0;
        //onTap 执行ontap事件
        console.log("执行点击事件啦");
        const { endPageX, endPageY } = this.state;
        onTap && onTap(endPageX, endPageY);
      }, 300);
    } else if (this.state.firstTag === 1) {
      //先清除事件
      clearTimeout(this.state.singleTapTimer);
      this.state.doubleTapTimer = setTimeout(() => {
        this.state.firstTag = 0;
        //doubleTap doubleTap
        console.log("执行双机事件啦");
      }, 100);
    } else {
      return;
    }
  }

  swipeDirection = (x1, x2, y1, y2) => {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
      ? x1 - x2 > 0
        ? "Left"
        : "Right"
      : y1 - y2 > 0
      ? "Up"
      : "Down";
  }
  
  render() {
    return (
      <div
        onTouchStart={this.touchStart}
        // onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
        ref={(self)=>{this.ref=self}}
      >
        {this.props.children}
      </div>
    )
  }
}
