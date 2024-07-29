import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeVue.vue";
import LandingVue from "../views/LandingVue.vue";
import ConnectionVue from "../views/ConnectionVue.vue";
import InscriptionVue from "../views/InscriptionVue.vue";
import VisionBordVue from "../views/VisionBoardVue.vue";
import CalendarVue from "../views/CalendarVue.vue";
import DashbordVue from "../views/DashbordVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingVue,
    },
    {
      path: "/connection",
      name: "connection",
      component: ConnectionVue,
    },
    {
      path: "/inscription",
      name: "inscription",
      component: InscriptionVue,
    },

    // the app paths right below
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/visionbord",
      name: "visionbord",
      component: VisionBordVue,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: CalendarVue,
    },
    {
      path: "/dashbord",
      name: "dashbord",
      component: DashbordVue,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
