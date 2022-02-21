import { NavLink } from "react-router-dom"

import Hero from "./Hero"
import PartnerItem from "./PartnerItem"
import FounderItem from "./FounderItem"
import HireItem from "./HireItem"
import AboutItem from "./AboutItem"

import {
  AboutItemContents,
  TeamItemContents,
  HireItemContents,
  PartnerItemContents,
  AppRoutes,
} from "configs/UI"

import { IntroduceVideo } from "resources/Images"

import "./style.scss"

const DashboardComponent = ({
  fundRaised,
  tokenPrice,
  bnbRaised,
  tokenSold,
  icoPercent,
}) => (
  <div className="dashboard flex">
    <div className="dashboard-wrapper flex-column">
      <div className="dashboard-carousel">
        <Hero />
      </div>

      <div className="dashboard-ico container">
        <h2 className="flex">ICO Progress</h2>
        <div className="dashboard-ico-status flex">
          <div className="dashboard-ico-status-wrapper grid">
            <div className="dashboard-ico-status-item">
              <span>Funds raised</span>
              <h3>$ {fundRaised}</h3>
            </div>
            <div className="dashboard-ico-status-item">
              <span>Worth of tokens</span>
              <h3>$ {tokenPrice.toFixed(8)}</h3>
            </div>
            <div className="dashboard-ico-status-item">
              <span>BNB Raised</span>
              <h3>{Number(bnbRaised).toFixed(2)} BNB</h3>
            </div>
            <div className="dashboard-ico-status-item">
              <span>Tokens distributed</span>
              <h3>{tokenSold}</h3>
            </div>
          </div>
          <NavLink className="rounded shadowed" to={AppRoutes.PRESALE}>
            buy tokens
          </NavLink>
        </div>
        <div className="dashboard-ico-progress">
          <div className="dashboard-ico-progress-wrapper shadowed">
            <div
              className="dashboard-ico-progress-bar"
              style={{ width: `${icoPercent}%` }}
            ></div>
          </div>
          <div className="dashboard-ico-progress-status grid">
            <span className="flex">Softcap</span>
            <span className="flex">Hardcap</span>
          </div>
        </div>
      </div>

      <div className="dashboard-presentation container">
        <h2 className="flex">Video presentation</h2>
        <div className="dashboard-presentation-introduce grid">
          <div className="dashboard-presentation-introduce-video rounded flex shadowed">
            <img src={IntroduceVideo} alt="introduce video" loading="lazy" />
          </div>
          <div className="dashboard-presentation-introduce-detail">
            <h3>#Blockchain technology for Africa</h3>
            <p>
              In a world where one company controls 77% of all researches,
              influencing trillions of dollars in spending, shaping perceptions
              and effectively acting as the primary gatekeeper to the internet
            </p>
          </div>
        </div>

        <div className="dashboard-presentation-about grid rounded shadowed">
          {AboutItemContents.map((data, index) => (
            <AboutItem
              key={index}
              index={index + 1}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </div>

      <div className="dashboard-roadmap container">
        <h2 className="flex">Implementation Roadmap</h2>
      </div>

      <div className="dashboard-documentation container">
        <h2 className="flex">Documentation</h2>
        <div className="dashboard-documentation-wrapper">
          <h3>Download whitepaper</h3>
          <button className="rounded shadowed">download</button>
        </div>
      </div>

      <div className="dashboard-team container grid">
        <div className="dashboard-team-founders">
          <h2 className="flex">Awesome Team</h2>
          <div className="dashboard-team-founders-wrapper grid">
            {TeamItemContents.map((data, index) => (
              <FounderItem
                key={index}
                image={data.image}
                name={data.name}
                role={data.role}
                social={data.social}
              />
            ))}
          </div>
        </div>
        <div className="dashboard-team-hire">
          <h2 className="flex">Vacancies</h2>
          <div className="dashboard-team-hire-wrapper">
            {HireItemContents.map((data, index) => (
              <HireItem key={index} location={data.location} role={data.role} />
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-partners container">
        <h2 className="flex">Making an Impact with the Right Partners</h2>
        <div className="dashboard-partners-wrapper grid">
          {PartnerItemContents.map((data, index) => (
            <PartnerItem
              key={index}
              image={data.image}
              name={data.name}
              location={data.location}
            />
          ))}
        </div>
      </div>

      <div className="dashboard-nfts flex">
        <div className="dashboard-nfts-wrapper container">
          <h2 className="flex">Buy NFTs that Changes Lives</h2>
          <h3>Get privileges to support our cause.</h3>
          <h3>Sales will be limited NFT purely African</h3>
        </div>
      </div>
    </div>
  </div>
)

export default DashboardComponent
