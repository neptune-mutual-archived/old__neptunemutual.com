import { Content } from './content'
import { Infographics } from './infographics'
import styles from './styles.module.css'

export const ExchangeCover = () => {
  return (
    <div id='exchange-cover' className={styles.exchange_cover}>
      <div className='max-w-screen-2xl px-6 md:px-8 text-base md:text-lg text-gray-400'>
        <h2 className='font-numbers font-semibold text-white text-2xl md:text-4xl mb-2'>
          Smart Contract &amp; Exchange Cover
        </h2>
        <h4 className='font-bold text-base md:text-lg text-gray-400 mb-6 uppercase'>
          PROTECT YOUR PROFITS &amp; LOWER YOUR RISK EXPOSURE
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-7 gap-16 md:gap-14'>
          <div className='md:col-span-4 pt-2'>
            <Content />
          </div>
          <div className='md:col-span-3'>
            <Infographics />
          </div>
        </div>
      </div>
    </div>
  )
}
