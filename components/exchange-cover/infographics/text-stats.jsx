export const TextStats = ({ top, bottom, middle }) => {
  return (
    <div data-aos='zoom-in'>
      <div className='text-sm text-gray-400 font-bold tracking-wider'>
        {top}
      </div>
      <div className='font-numbers font-semibold text-5xl text-white leading-normal'>
        {middle}
      </div>
      <div className='text-sm text-gray-400 font-bold tracking-wider'>
        {bottom}
      </div>
    </div>
  )
}
