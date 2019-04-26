import React from "react";
import classnames from "classnames";
import "./index.less";

//用以接受各种类型的用户输入。其中，button、checkbox、file、hidden、image、password、radio、reset、submit、text这10个是传统的输入控件，新增的有color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week共13个。
/**
 *1.前置文本,input类型 placeholder
 *2.input默认值 defaultValue  value
 *3事件  onchange onblur  onfocus
 *4输入限制
 *5.校验
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  static defaultProps = {
    placeholder: "placeholder",
    // defaultValue: '',
    // value: '',
    disabled: false,
    total: 200,
    showtotal: false,
    height:null,
    autoheight:false,
  };
  constructor(props){
    super(props);
    this.Composition = true;//防止利用输入法输入时，频繁调用oninput事件
    this.state = {
      wordnumber: 0
      height:props.height,
    }
  }

  componentDidMount() {
  }
  _renderLabel = () => {
    const { addBefore } = this.props;
    const ele = <div className="addBefore">{addBefore}</div>;
    return ele;
  };

  _handleOnchange = e => {
    e.preventDefault();
    console.log(4444);
    const { onChange } = this.props;
    const value = e.currentTarget.value;
    this.setState({
      wordnumber: value.length
    });
    if (onChange) {
      onChange(value);
    }
  };

  _handleOnblur = e => {
    e.preventDefault();
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e.currentTarget.value);
    }
  };

  _handleOnfocus = e => {
    e.preventDefault();
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e.currentTarget.value);
    }
  };

  render() {
    const {
      placeholder,
      addBefore,
      defaultValue,
      value,
      disabled,
      error,
      total,
      showtotal,
      autoheight
    } = this.props;
    const { wordnumber ,height} = this.state;
    return (
      <React.Fragment>
        <div
          className={classnames("form-control", {
            "form-control-disabled": disabled
          })}
        >
          {addBefore && this._renderLabel()}
          <div className="input-control">
            <textarea
              ref={ele => {
                this.inputSelf = ele;
              }}
              // type={inputType}
              style={{height:`${height}px`,overflow:autoheight?'hidden':null}}
              onCompositionStart={e => {
                this.Composition = false;
              }}
              onCompositionEnd={e => {
                this.Composition = true;
              }}
              onInput={(e) => {
                if(!autoheight)return;
                if(this.Composition){
                  this.setState({
                    height:this.props.height,
                  },()=>{
                    this.setState({
                      height:this.inputSelf.scrollHeight,
                    })
                  })
                }
              }}
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={value}
              onChange={this._handleOnchange}
              onFocus={this._handleOnfocus}
              onBlur={this._handleOnblur}
            />
            {total && showtotal && (
              <div className="input-control-total">
                {wordnumber}/{total}
              </div>
            )}
          </div>
          {disabled && <div className="input-control-mask" />}
        </div>
        {error && <div className="input-control-error">{error}</div>}
      </React.Fragment>
    );
  }
}
