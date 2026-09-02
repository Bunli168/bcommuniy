import { createRouter, createWebHistory } from 'vue-router'
import CommunityHomeView from '../views/community/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'community',
      component: CommunityHomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/community/ProfileView.vue'),
    },
    {
      path: '/post/:id',
      name: 'post-detail',
      component: () => import('../views/community/PostDetailView.vue'),
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/chart/MessagesView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-overview',
          component: () => import('../views/admin/OverviewView.vue')
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('../views/admin/UsersView.vue')
        }
      ]
    }
  ],
})

export default router
