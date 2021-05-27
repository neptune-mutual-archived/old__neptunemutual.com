import * as React from 'react'
export const Card = ({ icon, title, content, className }) => {
  return (
    <div className='flex flex-col items-start'>
      <div className={className} data-sal-duration='400' data-sal='zoom-in'>
        <img className='block w-6 h-6' src={icon} alt={title} loading='lazy' />
      </div>
      <h3
        className='mt-4 font-numbers font-medium text-xl md:text-2xl text-white'
        data-sal-duration='400'
        data-sal='slide-up'
      >
        {title}
      </h3>
      <p className='mt-4' data-sal-duration='400' data-sal='slide-up'>
        {content}
      </p>
    </div>
  )
}
