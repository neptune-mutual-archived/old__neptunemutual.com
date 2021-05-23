export const RoadmapImage = () => {
  return (
    <picture className='w-11/12'>
      <source
        media='(min-width: 720px)'
        srcSet='/images/roadmap/desktop.svg'
        className='w-full'
      />
      <source
        media='(min-width: 120px)'
        srcSet='/images/roadmap/mobile.svg'
        className='w-full'
      />
      <img
        src='/images/roadmap/mobile.svg'
        alt='Neptune Mutual'
        className='w-full'
        loading='lazy'
      />
    </picture>
  )
}
