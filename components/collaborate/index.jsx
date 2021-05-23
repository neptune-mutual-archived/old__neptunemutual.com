import { Content } from './content'
import styles from './styles.module.css'

export const Collaborate = () => {
  return (
    <div id='collaborate' className={styles.collaborate}>
      <div className='w-full text-base md:text-lg text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16'>
        <div data-aos='zoom-in-right'>
          <img
            src='/images/collaborate.png'
            alt='Prediction Market'
            loading='lazy'
          />
        </div>
        <div className='order-first md:order-last'>
          <Content />
        </div>
      </div>
    </div>
  )
}
