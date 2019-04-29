import React from 'react';
import { CSSTransition } from 'react-transition-group';
// import './less/animate.less';

import './index.less'

export default (WrappedComponent) => {
  return class extends React.Component {
    render() {
      console.log(4554545);
      return (
        <CSSTransition
          in={this.props.match !== null }
          classNames="my-node"
          timeout={200}
          // mountOnEnter={true}
          unmountOnExit
        >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      )
    }
  }
}
