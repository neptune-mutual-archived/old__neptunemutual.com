import * as React from 'react'
import { Card } from './card'
import * as styles from './styles.module.css'

export const data = [
  {
    title: 'Hand',
    iconSrc: '/icons/benefits/Hand.svg',
    content:
      'Get a small portion of all fees collected in your market in BUSD and BNB. Additional rewards in NPM as well.'
  },
  {
    title: 'Coin',
    iconSrc: '/icons/benefits/Coin.svg',
    content:
      'Add liquidity to an existing coverage pool. Get your proportional share of the coverage fees earned in this pool in BUSD and BNB. The early users will get some extra NPM tokens.'
  },
  {
    title: 'Dollar',
    iconSrc: '/icons/benefits/Dollar.svg',
    content:
      'Burn and stake NPM to create a new coverage contract. Get a portion of all coverage fees collected in BUSD and BNB. The early contract creators are rewarded additional NPM.'
  },
  {
    title: 'Transfer',
    iconSrc: '/icons/benefits/Transfer.svg',
    content:
      'Add your cryptocurrencies like WBNB, CAKE, NPM, and BUSD to bond with equalivalent amount of NPM to PancakeSwap. Stake your LP tokens to “farm” NPM tokens for free.'
  }
]

export const ProvideLiquidity = () => {
  return (
    <>
      <h3 className='sr-only'>Provide Liquidity</h3>
      <div id='provide-liquidity' className={styles.cards}>
        {data.map((x, i) => (
          <Card key={i} {...x} />
        ))}
      </div>
    </>
  )
}
