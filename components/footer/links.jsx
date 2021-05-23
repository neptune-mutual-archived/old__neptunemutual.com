import {
  APP_DOCUMENTATION_URL,
  OUR_ETHOS_URL,
  BECOME_CONTRIBUTOR_URL,
  COMMUNITY_GUIDELINES_URL,
  TERMS_OF_SERVICE_URL,
  CAREERS_URL
} from '../../utils/config'

const textLinks = [
  {
    name: 'Documentation',
    href: APP_DOCUMENTATION_URL
  },
  {
    name: 'Our Ethos',
    href: OUR_ETHOS_URL
  },
  {
    name: 'Careers',
    href: CAREERS_URL
  },
  {
    name: 'Become a Contributor',
    href: BECOME_CONTRIBUTOR_URL
  },
  {
    name: 'Community Guideline',
    href: COMMUNITY_GUIDELINES_URL
  },
  {
    name: 'Terms of Service',
    href: TERMS_OF_SERVICE_URL
  }
]
const iconLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/neptune-mutual',
    iconSrc: '/icons/footer/github.svg'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/neptunemutual',
    iconSrc: '/icons/footer/twitter.svg'
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/r/NeptuneMutual/',
    iconSrc: '/icons/footer/reddit.svg'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/neptune-mutual',
    iconSrc: '/icons/footer/linkedin.svg'
  },
  {
    name: 'Figma',
    href: '',
    iconSrc: '/icons/footer/figma.svg'
  },
  {
    name: 'BSCScan',
    href: 'https://bscscan.com/token/0xce3805a443ebb27b2a4058ec9d94dc4f9c000633',
    iconSrc: '/icons/footer/bscscan.svg'
  },
  {
    name: 'Medium',
    href: '',
    iconSrc: '/icons/footer/medium.svg'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/neptunemutual',
    iconSrc: '/icons/footer/telegram.svg'
  }
]

export const Links = () => {
  return (
    <>
      <TextLinks />
      <IconLinks />
    </>
  )
}

const IconLinks = () => (
  <div className='w-full flex flex-wrap justify-center gap-8 my-8'>
    {iconLinks
      .filter((x) => x.href)
      .map((x, i) => (
        <div key={i}>
          <a
            href={x.href}
            target='_blank'
            rel='noopener noreferrer'
            title={x.name}
          >
            <img
              src={x.iconSrc}
              alt={x.name}
              className='transition duration-300 ease-in-out transform hover:scale-125 w-6 h-6'
              loading='lazy'
            />
          </a>
        </div>
      ))}
  </div>
)

const TextLinks = () => (
  <div className='w-full flex flex-wrap justify-center items-center flex-col md:flex-row gap-4 md:gap-8 my-8'>
    {textLinks.map((x, i) => (
      <div key={i}>
        <a
          className='hover:text-white hover:underline'
          href={x.href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {x.name}
        </a>
      </div>
    ))}
  </div>
)
