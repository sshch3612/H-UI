import React from "react";
import Picker from "./Picker";
import MultiPicker from "./MultiPicker";
import { Whitespace, Wingblank, List, ListItem } from "../../Layout";

export default class extends React.Component {
  state = {
    isOpen: false,
    fruitValue: "苹果",
    value: false,
    value1: false,
    fruit1Value:[2,3]
  };
  handleOpen = (val, e) => {
    e.preventDefault();
    this.setState({
      [`${val}`]: true
    });
  };

  handleClose = (val, e) => {
    this.setState({
      [`${val}`]: false
    });
  };
  handleChange = value => {
    const data = ["苹果", "皇冠梨", "香蕉", "西瓜", "橘子"];
    this.setState({
      fruitValue: data[value]
    });
  };
  handleChange1 = value => {
    console.log(value,444)
    const data = ["苹果", "皇冠梨", "香蕉", "西瓜", "橘子"];
    this.setState({
      fruit1Value: value
    });
  };
  //mode='array' data={['苹果','皇冠梨','香蕉','西瓜','橘子']}
  render() {
    const { value, value1, fruitValue,fruit1Value } = this.state;
    return (
      <React.Fragment>
        {/* <Datepicker /> */}
        <Whitespace>
          <Wingblank> 普通选择器</Wingblank>
        </Whitespace>
        <Whitespace>
          <ListItem extra={fruitValue}>
            <div onClick={this.handleOpen.bind(this, "value")}>请选择水果</div>
            {value && (
              <Picker
                mode="array"
                data={["苹果", "皇冠梨", "香蕉", "西瓜", "橘子"]}
                close={this.handleClose.bind(this, "value")}
                onChange={this.handleChange}
              />
            )}
          </ListItem>
        </Whitespace>

        <Whitespace>
          <Wingblank> 多列选择器</Wingblank>
        </Whitespace>
        <Whitespace>
          <ListItem extra={ fruit1Value}>
            <div onClick={this.handleOpen.bind(this, "value1")}>请选择水果</div>
            {value1 && (
              <MultiPicker
                mode="array"
                data={[
                  ["苹果", "皇冠梨", "香蕉", "西瓜", "橘子"],
                  ["苹果", "皇冠梨", "香蕉", "西瓜", "橘子"]
                ]}
                currentindex={fruit1Value}
                close={this.handleClose.bind(this, "value1")}
                onChange={this.handleChange1}
              />
            )}
          </ListItem>
        </Whitespace>
      </React.Fragment>
    );
  }
}
// export default Datepicker;

// export { Picker };
