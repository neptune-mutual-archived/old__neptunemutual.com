import * as React from 'react'

import Seo from '../components/seo'
import { Helmet } from 'react-helmet'

import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Benefits } from '../components/benefits'
import { Footer } from '../components/footer'
import { ExchangeCover } from '../components/exchange-cover'

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <Helmet>
      <link rel='icon' href='/assets/icon-32.png' />
    </Helmet>
    <div>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <ExchangeCover />
      <Footer />
    </div>
  </>
)

export default IndexPage
