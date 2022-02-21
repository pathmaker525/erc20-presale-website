import { SocialItemContents } from "configs/UI"

import "./style.scss"

const Footer = () => (
  <div className="footer flex">
    <div className="footer-wrapper container flex-column">
      <div className="footer-community flex rounded shadowed">
        <div className="flex-column">
          <span>Join TUMA Community</span>
          <p>Follow us in all major social networks around the world</p>
        </div>
        <button className="rounded shadowed">create account</button>
      </div>

      <div className="footer-main grid">
        <div className="footer-main-about">
          <span>About TUMA</span>
          <p></p>
        </div>

        <div className="footer-main-links">
          <span>About TUMA</span>
          <div className="flex-column">
            <a href="">Why a TUMA ICO?</a>
            <a href="">Whitepaper</a>
            <a href="">Roadmap</a>
            <a href="">Architecture</a>
            <a href="">About</a>
          </div>
        </div>

        <div className="footer-main-follow">
          <span>Follow Us</span>
          <p>
            Looking cautiously round, to ascertain that they were not overheard
          </p>
          <div className="flex">
            {SocialItemContents.map((data, index) => (
              <a key={index} href={data.link}>
                {data.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <span>© 2022 TUMA Inc - All rights reserved.</span>
    </div>
  </div>
)

export default Footer
