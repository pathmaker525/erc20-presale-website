import { CarouselBackground } from "resources/Videos"

import "./style.scss"

const Hero = () => (
  <div className="hero flex">
    <div className="hero-background">
      <video autoPlay loop muted>
        <source src={CarouselBackground} type="video/mp4" />
      </video>
    </div>
    <div className="hero-main container flex-column">
      <p className="container">
        Until the completion of largest ICO in the history of Africa left:
      </p>
      <div className="hero-main-counter container flex">
        <div className="hero-main-counter-item rounded flex">00</div>
        <div className="hero-main-counter-item rounded flex">00</div>
        <div className="hero-main-counter-item rounded flex">00</div>
        <span>:</span>
        <div className="hero-main-counter-item rounded flex">00</div>
      </div>
    </div>
  </div>
)

export default Hero
