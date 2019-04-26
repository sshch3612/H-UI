import React from "react";
import Checkbox from "./Checkbox";

export default class extends React.Component {

  static defaultProps = {
    datasource: [
      { value: "苹果", checked: false },
      { value: "李子", checked: false },
      { value: "香蕉", checked: false }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      datasource: props.datasource
    };
  }

  render() {
    const { onChange,children } = this.props;
    const { datasource } = this.state;
    return (
      <div className="">
        {/* {datasource &&
          datasource.map((item, index) => {
            return (
              <Checkbox
                key={item.value}
                checked={item.checked}
                name="test"
                onChange={e => {
                  const checked = e.currentTarget.checked;

                  this.setState(
                    (prestate, props) => ({
                      datasource: prestate.datasource.map(
                        (stateitem, stateindex) => {
                          return index === stateindex
                            ? { ...stateitem, checked: checked }
                            : stateitem;
                        }
                      )
                    }),
                    () => {
                      const result = [];
                      this.state.datasource.map((item, index) => {
                        if (item.checked) {
                          result.push(item.value);
                        }
                      });
                      onChange && onChange(result);
                    }
                  );
                }}
              >
                {item.value}
              </Checkbox>
            );
          })} */}
          {React.Children.map(children, (child,index)=>{
              return React.cloneElement(child,{
                name:name,
                checked:datasource[index].checked,
                onChange: e => {
                  const checked = e.currentTarget.checked;

                  this.setState(
                    (prestate, props) => ({
                      datasource: prestate.datasource.map(
                        (stateitem, stateindex) => {
                          return index === stateindex
                            ? { ...stateitem, checked: checked }
                            : stateitem;
                        }
                      )
                    }),
                    () => {
                      const result = [];
                      this.state.datasource.map((item, index) => {
                        if (item.checked) {
                          result.push(item.value);
                        }
                      });
                      console.log(result,44);
                      onChange && onChange(result);
                    }
                  )
                }
              })
          })}
      </div>
    );
  }
}
