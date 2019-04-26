import React from "react";
import "./index.less";

/**
 *
 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class PullToRefresh extends React.Component {

  static  defaultProps = {
    damping: 100,
    distanceToRefresh: 30,
    indicator:null//{ activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode }
  }
  constructor(props) {
    super(props);
    this._scrollTop = 0;
    this._startY = null;
    this._currentY = null;
    this._moveY = null;
    this._endY = null;
    this._direction = null;
    this._isReadyrefresh = false;
    this._isRefresh = false;
    this.pullUp = {
      // 上方DOM
      Refresh: <div className="dropload-refresh">↓下拉刷新</div>,
      Update: <div className="dropload-update">↑释放更新</div>,
      Load: (
        <div className="dropload-load">
          <span className="loading" />
          加载中...
        </div>
      ),
      Finish: <div className='dropload-end'>加载完成</div>
    };
    this.pullDown = {
      Refresh: <div className="dropload-refresh">↑上拉加载更多</div>,
      Load:
        <div className="dropload-load"><span className="loading"></span>加载中...</div>,
      NoData: <div className="dropload-noData">暂无数据</div>
    };
    this.state = {
      pulldistance: 0,
      pullUpStatus:this.pullUp.Refresh,
      pullDownStatus:null,
    };
    this.resetData.bind(this)
  }


  handleTouchStart = e => {
    //记住scrollTop 的高度/触摸位置
    //
    if(!this._isRefresh){
      this._scrollTop = e.currentTarget.scrollTop;
      this._startY = e.touches[0].pageY;
    }
  };

  handleTouchMove = e => {
    if(this._isRefresh) return;//正在刷新
    const {damping } = this.props;
    this._currentY = e.changedTouches[0].pageY;
    this._moveY = this._currentY - this._startY;
    if (this._moveY > 0) {
      this.direction = "down";
    } else if (this._moveY < 0) {
      this.direction = "up";
    }
    const absMoveY = Math.abs(this._moveY);
    if (
      this.direction === "down" && //滑动方向
      this._scrollTop <= 0 && //滚动条高度
      absMoveY <= damping //最大滑动距离
    ) {
      //执行下拉动画 
      //显示下拉刷新 absMoveY < 30px
      //显示释放刷新刷新 absMoveY > 30px _isReadyrefresh = true
      e.preventDefault();
      const {distanceToRefresh } = this.props;
        if( absMoveY < distanceToRefresh ){
          this._isReadyrefresh = false
          this.setState({
            pulldistance: absMoveY,
            pullUpStatus: this.pullUp.Refresh
          }); 
        }else{
          this._isReadyrefresh = true
          this.setState({
            pulldistance: absMoveY,
            pullUpStatus: this.pullUp.Update
          }); 
        }
    }
  };
  
  handleTouchEnd = e => {
    if(this._isRefresh) return;//正在刷新
    const {onRefresh } = this.props;
    if(this._isReadyrefresh){
      //显示刷新状态
      this.setState({
        pulldistance: 30,
        pullUpStatus: this.pullUp.Load
      });
      //数据请求 回调
      onRefresh && onRefresh(this);
    }else{
      //归零处理
      this.resetData();//重置刷新状态
    }
    
  };

  resetData = ( ) => {
    this._isReadyrefresh = false;
    this._isRefresh = false;
    this.setState({
      pullUpStatus: this.pullUp.Finish
    },()=>{
      setTimeout(()=>{
        this.setState({
          pulldistance: 0,
          // pullUpStatus:null
        });
      },300)
    })
  }

  render() {
    const { pulldistance, pullUpStatus } = this.state;
    const pullStyle = {
      // height: `${pulldistance}px`,
      transform: `translate3d(0,${pulldistance}px,0)`
    };
    return (
      <div className='pull-to-refresh-content-wrapper'>
        <div
          className="pull-to-refresh-content"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          style={pullStyle}
        >
          <div className="pull-to-refresh-indicator">
            {pullUpStatus}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
