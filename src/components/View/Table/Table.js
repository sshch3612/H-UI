import React from 'react';
import './index.less';



export default class extends React.Component{


  _renderHeader = () => {
    const { columns } = this.props;
      return <thead><tr>
        {columns.map((item, index)=>{
          return <th key={item.key}>{item.title}</th>
        })}
      </tr></thead>
  }

  _renderContent = () => {
    const {datasource,columns} = this.props;
    return datasource.map((item, index)=>{
      return  <tr key={item.key}>
        {/* {Object.values(item).map((child,j)=>{
          return <td key={j}>{child}</td>
        })} */}
        {columns.map((child, j)=>{
          return <td key={j}>{item[child['dataIndex']]}</td>
        })}
      </tr>
    })
  }
  render(){
    return(
      <div className='table'>
        <table className='table-content' >
        {this._renderHeader()}
        <tbody>
          {this._renderContent()}
        </tbody>
        </table>
      </div>
    )

  }
}