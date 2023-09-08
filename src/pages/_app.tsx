import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
      >
            <Navigation links={[{label: "Home", link: "/"}, {label: "Join", link: "/join"}, {label: "Our Team", link: "/team"}]} />
        <Component {...pageProps} />
        <Footer links={[{label: "Home", link: "/home"}, {label: "Join", link: "/join"}, {label: "Our Team", link: "/team"}]} />
      </MantineProvider>
    </>
  );
}