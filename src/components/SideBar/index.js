import { NavLink, Outlet } from "react-router-dom"
import { keysIn } from "lodash"

import { Logo } from "resources/Images"

import { AppRoutes, SocialItemContents } from "configs/UI"

import "./style.scss"

const SideBar = ({ pathname, show, onClickSideBar }) => (
  <div
    className={`sidebar${show ? " show" : ""} flex-column`}
    onClick={onClickSideBar}
  >
    <img src={Logo} alt="logo" loading="lazy" />
    <h3>TUMA Inc</h3>
    <div className="sidebar-anchors flex-column">
      {keysIn(AppRoutes).map((data, index) => {
        if (data !== "NOT_FOUND" && data !== "COMING_SOON") {
          return (
            <span
              key={index}
              className={`flex${
                AppRoutes[data] === pathname ? " sidebar-anchors-active" : ""
              }`}
            >
              <NavLink to={AppRoutes[data]}>{data.toLowerCase()}</NavLink>
            </span>
          )
        }
      })}
    </div>
    <div className="sidebar-links flex">
      {SocialItemContents.map((data, index) => (
        <a key={index} href={data.link}>
          {data.icon}
        </a>
      ))}
    </div>
    <Outlet />
  </div>
)

export default SideBar
