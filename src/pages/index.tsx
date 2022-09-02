import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
	return (
		<div className='App'>
			<Head>
				<title>Lexir Frontend Assessment!</title>
				<meta name='description' content='Lexir Frontend Assessment!' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main></main>

			<Footer />
		</div>
	);
}
