import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home/index'
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    name: 'carousel',
    meta: { title: '容猫管理平台', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/welcome')
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    name: 'user',
    meta: { title: '用户管理', icon: 'el-icon-s-edit' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/user/list'),
        meta: { title: '用户管理', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/newuser',
    component: Layout,
    redirect: '/newuser/index',
    name: 'newuser',
    meta: { title: '拉新用户', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/newuser/list'),
        meta: { title: '拉新用户', icon: 'el-icon-s-custom' }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/index',
    name: 'product',
    meta: { title: '商品系统', icon: 'el-icon-s-goods' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/product/list'),
        meta: { title: '商品列表', icon: 'el-icon-s-goods' }
      },
      {
        path: 'update',
        name: 'update',
        component: () => import('@/views/product/update'),
        meta: { title: '商品编辑', icon: 'el-icon-edit' }
      }
    ]
  },
  {
    path: '/credits',
    component: Layout,
    redirect: '/credits/index',
    name: 'credits',
    meta: { title: '积分系统', icon: 'el-icon-coin' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/credits/list'),
        meta: { title: '积分流水表', icon: 'el-icon-coin' }
      },
      {
        path: 'withdraw',
        name: 'withdraw',
        component: () => import('@/views/credits/withdraw'),
        meta: { title: '提现申请处理', icon: 'el-icon-money' }
      }
    ]
  },
  {
    path: '/operation',
    component: Layout,
    redirect: '/operation/index',
    name: 'operation',
    meta: { title: '运营活动管理', icon: 'el-icon-sell' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/operation/list'),
        meta: { title: '运营活动管理', icon: 'el-icon-sell' }
      }
    ]
  },
  {
    path: '/orders',
    component: Layout,
    redirect: '/orders/index',
    name: 'orders',
    meta: { title: '订单系统', icon: 'el-icon-s-order' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/orders/list'),
        meta: { title: '订单系统', icon: 'el-icon-s-order' }
      },
      {
        path: 'expense',
        name: 'expense',
        component: () => import('@/views/orders/expense'),
        meta: { title: '查看消费记录', icon: 'el-icon-sold-out' }
      }
    ]
  },
  {
    path: '/verification',
    component: Layout,
    redirect: '/verification/index',
    name: 'verification',
    meta: { title: '核销记录', icon: 'el-icon-folder-checked' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/verification/list'),
        meta: { title: '核销记录', icon: 'el-icon-folder-checked' }
      }
    ]
  },
  {
    path: '/groupbuy',
    component: Layout,
    redirect: '/groupbuy/index',
    name: 'groupbuy',
    meta: { title: '拼团管理', icon: 'el-icon-goods' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/groupbuy/list'),
        meta: { title: '拼团一览表', icon: 'el-icon-goods' }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/groupbuy/edit'),
        meta: { title: '新建/编辑拼团', icon: 'el-icon-edit' }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/groupbuy/orders'),
        meta: { title: '拼团订单', icon: 'el-icon-s-order' }
      },
      {
        path: 'records',
        name: 'records',
        component: () => import('@/views/groupbuy/records'),
        meta: { title: '消费记录', icon: 'el-icon-goods' }
      },
      {
        path: 'selbuyer',
        name: 'selbuyer',
        component: () => import('@/views/groupbuy/selbuyer'),
        meta: { title: '选定购买人', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/authority',
    component: Layout,
    redirect: '/authority/index',
    name: 'authority',
    meta: { title: '权限管理', icon: 'el-icon-unlock' },
    children: [
      {
        path: 'accounts',
        name: 'accounts',
        component: () => import('@/views/authority/accounts'),
        meta: { title: '账号管理', icon: 'el-icon-unlock' }
      },
      {
        path: 'platformauth',
        name: 'platformauth',
        component: () => import('@/views/authority/platformauth'),
        meta: { title: '平台权限管理', icon: 'el-icon-lock' }
      }
    ]
  },
  {
    path: '/coupon',
    component: Layout,
    redirect: '/coupon/index',
    name: 'coupon',
    meta: { title: '优惠券管理', icon: 'el-icon-s-ticket' },
    children: [
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/coupon/list'),
        meta: { title: '优惠券管理', icon: 'el-icon-s-ticket' }
      },
      {
        path: 'platformauth',
        name: 'platformauth',
        component: () => import('@/views/coupon/records'),
        meta: { title: '使用记录', icon: 'el-icon-notebook-1' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
