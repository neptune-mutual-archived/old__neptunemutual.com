import * as React from 'react'
import { Card } from './card'
import * as styles from './styles.module.css'

export const data = [
  {
    title: 'Transfer Risk',
    iconSrc: '/icons/benefits/Transfer_Risk.svg',
    content:
      'You are a contrarian. You think that the cryptocurrency market has now become a bubble, too extended, and needs a major correction at this point.'
  },
  {
    title: 'Community Risk',
    iconSrc: '/icons/benefits/Community_Risk.svg',
    content:
      'You are very concerned about the security of <enter the name> DeFi protocol or smart contract and suspect it could get exploited or hacked any time.'
  },
  {
    title: 'Calculate Risk',
    iconSrc: '/icons/benefits/Calculate_Risk.svg',
    content:
      'You are worried you might lose your investments and assets because the <enter the name> cryptocurrency exchange might get hacked and the funds, stolen.'
  },
  {
    title: 'Coin Risk',
    iconSrc: '/icons/benefits/Coin_Risk.svg',
    content:
      'Your trade is going very profitable. To neutralize possible loss and maximize profit, you now want to enter into the opposite side of the trade you’re already in.'
  }
]

export const ManageRisk = () => {
  return (
    <>
      <h3 className='sr-only'>Manage Risk</h3>
      <div id='manage-risk' className={styles.cards}>
        {data.map((x, i) => (
          <Card key={i} {...x} />
        ))}
      </div>
    </>
  )
}
