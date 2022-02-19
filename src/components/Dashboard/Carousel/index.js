import AliceCarousel from "react-alice-carousel"

import CarouselItem from "./CarouselItem"

import { PartnerItemContents } from "configs/UI"

import "./style.scss"

const responsive = {
  1440: { items: 1 },
}

const items = [
  <CarouselItem image={PartnerItemContents[0].image} />,
  <CarouselItem image={PartnerItemContents[0].image} />,
]

const AliceSlider = () => (
  <AliceCarousel
    items={items}
    responsive={responsive}
    mouseTracking
    infinite
  ></AliceCarousel>
)

export default AliceSlider
