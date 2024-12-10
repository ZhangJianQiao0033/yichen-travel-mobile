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
    {
      path: "/city",
      component: ()=> import("@/views/City/City.vue"),
      meta: {
        hideTabbar: true
      }
    },
    {
      path: "/search",
      component: () => import("@/views/Search/Search.vue"),
      meta: {
        hideTabbar: true
      }
    },
    {
      path: "/houseDetail/:houseId",
      component: () => import("@/views/house-detail/house-detail.vue"),
      meta: {
        hideTabbar: true
      }
    }
  ]
})

export default router