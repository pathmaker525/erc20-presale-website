import { NavLink } from "react-router-dom"
import { AppRoutes } from "configs/UI"

import "./style.scss"

const Navbar = () => (
  <div className="navbar flex">
    <div className="navbar-wrapper container-big flex">
      <span>TUMA</span>
      <div className="navbar-anchors flex">
        <span className="flex-column navbar-anchors-active">
          <NavLink to={AppRoutes.DASHBOARD}>Home</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.DASHBOARD}>NFT</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.DASHBOARD}>Features</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.DASHBOARD}>Pages</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.DASHBOARD}>Contacts</NavLink>
        </span>
      </div>
    </div>
  </div>
)

export default Navbar
