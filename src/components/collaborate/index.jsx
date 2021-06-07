import * as React from 'react'
import { Content } from './content'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './styles.module.css'

export const Collaborate = () => {
  const data = useStaticQuery(graphql`
    query {
      collaborate: file(relativePath: { eq: "collaborate/collaborate.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const collaborate = getImage(data.collaborate)

  return (
    <div id='collaborate' className={styles.collaborate}>
      <div className='w-full text-base md:text-lg text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16'>
        <div data-sal-duration='500' data-sal='slide-right'>
          <GatsbyImage alt='Prediction Market' image={collaborate} />
        </div>
        <div className='order-first md:order-last'>
          <Content />
        </div>
      </div>
    </div>
  )
}
