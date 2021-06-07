import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './styles.module.css'

export const RoadmapImage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "roadmap/desktop.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      mobile: file(relativePath: { eq: "roadmap/mobile.png" }) {
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

  const mobile = getImage(data.mobile)
  const desktop = getImage(data.desktop)

  return (
    <div className='w-11/12 mx-auto'>
      <div className={styles.desktop}>
        <GatsbyImage alt='Roadmap' image={desktop} />
      </div>
      <div className={styles.mobile}>
        <GatsbyImage alt='Roadmap' image={mobile} />
      </div>
    </div>
  )
}
