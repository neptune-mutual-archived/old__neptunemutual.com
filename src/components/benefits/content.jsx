import * as React from 'react'
import * as styles from './styles.module.css'

export const Content = () => {
  return (
    <div className='w-full max-w-screen-md mx-auto text-center'>
      <h2 className='font-numbers font-semibold text-white text-2xl md:text-4xl leading-normal mb-8 md:mb-12'>
        How do I benefit from the Neptune Mutual platform?
      </h2>
      <p className={styles.content_p}>
        To manage risks, the Neptune Mutual platform provides users with a
        guaranteed stablecoin liquidity. On the other hand, the liquidity
        providers collectively earn the coverage fees generated in the pools.
        Additionally, the platform also incentivizes the users by “airdropping”
        a certain amount of NEP tokens to the early users on both sides.
      </p>
    </div>
  )
}
