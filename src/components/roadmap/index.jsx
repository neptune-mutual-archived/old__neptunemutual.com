import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import { Content } from './content'
import { RoadmapImage } from './roadmap-image'
import * as styles from './styles.module.css'

export const Roadmap = () => {
  const { pattern } = useStaticQuery(graphql`
    query {
      pattern: file(relativePath: { eq: "patterns/roadmap.png" }) {
        ...bgPattern
      }
    }
  `)

  const image = getImage(pattern)

  return (
    <BgImage
      Tag='div'
      id='roadmap'
      className={styles.roadmap}
      image={image}
      backgroundColor={`#100e16`}
    >
      <div className='w-full max-w-screen-2xl px-6 pb-36 md:pb-48 text-base md:text-lg text-gray-400 gap-20 md:gap-10'>
        <Content />
        <div className='w-full' data-sal-duration='500' data-sal='fade'>
          <RoadmapImage />
        </div>
      </div>
    </BgImage>
  )
}
