import { createRouter, createWebHistory } from 'vue-router'
import TaskReport from '@/components/task/task-report/task-report.component.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Task Report',
      component: TaskReport
    }   
  ]
})

export default router
