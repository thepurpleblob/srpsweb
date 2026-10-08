import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import GetInvolved from '@/views/GetInvolved.vue';
import AboutSociety from '@/views/AboutSociety.vue';
import RecruitmentPage from '@/views/RecruitmentPage.vue';
import ReportsAndDocuments from '@/views/ReportsAndDocuments.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/getinvolved',
      name: 'getinvolved',
      component: GetInvolved
    },
    {
      path: '/about',
      name: 'about',
      component: AboutSociety
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: RecruitmentPage
    },
    {
      path: '/reports-and-documents',
      name: 'reports-and-documents',
      component: ReportsAndDocuments
    },
  ],
})

export default router
