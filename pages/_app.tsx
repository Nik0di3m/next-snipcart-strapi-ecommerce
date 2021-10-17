import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="preconnect"
                    href="https://app.snipcart.com"
                />
                <link
                    rel="preconnect"
                    href="https://cdn.snipcart.com"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Script
                async
                src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
            ></Script>
            <div
                hidden
                id="snipcart"
                data-api-key="OTAxMzc4MTAtYTllYy00ZTdkLTkxMTItMWE2ZWZiZjRlNzM5NjM3Njk0NTgyNDE3NzM2ODg2"
            ></div>
        </>
    )
}
export default MyApp
