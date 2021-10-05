import * as React from 'react'
import { Card } from './card'
import * as styles from './styles.module.css'

const data = [
  {
    icon: '/icons/about/sun.svg',
    title: 'Trustless & Decentralized',
    content:
      'Neptune Mutual platform capitalizes on the power of decentralization and acts in the best interest of the community.',
    className: styles.card_1
  },
  {
    icon: '/icons/about/user_plus.svg',
    title: 'Limited Emmission',
    content:
      'There is no dual or tipple token system or a continuous token supply. NPM governance tokens are fixed and deflationary.',
    className: styles.card_2
  },
  {
    icon: '/icons/about/layers.svg',
    title: 'Transparent',
    content:
      'Transparency is not a feature but the foundation. It is a framework to build trust where code is the law. Without that, you would have to take our word for it. We believe asking that is asking too much.',
    className: styles.card_3
  },
  {
    icon: '/icons/about/trending_down.svg',
    title: 'Cheaper & Efficient',
    content:
      'Neptune Mutual platform leverages cheaper transactions and higher throughput of Binance Smart Chain, Polygon, Fantom, and xDaiChain to bring you a robust set of hedging features and functionalities.',
    className: styles.card_4
  }
]

export const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-x-8 lg:col-span-4'>
      {data.map((x) => (
        <Card key={x.title} {...x} />
      ))}
    </div>
  )
}
