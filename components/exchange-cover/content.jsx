import { Covers } from './covers'
import styles from './styles.module.css'

export const Content = () => {
  return (
    <>
      <p className={styles.content_p}>
        It is a well-known fact that there is no such thing as a bug-free code.
        Smart contracts, cryptocurrency exchanges, and digital asset custodians
        all are prone to human errors. It can’t be denied that numerous
        malicious actors are continuously investigating new ways to target and
        exploit possible vulnerabilities.
      </p>

      <p className={styles.content_p}>
        We&apos;ve witnessed numerous exploits not only on unaudited smart
        contracts but also on the smart contracts that underwent multiple rounds
        of security audits.
      </p>
      <Covers />
    </>
  )
}
