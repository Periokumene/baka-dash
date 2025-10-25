import NavBar from "@/components/NavBar.tsx";
import {Outlet} from "react-router-dom"

function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      {/* Outlet是路由组件，会根据RouterProvider提供的router 详见 ./routes.tsx 决定渲染的内容*/}
    </>
  );
}

export default Layout;