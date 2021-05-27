import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

export const imgs = [
  {
    src: '../../images/slider/Coverage.png',
    alt: 'Cover'
  },
  {
    src: '../../images/slider/Prediction market.png',
    alt: 'Prediction Market'
  },
  {
    src: '../../images/slider/Farming.png',
    alt: 'Farming'
  },
  {
    src: '../../images/slider/Bond.png',
    alt: 'Bond'
  }
]

const Dot = ({ className, children }) => {
  return (
    <li className={className || undefined}>
      {/* <div className='p-1 bg-blue-400 rounded-full'></div> */}
      {children}
    </li>
  )
}

export const Carousel = () => {
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
        <div key={imgs[0].alt} className='px-4'>
          <StaticImage
            src='../../images/slider/Coverage.png'
            alt={imgs[0].alt}
            width={800}
            loading='eager'
            formats={['AUTO', 'WEBP', 'AVIF']}
            className='block max-w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800'
          />
        </div>
        <div key={imgs[1].alt} className='px-4'>
          <StaticImage
            src='../../images/slider/Prediction market.png'
            alt={imgs[1].alt}
            width={800}
            loading='eager'
            formats={['AUTO', 'WEBP', 'AVIF']}
            className='block max-w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800'
          />
        </div>
        <div key={imgs[2].alt} className='px-4'>
          <StaticImage
            src='../../images/slider/Farming.png'
            alt={imgs[2].alt}
            width={800}
            loading='eager'
            formats={['AUTO', 'WEBP', 'AVIF']}
            className='block max-w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800'
          />
        </div>
        <div key={imgs[3].alt} className='px-4'>
          <StaticImage
            src='../../images/slider/Bond.png'
            alt={imgs[3].alt}
            width={800}
            loading='eager'
            formats={['AUTO', 'WEBP']}
            className='block max-w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800'
          />
        </div>
      </Slider>
    </div>
  )
}
