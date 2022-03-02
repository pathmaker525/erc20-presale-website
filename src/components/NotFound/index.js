import { NavLink } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"

import { AppRoutes } from "configs/UI"

import "./style.scss"

const NotFound = () => (
  <div className="not-found flex">
    <FadeIn className="not-found-wrapper container flex-column">
      <div className="not-found-main flex">
        <h2>404</h2>
        <span></span>
        <p>Not Found</p>
      </div>
      <NavLink to={AppRoutes.HOME}>To Homepage</NavLink>
    </FadeIn>
  </div>
)

export default NotFound
