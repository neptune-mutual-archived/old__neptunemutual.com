import * as React from 'react'
import { DOCUMENTATION_URL } from '../../utils/config'
import { LanguageSelector } from './language-selector'
import * as styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href='/' className='block'>
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
            Docs
          </a>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  )
}
