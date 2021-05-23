import { Content } from './content'
import { Tabs } from './tabs'
import { CTA } from './cta'
import styles from './styles.module.css'

export const Benefits = () => {
  return (
    <div id='benefits' className={styles.benefits}>
      <div className='w-full text-base md:text-lg text-gray-400'>
        <div className='max-w-screen-2xl px-8 flex-grow mx-auto'>
          <Content />
        </div>
        <Tabs />
        <div className='max-w-screen-2xl px-8 flex-grow mx-auto'>
          <CTA />
        </div>
      </div>
    </div>
  )
}
