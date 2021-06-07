import { graphql } from 'gatsby'

export const carouselImage = graphql`
  fragment carouselImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 800
        height: 820
        layout: CONSTRAINED
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`

export const technologyLogo = graphql`
  fragment technologyLogo on File {
    childImageSharp {
      gatsbyImageData(
        height: 56
        layout: CONSTRAINED
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`
