import { Outlet } from "react-router-dom"
import Menu from "../Menu/Menu";

import './Layout.css'

const Layout = ({children}) => {
  return <div className="layout flex">
    <Menu />
    <main className="flex w-full main">
      <Outlet />
      {children}
    </main>
  </div>
}

export default Layout
