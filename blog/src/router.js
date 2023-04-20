/*라우터와 관련된 코드 적는 곳*/ 
import { createWebHistory, createRouter } from "vue-router";
import ListPage from "./components/ListPage.vue";
import HomePage from "./components/HomePage.vue";
import DetailPage from "./components/DetailPage.vue";
import AuthorPage from "./components/AuthorPage.vue";
import CommentPage from "./components/CommentPage.vue";
// createRouter는 라우터생성 도와주는 함수, vue-router는 라이브러리 이름
const routes = [
  {
    //"/경로"로 접속하면 이 컴포넌트를 보여줘! 단, 컴포넌트: 하기전에 import 해야 함
    path: "/",
    component: HomePage,
  },
  {
    path: "/list",
    component: ListPage,
  },
  {
    path: "/detail/:id",
    component: DetailPage,
    children: [
      {
        path: "author",
        component: AuthorPage,
      },
      {
        path: "comment",
        component: CommentPage,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;