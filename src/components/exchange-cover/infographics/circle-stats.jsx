import * as React from 'react'

export const CircleStats = ({ top, bottom }) => {
  return (
    <div className='flex' data-sal-duration="500" data-sal='zoom-in'>
      <div className='w-16 h-16 rounded-full bg-gradient-to-r from-blue-800'></div>
      <div className='flex flex-col justify-end -ml-6'>
        <div className='text-sm text-gray-400 font-bold tracking-wider'>
          {top}
        </div>
        <div className='font-numbers font-semibold text-2xl text-white'>
          {bottom}
        </div>
      </div>
    </div>
  )
}
