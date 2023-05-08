import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { requireAuth } from './auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      requiresAuth: false, // set to false for public pages
    },
  },
  {
    path: '/dashboard',
    name: 'home',
    component: () => import('../views/Admin/dashboard.vue'),
    meta: {
      requiresAuth: true, // set to true for private pages
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/create',
    name: 'about',
    component: () => import('../views/Admin/create.vue'),
    meta: {
      requiresAuth: true,
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/data',
    name: 'form',
    component: () => import('../views/Admin/data.vue'),
    meta: {
      requiresAuth: true,
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/datauser',
    name: 'formku',
    component: () => import('../views/Users/data.vue'),
    meta: {
      requiresAuth: true,
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/Admin/edit.vue'),
    meta: {
      requiresAuth: true,
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/:pathMatch(.*)*', // route wildcard for non-existent routes
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  
  if (requiresAuth && !isAuthenticated) {
    next({ path: '/' }); // redirect to login if not authenticated
  } else if (isAuthenticated && to.path === '/') {
    next({ path: '/dashboard' }); // redirect to dashboard if authenticated and accessing login page
  } else {
    next(); // proceed to next route
  }
});

export default router;
