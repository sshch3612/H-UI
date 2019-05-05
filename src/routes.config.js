import {Loadable} from './components/Common';


const routeDate = [
  {
    name:'home',
    path:'/',
    exact:true
    component: Loadable(() => import("./routes/Home"))
  },
  {
    name:'Base',
    path:'/base',
    // exact:true
    component: Loadable(() => import("./routes/Base"))
  },
  {
    name:'Layout',
    path:'/layout',
    // exact:true
    component: Loadable(() => import("./routes/Layout"))
  },
  {
    name:'Form',
    path:'/form',
    // exact:true
    component: Loadable(() => import("./routes/Form"))
  },
  {
    name:'View',
    path:'/view',
    // exact:true
    component: Loadable(() => import("./routes/View"))
  },
  {
    name:'Operate',
    path:'/operate',
    // exact:true
    component: Loadable(() => import("./routes/Operate"))
  },
  {
    name:'Navigate',
    path:'/navigate',
    // exact:true
    component: Loadable(() => import("./routes/Navigate"))
  },
  {
    name:'icon',
    path:'/icon',
    component: Loadable(() => import('./components/Base/Icon')),
  },
  {
    name:'button',
    path:'/buttons',
    component:Loadable(() => import('./components/Base/Button')),
  },
  {
    name:'Color',
    path:'/color',
    component:Loadable(() => import('./components/Base/Color')),
  },
  {
    name:'Toast',
    path:'/toast',
    component:Loadable(() => import('./components/Operate/Toast')),
  },
  {
    name:'Modal',
    path:'/modal',
    component:Loadable(() => import('./components/Operate/Modal')),
  },
  {
    name:'PullToRefresh',
    path:'/refresh',
    component:Loadable(() => import('./components/Operate/PullToRefresh')),
  },
  {
    name: 'Popover',
    path: '/popover',
    component:Loadable(() => import('./components/Operate/Popover')),
  },
  {
    name: 'Message',
    path: '/message',
    component:Loadable(() => import('./components/Operate/Message')),
  },
  {
    name: 'Drawer',
    path: '/drawer',
    component:Loadable(() => import('./components/Operate/Drawer')),
  },
  {
    name: 'Checkbox',
    path: '/checkbox',
    component:Loadable(() => import('./components/Form/Checkbox')),
  },
  {
    name: 'Radio',
    path: '/radio',
    component:Loadable(() => import('./components/Form/Radio')),
  },
  {
    name: 'Input',
    path: '/input',
    component:Loadable(() => import('./components/Form/Input/Input_test')),
  },
  {
    name: 'InputNumber',
    path: '/inputnumber',
    component:Loadable(() => import('./components/Form/InputNumber')),
  },
  {
    name: 'Picker',
    path: '/picker',
    component:Loadable(() => import('./components/Form/DatePickerView')),
  },
  {
    name: 'Textarea',
    path: '/textarea',
    component:Loadable(() => import('./components/Form/Input/Textarea_test')),
  },
  {
    name: 'Range',
    path: '/range',
    component:Loadable(() => import('./components/Form/Range')),
  },
  {
    name: 'SearchBar',
    path: '/searchbar',
    component:Loadable(() => import('./components/Form/SearchBar')),
  },
  {
    name: 'List',
    path: '/list',
    component:Loadable(() => import('./components/Layout/List')),
  },
  {
    name: 'Flex',
    path: '/flex',
    component:Loadable(() => import('./components/Layout/Grid')),
  },
  {
    name: 'List',
    path: '/radio',
    component:Loadable(() => import('./components/Form/Radio')),
  }
  ,
  {
    name: 'Switch',
    path: '/switch',
    component:Loadable(() => import('./components/Form/Switch')),
  }
  ,
  {
    name: 'Slider',
    path: '/slider',
    component:Loadable(() => import('./components/Form/Slider')),
  }
  ,
  {
    name: 'Spin',
    path: '/spin',
    component:Loadable(() => import('./components/View/Spin')),
  }
  ,
  {
    name: 'Tag',
    path: '/tag',
    component:Loadable(() => import('./components/View/Tag')),
  }
  ,
  {
    name: 'Divider',
    path: '/divider',
    component:Loadable(() => import('./components/View/Divider')),
  },
  {
    name: 'Badge',
    path: '/badge',
    component:Loadable(() => import('./components/View/Badge')),
  },
  {
    name: 'Steps',
    path: '/steps',
    component:Loadable(() => import('./components/View/Steps')),
  },
  {
    name: 'Navbar',
    path: '/navbar',
    component:Loadable(() => import('./components/Navigate/Navbar')),
  },
  {
    name: 'Pagination',
    path: '/pagination',
    component:Loadable(() => import('./components/Navigate/Pagination')),
  },
  {
    name: 'Segmented',
    path: '/segmented',
    component:Loadable(() => import('./components/Navigate/SegmentedControl')),
  },
  {
    name: 'Tabs',
    path: '/tabs',
    component:Loadable(() => import('./components/Navigate/Tabs')),
  },
  {
    name: 'Animate',
    path: '/animate',
    component:Loadable(() => import('./components/Highlevel/Animate')),
  },
  {
    name: 'Highlevel',
    path: '/highlevel',
    component:Loadable(() => import('./routes/Highlevel')),
  },
  {
    name: 'Common',
    path: '/common',
    component:Loadable(() => import('./routes/Common')),
  },
  {
    name: 'Portal',
    path: '/portal',
    component:Loadable(() => import('./components/Common/Portal')),
  }
]
export default routeDate;
// export default ()=>{
//   return routeDate.map((item, index)=>{
//     return <Route path={item.path} component={Loadable(()=>import(`./components/${item.component}`))}/>
//   })
// }