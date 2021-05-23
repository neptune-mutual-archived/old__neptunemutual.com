import { Content } from './content'
import { Carousel } from './carousel'
import styles from './styles.module.css'

export const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Content />
      </div>
      <div className={styles.carousel}>
        <Carousel />
      </div>
    </>
  )
}
