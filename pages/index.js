import Head from 'next/head'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Benefits } from '../components/benefits'
import { Collaborate } from '../components/collaborate'
import { Roadmap } from '../components/roadmap'
import { Technologies } from '../components/technologies'
import { Footer } from '../components/footer'
import styles from '../styles/Home.module.css'
import { ExchangeCover } from '../components/exchange-cover'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <Head>
        <title>Neptune Mutual</title>
        <link rel='icon' href='/assets/icon-32.png' />
      </Head>
      <div className={styles.container}>
        <Header />
        <Hero />
        <About />
        <Benefits />
        <ExchangeCover />
        <Collaborate />
        <Roadmap />
        <Technologies />
        <Footer />
      </div>
    </>
  )
}
