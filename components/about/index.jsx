import { Cards } from './cards'
import { Content } from './content'
import styles from './styles.module.css'

export const About = () => {
  return (
    <div id='about' className={styles.about}>
      <div className='max-w-screen-2xl px-6 md:px-8 text-base md:text-lg text-gray-400'>
        <h2 className='font-numbers font-semibold text-white text-2xl md:text-4xl mb-6'>
          About Neptune Mutual
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-7 gap-20 md:gap-14'>
          <Content />
          <Cards />
        </div>
      </div>
    </div>
  )
}
