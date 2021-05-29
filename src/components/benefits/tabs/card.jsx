import * as React from 'react'
import * as styles from './styles.module.css'

export const Card = ({ iconSrc, title, content }) => {
  return (
    <div className={styles.card}>
      <img
        src={iconSrc}
        alt={title}
        data-sal-duration='400'
        data-sal='zoom-in'
        width="154"
        height="154"
      />
      <p className='text-center'>{content}</p>
    </div>
  )
}
