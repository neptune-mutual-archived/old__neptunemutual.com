import * as React from 'react'
import { CircleStats } from './circle-stats'
import { TextStats } from './text-stats'

export const Infographics = () => {
  return (
    <div className='w-full h-full flex flex-col gap-16'>
      <div className='w-full flex flex-wrap gap-12 md:gap-24'>
        <TextStats
          top='TOTAL VALUE STOLEN'
          middle='$18.8 B+'
          bottom='2014-2020'
        />
        <TextStats top='NO.OF HACKS' middle='33+' bottom='2014-2020' />
      </div>
      <div className='w-full flex flex-wrap gap-8 md:gap-16'>
        <CircleStats top='2018' bottom='$875 M+' />
        <CircleStats top='2019' bottom='$282 M+' />
        <CircleStats top='2020' bottom='$260 M+' />
      </div>
    </div>
  )
}
