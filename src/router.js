import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
    },
    {
      path: '/teams/:teamId',
      name: 'team-profile',
      component: () => import('@/components/Team.vue')
    },
  ],
});

export default router;
