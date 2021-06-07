import * as React from 'react'
import { useState } from 'react'
import { classNames } from '../../../utils/classnames'
import { ManageRisk } from './manage-risk'
import { ProvideLiquidity } from './provide-liquidity'
import * as styles from './styles.module.css'
// import sal from 'sal.js'

export const Tabs = () => {
  const [tab, setTab] = useState('1')

  // React.useEffect(() => {
  //   sal()
  // }, [tab])

  const changeTab = (id) => {
    return () => setTab(id)
  }

  return (
    <div className={styles.tabs}>
      <div className='w-full max-w-screen-2xl'>
        <div className='w-full flex justify-center'>
          <button
            className={classNames(
              styles.tab_link,
              tab === '1' && styles.tab_link_active
            )}
            onClick={changeTab('1')}
          >
            Manage Risk
          </button>
          <button
            className={classNames(
              styles.tab_link,
              tab === '2' && styles.tab_link_active
            )}
            onClick={changeTab('2')}
          >
            Provide Liquidity
          </button>
        </div>
        {tab === '1' ? <ManageRisk /> : null}
        {tab === '2' ? <ProvideLiquidity /> : null}
      </div>
    </div>
  )
}
