import React from "react"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@material-ui/core"
import { RichText } from "prismic-reactjs"
import {Link} from "gatsby"
import styled from '@emotion/styled';

const HomeCarousel = styled(Carousel)`
  height: 600px;
`
const CarouselItem = styled(Paper)`
  height: 600px;

`



function Item(props) {

  const title = props.item.slide_title.raw
  const description = props.item.slide_description
  const btnText = props.item.slider_btn_text.text
  const link = props.item.slider_btn_link.document.uid
  const image = props.item.slide_image.fluid.src

  return (
    <CarouselItem style={{backgroundImage:`url(${image})`}}>
      <RichText render={title} />
      <p>{description}</p>
      <Link to={`/${link}`} >{btnText}</Link>
    </CarouselItem>
  )
}

const Slider = (props) => {

  var slides = props.props.allPrismicHome.edges[0].node.data.body[0].items

  return ( 
    <HomeCarousel>
      {slides.map((slide, i) => (
        <Item key={i} item={slide} />
      ))}
    </HomeCarousel>
   );
}
 
export default Slider;