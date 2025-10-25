import { createBrowserRouter } from "react-router";

import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import {ErrorPage} from "@/pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',                                          // 这个路由以什么路径为根路径
    element: <Layout/>,                                 // 布局组件（父级）
    errorElement: <ErrorPage/>,                         // 错误时渲染内容
    children: [
      { index: true, element: <HomePage/> },            // index true表示这是一个默认子路由，<Outlet/>会默认渲染这个组件
      { path: 'games/:slug', element: <GameDetailPage/> } // 这是一个动态路由，:id 表示一个动态参数，GameDetailPage可以用useParams()获得对应的id来决定当前url渲染内容.
    ]
  },
]);

export default router;