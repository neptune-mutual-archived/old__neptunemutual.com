import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const Technologies = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "logos/Binance Smart Chain.png" }) {
        ...technologyLogo
      }
      image2: file(relativePath: { eq: "logos/Ethereum.png" }) {
        ...technologyLogo
      }
      image3: file(relativePath: { eq: "logos/PancakeSwap Exchange.png" }) {
        ...technologyLogo
      }
      image4: file(relativePath: { eq: "logos/The Graph Protocol.png" }) {
        ...technologyLogo
      }
      image5: file(relativePath: { eq: "logos/Next.png" }) {
        ...technologyLogo
      }
      image6: file(relativePath: { eq: "logos/band-protocol.png" }) {
        ...technologyLogo
      }
      image7: file(relativePath: { eq: "logos/OpenZeppelin.png" }) {
        ...technologyLogo
      }
      image8: file(relativePath: { eq: "logos/Solidity.png" }) {
        ...technologyLogo
      }
      image9: file(relativePath: { eq: "logos/Truffle Suite.png" }) {
        ...technologyLogo
      }
      image10: file(relativePath: { eq: "logos/React.png" }) {
        ...technologyLogo
      }
      image11: file(relativePath: { eq: "logos/bscscan.png" }) {
        ...technologyLogo
      }
      image12: file(relativePath: { eq: "logos/MetaMask.png" }) {
        ...technologyLogo
      }
      image13: file(relativePath: { eq: "logos/ethers-js.png" }) {
        ...technologyLogo
      }
      image14: file(relativePath: { eq: "logos/ipfs.png" }) {
        ...technologyLogo
      }
      image15: file(relativePath: { eq: "logos/Visual Studio Code.png" }) {
        ...technologyLogo
      }
      image16: file(relativePath: { eq: "logos/Javascript Standard.png" }) {
        ...technologyLogo
      }
      image17: file(relativePath: { eq: "logos/Cloudflare.png" }) {
        ...technologyLogo
      }
      image18: file(relativePath: { eq: "logos/Node.js.png" }) {
        ...technologyLogo
      }
    }
  `)

  const imgs = [
    {
      image: getImage(data.image1),
      name: 'Binance Smart Chain'
    },
    {
      image: getImage(data.image2),
      name: 'Ethereum'
    },
    {
      image: getImage(data.image3),
      name: 'PancakeSwap Exchange'
    },
    {
      image: getImage(data.image4),
      name: 'The Graph Protocol'
    },
    {
      image: getImage(data.image5),
      name: 'Next'
    },
    {
      image: getImage(data.image6),
      name: 'Band Protocol'
    },
    {
      image: getImage(data.image7),
      name: 'OpenZeppelin'
    },
    {
      image: getImage(data.image8),
      name: 'Solidity'
    },
    {
      image: getImage(data.image9),
      name: 'Truffle Suite'
    },
    {
      image: getImage(data.image10),
      name: 'React'
    },
    {
      image: getImage(data.image11),
      name: 'BSC Scan'
    },
    {
      image: getImage(data.image12),
      name: 'MetaMask'
    },
    {
      image: getImage(data.image13),
      name: 'Ethers.js'
    },
    {
      image: getImage(data.image14),
      name: 'Interplanetary File System'
    },
    {
      image: getImage(data.image15),
      name: 'Visual Studio Code'
    },
    {
      image: getImage(data.image16),
      name: 'Javascript Standard'
    },
    {
      image: getImage(data.image17),
      name: 'Cloudflare'
    },
    {
      image: getImage(data.image18),
      name: 'Node.js'
    }
  ]

  return (
    <div
      id='technologies'
      className='flex justify-center mb-8 -mt-8 md:my-16 md:-mt-24 bg-white -skew-y-6 transform'
    >
      <div className='w-full max-w-screen-2xl px-6 md:px-8 text-base md:text-lg text-gray-400 skew-y-6 transform py-24 md:py-32'>
        <h2 className='text-center font-numbers font-semibold text-black text-2xl md:text-4xl mb-16'>
          Technologies
        </h2>
        <div className='flex flex-wrap gap-x-8 gap-y-12 md:gap-24 justify-center'>
          {imgs.map((img, i) => (
            <GatsbyImage
              key={i}
              image={img.image}
              alt={img.name}
              data-sal-duration='400'
              data-sal='zoom-in'
              className='h-10 md:h-14'
              objectFit='contain'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
