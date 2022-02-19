import { NavLink } from "react-router-dom"
import { Logo } from "resources/Images"
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoDiscord,
} from "react-icons/io5"

import { keysIn } from "lodash"

import { AppRoutes } from "configs/UI"

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
      <a href="">
        <IoLogoFacebook />
      </a>
      <a href="">
        <IoLogoLinkedin />
      </a>
      <a href="">
        <IoLogoTwitter />
      </a>
      <a href="">
        <IoLogoDiscord />
      </a>
    </div>
  </div>
)

export default SideBar
