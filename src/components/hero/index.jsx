import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import { Content } from './content'
import { Carousel } from './carousel'
import * as styles from './styles.module.css'

export const Hero = () => {
  const { pattern } = useStaticQuery(
    graphql`
      query {
        pattern: file(relativePath: { eq: "patterns/hero.png" }) {
          ...bgPattern
        }
      }
    `
  )
  const pluginImage = getImage(pattern)

  const backgroundFluidImageStack = [
    `linear-gradient(180deg,rgba(0, 0, 0, 0.05) 28.52%,rgba(255, 255, 255, 0.06) 87.44%)`,
    pluginImage
  ].reverse()

  return (
    <>
      <BgImage
        Tag='div'
        className={styles.hero}
        image={backgroundFluidImageStack}
      >
        <Content />
      </BgImage>
      <div className={styles.carousel}>
        <Carousel />
      </div>
    </>
  )
}
