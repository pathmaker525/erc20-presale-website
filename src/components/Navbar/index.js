import { NavLink, Outlet } from "react-router-dom"
import { IoEllipsisVertical } from "react-icons/io5"

import { keysIn } from "lodash"

import { Logo } from "resources/Images"
import { AppRoutes } from "configs/UI"

import "./style.scss"

const Navbar = ({ pathname, onClickSideBar }) => (
  <div className="navbar flex">
    <div className="navbar-wrapper container-big flex">
      <div className="navbar-logo flex">
        <img src={Logo} alt="logo" loading="lazy" />
        <span>TUMA</span>
      </div>
      <div className="navbar-anchors flex">
        {keysIn(AppRoutes).map((data, index) => {
          if (data !== "NOT_FOUND" && data !== "COMING_SOON") {
            return (
              <span
                key={index}
                className={`flex-column${
                  AppRoutes[data] === pathname ? " navbar-anchors-active" : ""
                }`}
              >
                <NavLink to={AppRoutes[data]}>{data.toLowerCase()}</NavLink>
              </span>
            )
          }
        })}
      </div>
      <button className="flex" onClick={onClickSideBar}>
        <IoEllipsisVertical />
      </button>
    </div>
    <Outlet />
  </div>
)

export default Navbar
