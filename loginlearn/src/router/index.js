import Vue from 'vue'
import Router from 'vue-router'
import TheLogin from '../components/TheLogin'
import Main from '../components/Main'
import Tab1 from '../components/Tab1'
import Tab2 from '../components/Tab2'
import SaveMoney from '../components/SaveMoney'
import SelectMoney from '../components/SelectMoney'
import DrawMoney from '../components/DrawMoney'
import History from '../components/History'
import Quit from '../components/Quit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheLogin',
      component: TheLogin
    },
    {
      path: '/components/Main',
      name: 'Main',
      component: Main,
      children: [
        {path: '/components/Tab1', name: 'Tab1', component: Tab1},
        {path: '/components/Tab2',
          name: 'Tab2',
          component: Tab2,
          children: [
            {path: '/components/SaveMoney', name: 'SaveMoney', component: SaveMoney},
            {path: '/components/SelectMoney', name: 'SelectMoney', component: SelectMoney},
            {path: '/components/DrawMoney', name: 'DrawMoney', component: DrawMoney},
            {path: '/components/History', name: 'History', component: History},
            {path: '/components/Quit', name: 'Quit', component: Quit}
          ]}
      ]
    }
  ]
})
