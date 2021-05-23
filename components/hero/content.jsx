import { APP_URL, SEED_INVESTMENT_URL } from '../../utils/config'
import { FilledLink } from '../buttons/filled'
import { OutlineLink } from '../buttons/outline'
import styles from './styles.module.css'

export const Content = () => {
  return (
    <div className='text-center w-full max-w-5xl flex flex-col items-center'>
      <h1 className={styles.content_h1}>
        Reduce your exposure to cryptocurrency market risks. Act before it’s too
        late!
      </h1>
      <p className={styles.content_p}>
        Neptune Mutual provides you with{' '}
        <span className='text-gray-100'>guaranteed stablecoin liquidity</span>{' '}
        to reduce your risk exposure by hedging against possible capital risks
        and smart contract vulnerabilities.
      </p>
      <div className={styles.content_cta}>
        <OutlineLink
          href={SEED_INVESTMENT_URL}
          className='px-7 py-3'
          data-aos='zoom-in'
        >
          Seed Investment
        </OutlineLink>
        <FilledLink href={APP_URL} className='px-7 py-3' data-aos='zoom-in'>
          LAUNCH APP
        </FilledLink>
      </div>
    </div>
  )
}
