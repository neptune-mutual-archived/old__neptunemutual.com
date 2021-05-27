import * as React from 'react'
import { Content } from './content'
import * as styles from './styles.module.css'

export const Collaborate = () => {
  return (
    <div id='collaborate' className={styles.collaborate}>
      <div className='w-full text-base md:text-lg text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16'>
        <div data-sal-duration="500" data-sal='slide-right'>
          <img
            src='/images/collaborate.png'
            alt='Prediction Market'
            loading='lazy'
          />
        </div>
        <div className='order-first md:order-last'>
          <Content />
        </div>
      </div>
    </div>
  )
}
