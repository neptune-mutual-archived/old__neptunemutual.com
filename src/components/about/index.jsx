import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import { Cards } from './cards'
import { Content } from './content'
import * as styles from './styles.module.css'

export const About = () => {
  const { pattern } = useStaticQuery(graphql`
    query {
      pattern: file(relativePath: { eq: "patterns/left.png" }) {
        ...bgPattern
      }
    }
  `)

  const image = getImage(pattern)

  return (
    <BgImage Tag='div' id='about' className={styles.about} image={image}>
      <div className='max-w-screen-2xl mx-auto px-6 md:px-8 text-base md:text-lg text-gray-400'>
        <h2 className='font-numbers font-semibold text-white text-2xl md:text-4xl mb-6'>
          About Neptune Mutual
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-7 gap-20 md:gap-14'>
          <Content />
          <Cards />
        </div>
      </div>
    </BgImage>
  )
}
