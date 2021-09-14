export const list =
  {
    path: '/list',
    component: () => import('@/views/List.vue'),
    redirect: '',
    children: [
      {
        path: '',
        component: () => import('@/views/page2.vue')
      }
    ]
  }
