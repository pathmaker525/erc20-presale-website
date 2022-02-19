import { NavLink } from "react-router-dom"

import { AppRoutes } from "configs/UI"

import "./style.scss"

const ComingSoon = () => (
  <div className="coming-soon">
    <div className="coming-soon-wrapper container flex-column">
      <div className="coming-soon-main flex">
        <h2>Coming Soon</h2>
        <span></span>
        <p>Stay tuned!</p>
      </div>
      <NavLink to={AppRoutes.HOME}>To Homepage</NavLink>
    </div>
  </div>
)

export default ComingSoon
