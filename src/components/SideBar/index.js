import { NavLink } from "react-router-dom"
import { Logo } from "resources/Images"
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoDiscord,
} from "react-icons/io5"

import { AppRoutes } from "configs/UI"

import "./style.scss"

const SideBar = ({ show, onClickSideBar }) => (
  <div
    className={`sidebar${show ? " show" : ""} flex-column`}
    onClick={onClickSideBar}
  >
    <img src={Logo} alt="logo" loading="lazy" />
    <h3>TUMA Inc</h3>
    <div className="sidebar-anchors flex-column">
      <span className="flex sidebar-anchors-active">
        <NavLink to={AppRoutes.DASHBOARD}>Home</NavLink>
      </span>
      <span className="flex">
        <NavLink to={AppRoutes.DASHBOARD}>NFT</NavLink>
      </span>
      <span className="flex">
        <NavLink to={AppRoutes.DASHBOARD}>Features</NavLink>
      </span>
      <span className="flex">
        <NavLink to={AppRoutes.DASHBOARD}>Pages</NavLink>
      </span>
      <span className="flex">
        <NavLink to={AppRoutes.DASHBOARD}>Contacts</NavLink>
      </span>
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
