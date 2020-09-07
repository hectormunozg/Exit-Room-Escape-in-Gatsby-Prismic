import React from "react"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@material-ui/core"
import { RichText } from "prismic-reactjs"
import {Link} from "gatsby"

function Item(props) {

  console.log(props);

  const title = props.item.slide_title.raw
  const description = props.item.slide_description
  const btnText = props.item.slider_btn_text.text
  const link = props.item.slider_btn_link.document.uid
  const image = props.item.slide_image.fluid.src

  return (
    <Paper>
      <img src={image}/>
      <RichText render={title} />
      <p>{description}</p>
      <Link to={`/${link}`} >{btnText}</Link>
    </Paper>
  )
}

const Slider = (props) => {

  var slides = props.props.allPrismicHome.edges[0].node.data.body[0].items

  return ( 
    <Carousel>
      {slides.map((slide, i) => (
        <Item key={i} item={slide} />
      ))}
    </Carousel>
   );
}
 
export default Slider;