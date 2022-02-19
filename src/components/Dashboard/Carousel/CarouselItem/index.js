import styled from "styled-components"

import "./style.scss"

const CarouselItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const CarouselItem = ({ image }) => (
  <CarouselItemWrapper image={image}>
    <div className="carousel-item-main"></div>
  </CarouselItemWrapper>
)

export default CarouselItem
