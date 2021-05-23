import styles from './styles.module.css'

export const Card = ({ iconSrc, title, content }) => {
  return (
    <div className={styles.card}>
      <img src={iconSrc} alt={title} data-aos='zoom-in' loading='lazy' />
      <p className='text-center'>{content}</p>
    </div>
  )
}
