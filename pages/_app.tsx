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
                    href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="black"
                ></meta>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Script
                async
                src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"
            ></Script>
            <div
                id="snipcart"
                data-config-modal-style="side"
                data-api-key="OTAxMzc4MTAtYTllYy00ZTdkLTkxMTItMWE2ZWZiZjRlNzM5NjM3Njk0NTgyNDE3NzM2ODg2"
                hidden
            ></div>
        </>
    )
}
export default MyApp
