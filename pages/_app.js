import Head from 'next/head';
import 'nouislider/distribute/nouislider.css';
import { useEffect, useState } from 'react';
// redux
import { Provider } from 'react-redux';
import SimpleReactLightbox from 'simple-react-lightbox';
import axios from 'axios';
// Css style
import '../public/styles/chart.css';
import '../public/styles/colors.css';
import '../public/styles/custom.css';
import '../public/styles/print.css';
import '../public/styles/style.css';
import '../public/styles/wizard.css';
import Layout from '../src/layouts/Layout';
// action
import { bodyArt, resizeWindow } from '../src/redux/action/utils';
import store from '../src/redux/store';

import { Web3Provider } from '../src/contexts/web3Context';

axios.defaults.baseURL = 'https://blockum.onrender.com/api';

function MyApp({ Component, pageProps }) {
  // const [doc, setDoc] = useState();
  const [pages, setPages] = useState();
  useEffect(() => {
    bodyArt();
    // setDoc(document);
    setPages(window.location.pathname);
    // resizeWindow();
    setPages(window.location.pathname);
    // window.addEventListener('resize', resizeWindow);
    // alert(window.location.pathname);
    // return () => window.removeEventListener('resize', resizeWindow);
  }, [pages]);

  return (
    <Provider store={store}>
      <Web3Provider>
        <SimpleReactLightbox>
          <Head>
            <title>Uena - Restaurant Admin Dashboard</title>
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/favicon.png"
            />
          </Head>
          {pages &&
          (window.location.pathname.includes('pages') ||
            window.location.pathname === '/') ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </SimpleReactLightbox>
      </Web3Provider>
    </Provider>
  );
}

export default MyApp;
