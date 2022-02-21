import AliceCarousel from "react-alice-carousel"

import CarouselItemOne from "./CarouselItemOne"

import "./style.scss"

const responsive = {
  1440: { items: 1 },
}

const items = [<CarouselItemOne />]

const AliceSlider = () => (
  <AliceCarousel
    items={items}
    responsive={responsive}
    mouseTracking
    autoPlay
    autoPlayInterval={7000}
    infinite
  ></AliceCarousel>
)

export default AliceSlider
