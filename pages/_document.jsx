import Document, { Html, Head, Main, NextScript } from 'next/document'
import { imgs as sliderImages } from '../components/hero/carousel'
import { data as manageRiskData } from '../components/benefits/tabs/manage-risk'
import { data as provideLiquidityData } from '../components/benefits/tabs/provide-liquidity'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {sliderImages.map(x=>{
            return <link rel="preload" href={x.src} as='image' />
          })}
          {manageRiskData.map(x=>{
            return <link rel="preload" href={x.iconSrc} as='image' />
          })}
          {provideLiquidityData.map(x=>{
            return <link rel="preload" href={x.iconSrc} as='image' />
          })}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
          <noscript>
            <link
              rel='preconnect'
              href='https://fonts.gstatic.com'
              crossOrigin='true'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
              rel='stylesheet'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
              rel='stylesheet'
            />
          </noscript>
        </Head>
        <body className='w-full'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
