import { useRoutes } from "react-router-dom"

import AppRoutes from "configs/UI"

const AppRouter = () => {
  let routes = useRoutes([
    { path: AppRoutes.DASHBOARD, element: <></> },
    { path: AppRoutes.DASHBOARD, element: <></> },
    { path: AppRoutes.DASHBOARD, element: <></> },
  ])

  return <div>{routes}</div>
}

export default AppRouter
