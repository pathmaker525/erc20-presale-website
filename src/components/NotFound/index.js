import { NavLink } from "react-router-dom"

import { AppRoutes } from "configs/UI"

import "./style.scss"

const NotFound = () => (
  <div className="not-found">
    <div className="not-found-wrapper container flex-column">
      <div className="not-found-main flex">
        <h2>404</h2>
        <span></span>
        <p>Not Found</p>
      </div>
      <NavLink to={AppRoutes.HOME}>To Homepage</NavLink>
    </div>
  </div>
)

export default NotFound
