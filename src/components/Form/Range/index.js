import React from "react";
import Range from "./Range";
import { ListItem } from "../../Layout";

export default class extends React.Component {
  render() {
    return (
      <div className="page-content">
        <ListItem style={{marginTop:'30px'}}>
          <Range />
        </ListItem>
      </div>
    );
  }
}
