import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/gallery',
    name: 'gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Gallery,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
