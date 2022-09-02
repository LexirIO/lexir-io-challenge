import React, { FC } from 'react';
import { IBottlesProps } from '../types/bottles';
import { $api } from '@components/../servise/apiService';
import Head from 'next/head';
import Header from '@components/Header';
import LeftContent from '@components/LeftContent';
import RightContent from '@components/RightContent';
import Footer from '@components/Footer';

const Home: FC<IBottlesProps> = ({ bottles }) => {

  return (
    <>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/src/public/favicon.ico" />
      </Head>
      <div className="container xl mx-auto">
        <main className="container">
          <Header />
          <div className="mt-10 flex px-8">
            <LeftContent />
            <RightContent bottles={bottles} />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await $api.get('api/bottles');
  const data = res.data;
  return {
    props: { bottles: data }, // will be passed to the page component as props
  };
}
