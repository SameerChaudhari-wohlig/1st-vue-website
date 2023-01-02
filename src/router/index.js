import About from '../components/About.vue'
import HomePageVue from '../components/HomePage.vue'
import Contact from '../components/Contact.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePageVue,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component:Contact ,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
