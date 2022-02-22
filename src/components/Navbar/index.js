import { NavLink, Outlet } from "react-router-dom"
import { useWeb3React } from "@web3-react/core"
import { IoEllipsisVertical } from "react-icons/io5"
import { keysIn } from "lodash"

import WalletButton from "components/WalletButton"

import { Logo } from "resources/Images"
import { AppRoutes } from "configs/UI"

import "./style.scss"

const Navbar = ({ pathname, onClickSideBar }) => {
  const { account } = useWeb3React()

  return (
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
        <div className="navbar-utility flex">
          <WalletButton className="navbar-utility-wallet flex rounded">
            {account === undefined || account === ""
              ? "Connect"
              : `${account.slice(0, 4)}...${account.slice(-4)}`}
          </WalletButton>
          <button
            className="navbar-utility-expand flex"
            onClick={onClickSideBar}
          >
            <IoEllipsisVertical />
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
