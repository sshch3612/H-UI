import React from "react";
import { connect } from "dva";
import { Link, NavLink, Route } from "dva/router";
// import { Router, Route } from 'dva/router';
import Flex from "../components/Grid/Flex";
import Icon from "../components/Icon";
import Loadable from "../components/Loadable/Loadable";
import "./IndexPage.less";

function IndexPage(props) {
  const { match } = props;
  console.log(match, "match");
  return (
    <div className='page-content'>
      <Flex>
        <div
          className="home-item"
          style={{ height: "100px",  }}
        >
          <NavLink to={"/icon"}>Icon组件</NavLink>
        </div>
        <NavLink to={"/buttons"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Buttons组件
          </div>
        </NavLink>
        <NavLink to={"/toast"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Toast组件
          </div>
        </NavLink>
        <NavLink to={"/modal"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Modal组件
          </div>
        </NavLink>
        <NavLink to={"/popover"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Popover组件
          </div>
        </NavLink>
        <NavLink to={"/message"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Message组件
          </div>
        </NavLink>
        <NavLink to={"/checkbox"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Checkbox组件
          </div>
        </NavLink>
        <NavLink to={"/radio"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Radio组件
          </div>
        </NavLink>
        <NavLink to={"/list"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            List组件
          </div>
        </NavLink>
        <NavLink to={"/switch"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Switch组件
          </div>
        </NavLink>
        <NavLink to={"/slider"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Slider组件
          </div>
        </NavLink>
        <NavLink to={"/navbar"}>
          <div
            className="home-item"
            style={{ height: "100px",  }}
          >
            Navbar组件
          </div>
        </NavLink>
        <div
          className=""
          style={{ height: "100px",  }}
        />
        <div
          className=""
          style={{ height: "100px",  }}
        />
        <div
          className=""
          style={{ height: "100px",  }}
        />
        <div
          className=""
          style={{ height: "100px",  }}
        />
        <div
          className=""
          style={{ height: "100px",  }}
        />
        <div
          className=""
          style={{ height: "100px",  }}
        />
        <div
          className=""
          style={{ height: "100px",  }}
        />
      </Flex>
    </div>
  );
}

export default connect()(IndexPage);
