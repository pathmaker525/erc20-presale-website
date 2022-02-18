import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoDiscord,
} from "react-icons/io5"

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
          <p>
            Looking cautiously round, to ascertain that they were not overheard,
            the two hags cowered nearer to the fire, and chuckled heartily
          </p>
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
      </div>

      <span>© 2022 TUMA Inc - All rights reserved.</span>
    </div>
  </div>
)

export default Footer
