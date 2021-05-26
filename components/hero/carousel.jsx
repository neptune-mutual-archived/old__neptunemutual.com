import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

export const imgs = [
  {
    src: '/images/slider/Coverage.png',
    alt: 'Cover'
  },
  {
    src: '/images/slider/Prediction market.png',
    alt: 'Prediction Market'
  },
  {
    src: '/images/slider/Farming.png',
    alt: 'Farming'
  },
  {
    src: '/images/slider/Bond.png',
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
        {imgs.map((x) => (
          <div key={x.alt} className='px-4'>
            <img
              src={x.src}
              alt={x.alt}
              className='block max-w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800'
              loading='lazy'
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
