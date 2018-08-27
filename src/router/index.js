import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/transitions' },
    {
      path: '/transitions',
      name: 'transitions',
      redirect: '/transitions/index',
      component: () => import('components/Transitions'),
      children: [
        {
          path: 'index',
          name: 'transitions-index',
          component: () => import('components/Transitions/TransitionsIndex')
        }

      ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('components/Demo/Demo')
    },
    {
      path: '/upload_test',
      name: 'upload-test',
      component: () => import('components/UploadTest/UploadTest')
    },
    { 
      path: '/part_A',
      name: 'part-a',
      component: () => import('components/PartA/PartA'),
      meta: { // 设置 keepAlive 给外部组件用, 可以保持组件内的变量, 记录 scroll 的值
        keepAlive: true
      }
    },
    { 
      path: '/part_B',
      name: 'part-b', 
      component: () => import('components/PartB/PartB'),
    },
    {
      path: '/pie_chart',
      name: 'pie-chart',
      component: () => import('components/PieChart/PieChart')
    },
    {
      path: '/gauge_chart',
      name: 'gauge-chart',
      component: () => import('components/GaugeChart/GaugeChart')
    }
  ]
})
