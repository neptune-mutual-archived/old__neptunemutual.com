import * as React from 'react'
import { Address } from './address'
import { Content } from './content'
import { Links } from './links'

export const Footer = () => {
  return (
    <footer className='flex justify-center pt-12 md:pt-24 pb-12 md:pb-24'>
      <div className='w-full max-w-screen-2xl px-6 md:px-8 text-base md:text-lg text-gray-400'>
        <Links />
        <Address />
        <Content />
      </div>
    </footer>
  )
}
