import React from 'react';

export default class extends React.Component{
  
  componentDidMount(){
    window.addEventListener('onScroll',function(e){
      console.log(e,4)
    })
  }

  render(){
    return(
      <div >
        {React.Children.only(this.props.children)}
      </div>
    )
  }
}
