import {createRouter, createWebHashHistory} from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: ()=> import("@/views/Home/Home.vue")
    },
    {
      path: "/favorite",
      component: ()=> import("@/views/Favorite/Favorite.vue")
    },
    {
      path: "/message",
      component: ()=> import("@/views/Message/Message.vue")
    },
    {
      path: "/order",
      component: ()=> import("@/views/Order/Order.vue")
    },
  ]
})

export default router