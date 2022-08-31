/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head';

import ProductsPage from './BrandPage';

export default function Home(): JSX.Element {
  return (
    <div className="main-wrapper">
      <Head>
        <title>Lexir Frontend Assessment | Harun Guven</title>
        <meta
          name="description"
          content="Lexir Frontend Assessment of Harun Guven"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* My App Starts Here */}
      <ProductsPage />
    </div>
  );
}
