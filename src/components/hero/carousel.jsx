import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

const Dot = ({ className, children }) => {
  return (
    <li className={className || undefined}>
      {/* <div className='p-1 bg-blue-400 rounded-full'></div> */}
      {children}
    </li>
  )
}

export const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "slider/Coverage.png" }) {
        ...carouselImage
      }
      image2: file(relativePath: { eq: "slider/Prediction market.png" }) {
        ...carouselImage
      }
      image3: file(relativePath: { eq: "slider/Farming.png" }) {
        ...carouselImage
      }
      image4: file(relativePath: { eq: "slider/Bond.png" }) {
        ...carouselImage
      }
    }
  `)

  const imgs = [
    {
      image: getImage(data.image1),
      alt: 'Cover'
    },
    {
      image: getImage(data.image2),
      alt: 'Prediction Market'
    },
    {
      image: getImage(data.image3),
      alt: 'Farming'
    },
    {
      image: getImage(data.image4),
      alt: 'Bond'
    }
  ]

  const appendDots = (dots) => {
    return (
      <ul>
        {dots.map((x, id) => (
          <Dot key={id} {...x.props} />
        ))}
      </ul>
    )
  }

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    easing: 'linear',
    autoplaySpeed: 5000,
    appendDots
  }

  return (
    <div className='mt-4 md:mt-16 px-2 w-full' style={{ maxWidth: '860px' }}>
      <Slider {...settings}>
        {imgs.map((img) => (
          <div key={img.alt} className='px-4'>
            <GatsbyImage
              image={img.image}
              alt={img.alt}
              className='block max-w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800'
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
