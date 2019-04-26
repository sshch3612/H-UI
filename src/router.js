import React from "react";
import { routerRedux, Router, Route, Switch, withRouter } from "dva/router";
import dynamic from "dva/dynamic";
import "./index.less";
import { Loadable} from "./components/Common";
import routeData from "./routes.config.js";
import { Navbar } from "./components/View";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
}

export default RouterConfig;

const ANIMATION_MAP = {
  PUSH: "forward",
  POP: "back"
};
const Routes = withRouter(({ location, history }) => {
  return (
    <div className="page">
      <Navbar float={true} onLeftClick={()=>{
        history.go(-1);
      }}>
      {location.pathname}
      </Navbar>
      <TransitionGroup
        className={"page-wrapper"}
        childFactory={child =>
          React.cloneElement(child, {
            classNames: ANIMATION_MAP[history.action]
          })
        }
      >
        <CSSTransition timeout={200} key={location.pathname}>
          <Switch location={location}>
            {routeData.map((item, index) => (
              <Route
                key={item.path}
                exact={item.exact}
                path={item.path}
                component={item.component}
              />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
});
