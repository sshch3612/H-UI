import Loadable from './components/Loadable/Loadable';
import Icon from './components/Icon'

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
    name:'Form',
    path:'/form',
    // exact:true
    component: Loadable(() => import("./routes/Form"))
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
    name: 'Tex',
    path: '/textarea',
    component:Loadable(() => import('./components/Form/Input/Textarea_test')),
  },
  {
    name: 'List',
    path: '/list',
    component:Loadable(() => import('./components/Layout/List')),
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
    name: 'Navbar',
    path: '/navbar',
    component:Loadable(() => import('./components/View/Navbar')),
  }
]
export default routeDate;
// export default ()=>{
//   return routeDate.map((item, index)=>{
//     return <Route path={item.path} component={Loadable(()=>import(`./components/${item.component}`))}/>
//   })
// }