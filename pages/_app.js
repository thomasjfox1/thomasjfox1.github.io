import Head from 'next/head';

import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

import './styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Thomas J. Fox</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Thomas J. Fox is a Senior Software Engineering Manager based in Chicago, IL."/>
        <meta name="author" content="Thomas J. Fox"/>
        <meta name="keywords" content="Thomas J. Fox Software Development Engineer Web Developer Senior Engineering Manager Chicago"/>
        <meta property="og:title" content="Thomas J. Fox" />
        <meta property="og:image" content="https://thomasjfox.xyz/media/images/portrait.jpg" />
      </Head>
      <Layout
        Navigation={Navigation}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;