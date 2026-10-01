import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '月欣科技有限公司｜電子儀錶專業製造商',
      description:
        '月欣科技有限公司提供優質的電子儀錶產品，包括類比表、計數器、速度表、張力控制器、米輪編碼器、液位感測器等專業工業量測與自動化解決方案。'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: '關於月欣｜月欣科技有限公司',
      description:
        '月欣科技有限公司創立於民國89年，專精電子儀錶製造，擁有優秀的經營團隊，追求企業永續經營及成長。'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductView.vue'),
    meta: {
      title: '產品介紹｜月欣科技有限公司',
      description:
        '月欣科技提供各種專業電子儀錶產品，包括計數器、長度表、電壓表、電流錶、線速表、轉速表等工業量測設備。'
    },
    children: [
      {
        path: ':type',
        name: 'product-list',
        component: () => import('../components/ProductList.vue'),
        meta: {
          title: '產品列表｜月欣科技有限公司',
          description:
            '月欣科技提供各種專業電子儀錶產品，包括計數器、長度表、電壓表、電流錶、線速表、轉速表等工業量測設備。'
        }
      },
      {
        path: ':type/:productId',
        name: 'product-detail',
        component: () => import('../components/ProductInfoItem.vue'),
        meta: { title: '產品詳情' }
      },
      { path: '', name: 'product-default', redirect: '/products/AI' }
    ]
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: '聯絡我們｜月欣科技有限公司',
      description: '月欣科技有限公司位於新北市板橋區，歡迎來電洽詢。電話：886-2-89541027。'
    }
  },
  {
    path: '/files',
    name: 'files',
    component: () => import('../views/FileDownloadView.vue'),
    meta: {
      title: '檔案下載｜月欣科技有限公司',
      description: '月欣科技有限公司提供相關檔案下載。'
    }
  },
  {
    // will match everything and put it under `$route.params.pathMatch`
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
