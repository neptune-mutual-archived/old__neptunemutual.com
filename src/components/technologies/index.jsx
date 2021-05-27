import * as React from 'react'
const data = [
  { name: 'Binance Smart Chain', logoSrc: '/logos/Binance Smart Chain.svg' },
  { name: 'Ethereum', logoSrc: '/logos/Ethereum.svg' },
  { name: 'PancakeSwap Exchange', logoSrc: '/logos/PancakeSwap Exchange.svg' },
  { name: 'The Graph Protocol', logoSrc: '/logos/The Graph Protocol.svg' },
  { name: 'Next', logoSrc: '/logos/Next.svg' },
  { name: 'Band Protocol', logoSrc: '/logos/band-protocol.svg' },
  { name: 'OpenZeppelin', logoSrc: '/logos/OpenZeppelin.svg' },
  { name: 'Solidity', logoSrc: '/logos/Solidity.svg' },
  { name: 'Truffle Suite', logoSrc: '/logos/Truffle Suite.svg' },
  { name: 'React', logoSrc: '/logos/React.svg' },
  { name: 'BSC Scan', logoSrc: '/logos/bscscan.svg' },
  { name: 'MetaMask', logoSrc: '/logos/MetaMask.svg' },
  { name: 'Ethers.js', logoSrc: '/logos/ethers-js.svg' },
  { name: 'Interplanetary File System', logoSrc: '/logos/ipfs.svg' },
  { name: 'Visual Studio Code', logoSrc: '/logos/Visual Studio Code.svg' },
  { name: 'Javascript Standard', logoSrc: '/logos/Javascript Standard.svg' },
  { name: 'Cloudflare', logoSrc: '/logos/Cloudflare.svg' },
  { name: 'Node.js', logoSrc: '/logos/Node.js.svg' }
]

export const Technologies = () => {
  return (
    <div
      id='technologies'
      className='flex justify-center mb-8 -mt-8 md:my-16 md:-mt-24 bg-white -skew-y-6 transform'
    >
      <div className='w-full max-w-screen-2xl px-6 md:px-8 text-base md:text-lg text-gray-400 skew-y-6 transform py-24 md:py-32'>
        <h2 className='text-center font-numbers font-semibold text-black text-2xl md:text-4xl mb-16'>
          Technologies
        </h2>
        <div className='flex flex-wrap gap-12 md:gap-24 justify-center'>
          {data.map((x, i) => (
            <img
              key={i}
              src={x.logoSrc}
              alt={x.name}
              className='h-10 md:h-14'
              loading='lazy'
              data-sal-duration='400'
              data-sal='zoom-in'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
