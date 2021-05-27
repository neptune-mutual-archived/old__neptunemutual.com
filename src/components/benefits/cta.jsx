import * as React from 'react'
import { BOND_URL, POOL_URL } from '../../utils/config'
import { FilledLink } from '../buttons/filled'
import { OutlineLink } from '../buttons/outline'

export const CTA = () => {
  return (
    <div className='w-full flex flex-col items-center gap-6 md:gap-12 text-center'>
      <h4 className='text-xl md:text-4xl font-numbers md:leading-normal text-gray-400 max-w-screen-lg'>
        Early liquidity providers receive NEP by joining the bond and farm
        pools. Show us your support today.
      </h4>
      <div className='flex flex-wrap justify-center gap-6'>
        <OutlineLink href={BOND_URL} external wide data-sal-duration="500" data-sal='zoom-in'>
          bond nep
        </OutlineLink>
        <FilledLink href={POOL_URL} external wide data-sal-duration="500" data-sal='zoom-in'>
          nep pool
        </FilledLink>
      </div>
    </div>
  )
}
