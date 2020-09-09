import React from "react"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@material-ui/core"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const HomeCarousel = styled(Carousel)`
  height: 600px;
`
const CarouselItem = styled(Paper)`
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5rem;
    color: red;

    z-index: 1000;
  }
`

const Overlay = styled.div`
  content: "";
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;

`

function Item(props) {
  const title = props.item.slide_title.raw
  const description = props.item.slide_description
  const btnText = props.item.slider_btn_text.text
  const link = props.item.slider_btn_link.document.uid
  const image = props.item.slide_image.fluid.src

  return (
    <CarouselItem
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
      }}
    >
      <Overlay />
      <RichText render={title} />
      <p>{description}</p>
      <Link to={`/${link}`}>{btnText}</Link>
    </CarouselItem>
  )
}

const Slider = props => {
  var slides = props.props.allPrismicHome.edges[0].node.data.body[0].items

  return (
    <HomeCarousel>
      {slides.map((slide, i) => (
        <Item key={i} item={slide} />
      ))}
    </HomeCarousel>
  )
}

export default Slider
