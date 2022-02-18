import { useRoutes } from "react-router-dom"

import Navbar from "components/Navbar"
import Footer from "components/Footer"

import Dashboard from "./Dashboard"

import UseScrollToTop from "hooks/useScrollToTop"

import { AppRoutes } from "configs/UI"

const AppRouter = () => {
  let routes = useRoutes([
    { path: AppRoutes.DASHBOARD, element: <Dashboard /> },
  ])

  return (
    <>
      <Navbar />
      <UseScrollToTop>{routes}</UseScrollToTop>
      <Footer />
    </>
  )
}

export default AppRouter
