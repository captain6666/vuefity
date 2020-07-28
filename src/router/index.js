import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import DataView from '../views/DataView.vue'
import HostView from '../views/HostView.vue'
import AppSheets from '../views/AppSheets.vue'

Vue.use(VueRouter)

    const routes = [
        {
         path: '/login',
         name: 'login',
         component: LoginPage,
        },
        {
         path: '/home',
         name: 'Home',
         component: Home,
         children: [
            {
            path: 'appsheets',
            name: 'AppSheets',
            component: AppSheets
           },{
            path: 'dataview',
            name: 'DataView',
            component: DataView
           },{
            path: 'hostview',
            name: 'Host',
            component: HostView
           },]
      },
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})


// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//
//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }
//   next();
// })


export default router
