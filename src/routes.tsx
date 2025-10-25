import { createBrowserRouter } from "react-router";

import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <HomePage/> },            // index true表示这是一个默认子路由，<Outlet/>会默认渲染这个组件
      { path: 'games/:id', element: <GameDetailPage/> } // 这是一个动态路由，:id 表示一个动态参数，GameDetailPage可以用useParams()获得对应的id来决定当前url渲染内容.
    ]
  },
]);

export default router;