import * as React from 'react'
import { TOKEN_DESIGN_URL } from '../../utils/config'
import * as styles from './styles.module.css'

export const Content = () => {
  return (
    <div className='max-w-screen-md mb-12 md:mb-24'>
      <h2 className='font-numbers font-semibold text-white text-2xl md:text-4xl mb-6'>
        Roadmap
      </h2>
      <p className={styles.content_p}>
        Unlike some projects you might have seen, we don’t have any unrealistic
        roadmap. We’re starting with the smart contract
        and exchange cover and then focusing on enhancing the awesome user
        experience research we’ve already completed.
      </p>
      <p className={styles.content_p}>
        We’ve successfully bootstrapped Neptune Mutual so far intending to not
        burn millions of dollars worth of precious investor capital to build a
        solution nobody wants. If our product gains initial traction, we will
        then consider exploring options to perform a public token sale.
      </p>
      <p className={styles.content_p}>
        <a
          className='font-semibold text-blue-500 hover:text-blue-400 underline'
          href={TOKEN_DESIGN_URL}
          target='_blank'
          rel='noreferrer nofollow'
        >
          View Token Design
        </a>
      </p>
    </div>
  )
}
