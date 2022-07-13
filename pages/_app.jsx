import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stripe.js Payment Next.js App</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Description" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png"></link>
        <link
          href="/icons/icon-152x152.png"
          rel="apple-touch-icon-precomposed"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
