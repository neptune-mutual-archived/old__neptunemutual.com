import * as React from 'react'
import { Trans } from '@lingui/macro'
import { APP_URL, DEVELOPMENT_DOCS_URL } from '../../utils/config'
import { FilledLink } from '../buttons/filled'
import { OutlineLink } from '../buttons/outline'
import * as styles from './styles.module.css'

export const Content = () => {
  return (
    <div className='text-center w-full max-w-5xl flex flex-col items-center'>
      <h1 className={styles.content_h1}>
        <Trans>
          Reduce your exposure to cryptocurrency market risks. Act before it’s
          too late!
        </Trans>
      </h1>
      <p className={styles.content_p}>
        <Trans>
          Neptune Mutual provides you with{' '}
          <span className='text-gray-100'>guaranteed stablecoin liquidity</span>{' '}
          to reduce your risk exposure by hedging against possible capital risks
          and smart contract vulnerabilities.
        </Trans>
      </p>
      <div className={styles.content_cta}>
        <OutlineLink href={DEVELOPMENT_DOCS_URL} className='px-7 py-3' external>
          <Trans>Development Docs</Trans>
        </OutlineLink>
        <FilledLink href={APP_URL} className='px-7 py-3' external>
          <Trans>LAUNCH APP</Trans>
        </FilledLink>
      </div>
    </div>
  )
}
