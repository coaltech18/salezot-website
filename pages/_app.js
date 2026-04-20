import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Salezot — Conversation intelligence for Indian SaaS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div data-palette="neon" data-font="archivo">
        <Component {...pageProps} />
      </div>
    </>
  );
}
