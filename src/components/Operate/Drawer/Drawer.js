import React, { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';


import './index.less'

/**
 *open
 *
 * @export
 * @class
 * @extends {React.Component<drawerProps>}
 */
export default class extends React.Component{

  static defaultProps = {
    slidebar: <span>fewfewge</span>,
    open: false
  }

  render(){
    const { slidebar, open} = this.props;
    // if(!open) return null;
    return <div style={{position:'relative',height:'150px',overflow:'hidden'}}>
      {open && <div className='drawer-overlay'></div>}
      <CSSTransition in={open} timeout={200} classNames="my-node" unmountOnExit>
        <div className='drawer-content'>{slidebar}</div>
      </CSSTransition>
    </div>
  }
}