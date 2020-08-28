import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    name:'layout',
    component:layout,
    children:[
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path:'Pagenation_table',
        name:'Pagenation_table',
        component: () => import('../components/Pagenation_table/Pagenation_table.vue')
      },
      {
        path: 'published',
        name: 'published',
    
        component: () => import('../components/published/published.vue')
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('../components/statistics/statistics.vue')
      },
      {
        path: 'publishArtical',
        name: 'publishArtical',
        component: () => import('../components/publishArtical/publishArtical.vue')
      },
      {
        path: 'tabPage',
        name: 'tabPage',
        component: () => import('../components/tabPage/tabPage.vue')
      },
      {
        path: 'exportExcell',
        name: 'exportExcell',
        component: () => import('../components/exportExcell/exportExcell.vue')
      },
      {
        path: 'pictureUpload',
        name: 'pictureUpload',
        component: () => import('../components/pictureUpload/pictureUpload.vue')
      },
      {
        path: 'exitPage',
        name: 'exitPage',
        component: () => import('../components/exitPage/exitPage.vue')
      },
      {
        path:'/detail',
        name:'detail',
        component: () => import('../components/detail/detail.vue')
    
      },
      {
        path:'/edit',
        name:'edit',
        component: () => import('../components/edit/edit.vue')
    
      }

      
      
    ]
  },
  

  
  {
    path: '/login',
    name: 'login',

    component: () => import('../components/login/login.vue')
  },
  {
    path: '/registe',
    name: 'registe',

    component: () => import('../components/registe/registe.vue')
  }
  // {
  //   path: '/',
  //   name: '',

  //   component: () => import(/* webpackChunkName: "about" */ '../views/one.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // let user = sessionStorage.getItem('user')
  
  let whitePath = ['/login', '/registe']
 

  // document.title = to.meta.title
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (whitePath.includes(to.path)) {
    next()
  } else {
    user ? next() : next('/login')
  }
})


  // if (one) {


  //   if (to.path === '/login' || to.path === 'registe') {
  //     if (to.path === '/login') {
  //       next()
  //     } else {
  //       next()
  //     }
  //   } else {
  //     next()
  //   }


  // } else {
  //   if (to.path === '/login' || to.path === 'registe') {
  //     if (to.path === '/login') {
  //       next()
  //     } else {
  //       next()
  //     }
  //   } else {
  //     next('/')
  //   }
  // }







export default router