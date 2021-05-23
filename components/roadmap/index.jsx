import { Content } from './content'
import { RoadmapImage } from './roadmap-image'
import styles from './styles.module.css'

export const Roadmap = () => {
  return (
    <div id='roadmap' className={styles.roadmap}>
      <div className='w-full max-w-screen-2xl px-6 pb-36 md:pb-48 text-base md:text-lg text-gray-400 gap-20 md:gap-10'>
        <Content />
        <div className='w-full' data-aos='fade-up'>
          <RoadmapImage />
        </div>
      </div>
    </div>
  )
}
