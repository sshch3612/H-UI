import React from "react";
import OnScroll from "./OnScroll";
import Portal from "../../Common/Portal/Portal";

import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    currentDate: Date.now(), //当前日期
    mode: "date" //time  datetime
  };

  constructor(props) {
    super(props);
    this.currentDate = new Date(props.currentDate); //
    this.Year = this.currentDate.getFullYear();
    this.Month = this.currentDate.getMonth();
    this.days = this.mGetDate(this.Year, this.Month + 1);
    this.state = {
      HourStart: 0,
      HourEnd: 23,
      MinuteStart: 0,
      MinuteEnd: 59,
      MonthStart: 1,
      MonthEnd: 12,
      YearStart: this.Year - 10,
      YearEnd: this.Year + 10,
      DayStart: 1,
      DayEnd: this.days,
      hourActive: this.currentDate.getHours(),
      minuteActive: this.currentDate.getMinutes(),
      dayActive: this.currentDate.getDate(),
      monthActive: this.Month,
      yearActive: this.Year
      // monthDays: this.days
    };
  }

  mGetDate = (_year, _month) => {
    return new Date(_year, _month, 0).getDate();
  };
  _selectPicker = e => {
    const {
      yearActive,
      monthActive,
      dayActive,
      hourActive,
      minuteActive
    } = this.state;
    e.preventDefault();
    this.props.close();
    this.props.submit({
      yearActive,
      monthActive,
      dayActive,
      hourActive,
      minuteActive
    });
  };

  _closePicker = e => {
    e.preventDefault();
    this.props.close();
  };

  _renderyearActive = index => {
    this.setState({
      yearActive: index
    });
  };

  _rendermonthActive = index => {
    const { yearActive } = this.state;
    this.setState({
      monthActive: index - 1,
      DayEnd: this.mGetDate(yearActive, index) //new Date(_year, _month, 0).getDate()
    });
  };

  _renderdayActive = index => {
    this.setState({
      dayActive: index
    });
  };

  _renderHourActive = index => {
    this.setState({
      hourActive: index
    });
  };

  _renderMinuteActive = index => {
    this.setState({
      minuteActive: index
    });
  };

  render() {
    const {
      renderYear,
      renderMonth,
      renderDay,
      renderHour,
      renderMinute,
      mode
    } = this.props;
    const {
      hourActive,
      minuteActive,
      yearActive,
      monthActive,
      dayActive,
      HourStart,
      HourEnd,
      MinuteStart,
      MinuteEnd,
      MonthStart,
      MonthEnd,
      YearStart,
      YearEnd,
      DayStart,
      DayEnd,
      monthDays
    } = this.state;
    return (
      <Portal mask={true}>
        <div className="datePicker">
          <div className="datepicker-container">
            <div className="datecontrol">
              <div className="control-close" onClick={this._closePicker}>
                取消
              </div>
              <div className="control-submit" onClick={this._selectPicker}>
                确定
              </div>
            </div>
            <div className="datepicker-content">
              {(mode === "date" || mode === "datetime") && (
                <React.Fragment>
                  {" "}
                  <div className="datepicker-content-item">
                    <OnScroll
                      min={YearStart}
                      max={YearEnd}
                      onChange={this._renderyearActive}
                      currentindex={yearActive}
                      unit={"年"}
                    />
                  </div>
                  <div className="datepicker-content-item">
                    <OnScroll
                      min={MonthStart}
                      max={MonthEnd}
                      onChange={this._rendermonthActive}
                      currentindex={monthActive}
                      unit={"月"}
                    />
                  </div>
                  <div className="datepicker-content-item">
                    <OnScroll
                      min={DayStart}
                      max={DayEnd}
                      onChange={this._renderdayActive}
                      currentindex={dayActive}
                      unit={"日"}
                    />
                  </div>
                </React.Fragment>
              )}
              {(mode === "time" || mode === "datetime") && (
                <React.Fragment>
                  <div className="datepicker-content-item">
                    <OnScroll
                      min={HourStart}
                      max={HourEnd}
                      onChange={this._renderHourActive}
                      currentindex={hourActive}
                      unit={"时"}
                    />
                  </div>
                  <div className="datepicker-content-item">
                    <OnScroll
                      min={MinuteStart}
                      max={MinuteEnd}
                      onChange={this._renderMinuteActive}
                      currentindex={minuteActive}
                      unit={"分"}
                    />
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}
