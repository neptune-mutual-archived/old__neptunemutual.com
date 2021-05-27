import * as React from 'react'
import * as styles from './styles.module.css'

export const Content = () => {
  return (
    <div className='max-w-2xl px-6 pt-2'>
      <h2 className='font-numbers font-semibold text-white text-2xl md:text-4xl mb-2'>
        Collaborate, Predict, Win
      </h2>
      <h3 className='font-bold text-base md:text-lg text-gray-400 mb-6'>
        UNLEASH THE POWER OF COLLECTIVE INTELLIGENCE
      </h3>
      <p className={styles.content_p}>
        Put your money where your mouth is. The Neptune Mutual platform presents
        you with an easy-to-use interface to directly place a trade on the
        outcome you believe is going to become true.
      </p>

      <p className={styles.content_p}>
        You can also enter and exit a trade anytime you like without having to
        wait for the final resolution.
      </p>
    </div>
  )
}
