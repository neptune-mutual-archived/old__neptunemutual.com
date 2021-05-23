import { DOCUMENTATION_URL, PROTOTYPE_URL } from '../../utils/config'
import { OutlineLink } from '../buttons/outline'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href='#' className='block'>
          <picture>
            <source media='(min-width: 720px)' srcSet='/neptune-mutual.svg' />
            <source media='(min-width: 120px)' srcSet='/nep-icon.svg' />
            <img
              src='/nep-icon.svg'
              alt='Neptune Mutual'
              height='64'
              loading='lazy'
            />
          </picture>
        </a>
        <nav className={styles.nav}>
          <a href={DOCUMENTATION_URL} target='_blank' rel='noopener noreferrer'>
            documentation
          </a>
          <OutlineLink href={PROTOTYPE_URL} external>
            prototype
          </OutlineLink>
        </nav>
      </div>
    </header>
  )
}
