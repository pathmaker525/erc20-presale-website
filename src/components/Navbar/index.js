import { NavLink } from "react-router-dom"
import { IoEllipsisVertical } from "react-icons/io5"

import { Logo } from "resources/Images"
import { AppRoutes } from "configs/UI"

import "./style.scss"

const Navbar = ({ onClickSideBar }) => (
  <div className="navbar flex">
    <div className="navbar-wrapper container-big flex">
      <div className="navbar-logo flex">
        <img src={Logo} alt="logo" loading="lazy" />
        <span>TUMA</span>
      </div>
      <div className="navbar-anchors flex">
        <span className="flex-column navbar-anchors-active">
          <NavLink to={AppRoutes.DASHBOARD}>Home</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.COMING_SOON}>Presale</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.NFT}>NFT</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.WALLET}>Wallet</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.DOCS}>Docs</NavLink>
        </span>
        <span className="flex-column">
          <NavLink to={AppRoutes.FAQS}>FAQs</NavLink>
        </span>
      </div>
      <button className="flex" onClick={onClickSideBar}>
        <IoEllipsisVertical />
      </button>
    </div>
  </div>
)

export default Navbar
