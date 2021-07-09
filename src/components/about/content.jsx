import * as React from 'react'
import { GET_TOKENS_URL, GOVERNANCE_URL } from '../../utils/config'
import { OutlineLink } from '../buttons/outline'

export const Content = () => {
  return (
    <div className='lg:col-span-3'>
      <p className='mb-6'>
        Neptune Mutual platform explores new avenues to creating user-centric
        hedging products on the blockchain. By offering stablecoin-based cover
        pools for accurate risk management, we aim to attract a steady userbase
        and growing liquidity to the platform.
      </p>
      <p className='mb-6'>
        The NEP token is used by the platform for both governance and utility
        purposes.
      </p>

      <ul className='pl-6 list-disc list-outside mb-8'>
        <li>Use NEP to stake and create contracts and markets</li>
        <li>Burn NEP to create contracts and markets</li>
        <li>
          Use NEP to{' '}
          <a href={GOVERNANCE_URL} target='_blank' rel='noopener noreferrer'>
            vote in the governance
          </a>{' '}
          of the platform’s future
        </li>
        <li>
          Lock NEP to provide liquidity, secure the protocol, and yield
          additional rewards
        </li>
        <li>Hold NEP in your wallet to purchase and claim coverage</li>
      </ul>
      <OutlineLink
        href={GET_TOKENS_URL}
        external
        className='mb-4'
        data-sal-duration='400'
        data-sal='zoom-out'
      >
        Get nep tokens
      </OutlineLink>
    </div>
  )
}
