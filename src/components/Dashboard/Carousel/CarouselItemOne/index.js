import { CarouselBackground } from "resources/Videos"

import "./style.scss"

const CarouselItemOne = () => (
  <div className="carousel-item-one flex">
    <div className="carousel-item-one-background">
      <video autoPlay loop muted>
        <source src={CarouselBackground} type="video/mp4" />
      </video>
    </div>
    <div className="carousel-item-one-main container flex-column">
      <p className="container">
        Until the completion of largest ICO in the history of Africa left:
      </p>
      <div className="carousel-item-one-main-counter container flex">
        <div className="carousel-item-one-main-counter-item rounded flex">
          00
        </div>
        <div className="carousel-item-one-main-counter-item rounded flex">
          00
        </div>
        <div className="carousel-item-one-main-counter-item rounded flex">
          00
        </div>
        <span>:</span>
        <div className="carousel-item-one-main-counter-item rounded flex">
          00
        </div>
      </div>
    </div>
  </div>
)

export default CarouselItemOne
