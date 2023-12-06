import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      hideInBreadcrumb: true,
      path: '/demo',
      component: '@/layouts/index',
      name: 'demo',
      routes: [
        { path: '/demo/demo1', name: 'demo1', component: './Table' },
        { path: '/demo/demo2', name: 'demo2', component: './Table' },
      ],
    },
  ],
  npmClient: 'pnpm',
});
