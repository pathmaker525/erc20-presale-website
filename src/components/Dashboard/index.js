import { NavLink } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"
import { keysIn } from "lodash"
import { HiOutlineAtSymbol } from "react-icons/hi"

import Hero from "./Hero"
import PartnerItem from "./PartnerItem"
import FounderItem from "./FounderItem"
import AboutItem from "./AboutItem"

import {
  AboutItemContents,
  TeamItemContents,
  PartnerItemContents,
  AppRoutes,
  RoadmapItemContents,
  TokenomicsItemContents,
} from "configs/UI"

import { IntroduceVideo } from "resources/Images"

import "./style.scss"

const DashboardComponent = ({
  fundRaised,
  icoTokenSupply,
  bnbRaised,
  tokenSold,
  icoPercent,
}) => (
  <div className="dashboard flex">
    <FadeIn className="dashboard-wrapper flex-column">
      <div className="dashboard-carousel">
        <Hero />
      </div>

      <div className="dashboard-ico container">
        <h2 className="flex">ICO Progress</h2>
        <div className="dashboard-ico-status flex">
          <div className="dashboard-ico-status-wrapper grid">
            <div className="dashboard-ico-status-item">
              <span>BNB Raised</span>
              <h3>{Number(bnbRaised).toFixed(3)} BNB</h3>
            </div>
            <div className="dashboard-ico-status-item">
              <span>Funds raised</span>
              <h3>$ {fundRaised}</h3>
            </div>
            <div className="dashboard-ico-status-item">
              <span>ICO Token Supply</span>
              <h3>{icoTokenSupply} TUMA</h3>
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
              className="dashboard-ico-progress-bar flex"
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
              The blockchain is a solution for the financial sector in Africa,
              more precisely in money transfers. Especially with its system of
              lower costs, its speed of sending.
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
        <div className="dashboard-roadmap-wrapper flex-column">
          {keysIn(RoadmapItemContents).map((data, index) => (
            <div key={index} className="dashboard-roadmap-year grid">
              <div className="dashboard-roadmap-year-title flex">
                <h3 className="">{data}</h3>
              </div>
              {RoadmapItemContents[data].map((data, index) => (
                <div
                  key={index}
                  className="dashboard-roadmap-quarter rounded shadowed flex"
                >
                  <h4 className="flex">Q{index + 1}</h4>
                  <div className="dashboard-roadmap-quarter-wrapper flex">
                    <div className="grid">
                      {data.map((data, index) => (
                        <div
                          key={index}
                          className={`dashboard-roadmap-steps${
                            data.achieved ? " step-achieved " : " "
                          }flex`}
                        >
                          <HiOutlineAtSymbol />
                          <span className="flex">{data.content}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-documentation container">
        <h2 className="flex">Documentation</h2>
        <div className="dashboard-documentation-wrapper">
          <h3>Download whitepaper</h3>
          <a href="/whitepaper.pdf" className="rounded shadowed" download>
            download
          </a>
        </div>
      </div>

      <div className="dashboard-tokenomics flex-column">
        <h2>Tokenomics</h2>
        <div className="dashboard-tokenomics-wrapper container flex">
          <div className="dashboard-tokenomics-wrapper-main grid">
            {TokenomicsItemContents.map((data, index) => (
              <div
                key={index}
                className="dashboard-tokenomics-item flex-column"
              >
                <div className="dashboard-tokenomics-item-progress flex shadowed">
                  <div
                    className="dashboard-tokenomics-item-progress-bar rounded"
                    style={{ height: `${data.percentage}%` }}
                  ></div>
                  <span>{data.title}</span>
                </div>
                <div className="dashboard-tokenomics-item-percentage flex">
                  {data.percentage} %
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-team container">
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
      </div>

      {/* <div className="dashboard-partners container">
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
      </div> */}

      <div className="dashboard-nfts flex">
        <div className="dashboard-nfts-wrapper container flex">
          <div className="dashboard-nfts-contents">
            <h2 className="flex">Buy NFTs that Changes Lives</h2>
            <h3>Get privileges to support our cause.</h3>
            <h3>Sales will be limited NFT purely African</h3>
          </div>
          <NavLink className="rounded shadowed" to={AppRoutes.COMING_SOON}>
            Coming Soon
          </NavLink>
        </div>
      </div>
    </FadeIn>
  </div>
)

export default DashboardComponent
