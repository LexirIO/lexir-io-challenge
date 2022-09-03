import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import BreadCrumb from '@components/BreadCrumb';
import QuantityIncrementer from '@components/QuantityIncrementer';
import Header from '@components/Header';
import Footer from '@components/Footer';
import kissMyRhubarbImg from '@assets/packshot-kiss-my-rhubarb.png';
import netherlandsIcon from '@assets/icons8-netherlands.svg';

const dummyData = {
	quantity: 2,
	inStock: 10,
	price: 115.165,
};
export default function Home() {
	const [quant, setQuant] = useState<number>(dummyData.quantity);
	const increment = () =>
		setQuant((prev: number) => {
			if (dummyData.inStock - prev !== 0) return prev + 1;
			return prev;
		});
	const decrement = () =>
		setQuant((prev: number) => {
			if (prev !== 1) return prev - 1;
			return prev;
		});

	return (
		<div className='App'>
			<Head>
				<title>Lexir Frontend Assessment!</title>
				<meta name='description' content='Lexir Frontend Assessment!' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className='max-w-[1280px] mx-auto px-8 py-10'>
				<BreadCrumb />

				<section className='flex gap-10 justify-between'>
					<div className='w-7/12 max-w-[748px] h-[488px] bg-grey-100 border border-grey-200 flex justify-center items-center'>
						<Image src={kissMyRhubarbImg} alt='kiss my rhubarb' />
					</div>

					<aside className='flex-grow max-w-[380px]'>
						<h1 className='font-source-serif-pro font-bold text-primary text-5xl whitespace-nowrap'>
							Kiss My Rhubarb
						</h1>
						<span className='text-grey-400 uppercase font-bold text-xl mb-8 block'>
							APERITIF
						</span>

						<div className='flex justify-between items-center mb-3'>
							<h2 className='uppercase flex items-center gap-3 font-bold text-base text-primary'>
								<Image src={netherlandsIcon} alt='belgium' /> Izegem Belgium
							</h2>

							<span className='block text-base uppercase font-bold'>
								21% ABV
							</span>
						</div>

						<p className='text-base leading-6 pr-1 text-primary mb-20'>
							Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses
							bright and zesty supporting ingredients like pink grapefruit and
							lemon verbena to create an aperitif perfectly designed to pair
							with hot summery nights.
						</p>

						<div className='flex items-center justify-between h-12 mb-3'>
							<span className='w-7/12 h-full border border-secondary-light flex items-center justify-center'>
								700ml
							</span>

							<QuantityIncrementer {...{ quant, decrement, increment }} />
						</div>

						<button
							title='add to cart'
							className='bg-primary text-white w-full flex justify-between items-center px-10 py-3 rounded'>
							<span>Add to Cart</span>
							<span>${(dummyData.price * quant).toFixed(2)}</span>
						</button>
					</aside>
				</section>
			</main>

			<Footer />
		</div>
	);
}
