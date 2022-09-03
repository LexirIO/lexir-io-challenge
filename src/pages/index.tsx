import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// components
import BreadCrumb from '@components/BreadCrumb';
import QuantityIncrementer from '@components/QuantityIncrementer';
import Socials from '@components/Socials';

// assets
import logo from '@assets/logo.png';
import logoTransparent from '@assets/logo-transparent.png';
import userIcon from '@assets/user.svg';
import cartIcon from '@assets/cart.svg';
import kissMyRhubarbImg from '@assets/packshot-kiss-my-rhubarb.png';
import netherlandsIcon from '@assets/icons8-netherlands.svg';
import noseIcon from '@assets/nose.svg';
import tongueIcon from '@assets/tongue.svg';
import cocktailIcon from '@assets/cocktail.svg';
import partyIcon from '@assets/party.svg';
import cellarImg from '@assets/cellar.png';

// required for header
const navItems = [
	{ id: 1, label: 'Products', href: 'products' },
	{ id: 2, label: 'Brands', href: 'brands' },
	{ id: 3, label: 'Sign In', href: 'sign-in', icon: userIcon },
	{ id: 4, label: 'Cart', href: 'cart', icon: cartIcon },
];

// required for footer
const linksList = [
	{
		id: '0',
		heading: 'Community',
		sub: [
			{ id: '0', label: 'Lexir for Brands', href: '/' },
			{ id: '1', label: 'Business Buyers', href: '/' },
			{ id: '2', label: 'Sales Affiliates', href: '/' },
		],
	},
	{
		id: '1',
		heading: 'Platform',
		sub: [
			{ id: '0', label: 'Resources', href: '/' },
			{ id: '1', label: 'Pricing', href: '/' },
			{ id: '2', label: 'Get Started', href: '/' },
		],
	},
	{
		id: '2',
		heading: 'Company',
		sub: [
			{ id: '0', label: 'About', href: '/' },
			{ id: '1', label: 'Contact', href: '/' },
			{ id: '2', label: 'Legal', href: '/' },
		],
	},
	{
		id: '3',
		heading: 'Lexir Shop',
		sub: [
			{ id: '0', label: 'Brands', href: '/' },
			{ id: '1', label: 'Spirits', href: '/' },
			{ id: '2', label: 'Wine', href: '/' },
			{ id: '3', label: 'Blog', href: '/' },
		],
	},
];

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

			{/* header */}
			<header className='bg-white shadow'>
				<div className='max-w-[1280px] mx-auto px-8 py-10 flex justify-between items-center'>
					<Image src={logo} alt='lexir' />

					<nav>
						<ul className='flex items-center gap-10'>
							{navItems.map(({ id, href, label, icon }) => (
								<li key={id}>
									<Link href={href}>
										<a className='uppercase text-primary text-sm hover:text-secondary flex items-center gap-1'>
											{icon && <Image src={icon} alt={label} />}
											{label}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			{/* main */}
			<main className='max-w-[1280px] mx-auto px-8 pt-10'>
				<BreadCrumb />

				{/* top section */}
				<section className='flex gap-10 justify-between mb-24'>
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

				{/* mid section */}
				<section className='flex gap-10 justify-between mb-24'>
					<div className='w-7/12'>
						<h1 className='font-bold text-2xl mb-8'>Product Details</h1>

						<p className='max-w-[697px]'>
							Kiss My Rhubarb takes its origins from an old handwritten recipe
							from co-creators Niels&apos; and Wouters&apos; rebellious
							grandparents. Using carefully hand-selected stalks of rhubarb, and
							locally-sourced flowers and herbs, this summery aperitif perfectly
							expresses the brimming liveliness that characterizes the Belgian
							countryside in bloom.
							<br />
							<br />
							Kiss My Rhubarb is created in collaboration with local producers
							in Izegem that select only the freshest stalks of rhubarb using
							attentive and sustainable practices. By avoiding the pitfalls of
							overproduction and diminished flavour that large-scale harvesting
							methods can bring, Kiss My&apos;s careful foraging process results
							in an aperitif that emphasises the tangy juiciness of its primary
							ingredient.
						</p>
					</div>

					<aside className='flex-grow max-w-[380px]'>
						<div className='mb-10'>
							<h2 className='capitalize font-bold text-base mb-7'>
								tasting notes
							</h2>

							<div className='flex gap-5 lg:gap-9 mb-7'>
								<Image src={noseIcon} alt='smell' />

								<ul className='uppercase flex gap-3 items-center'>
									<li className='flex items-center gap-3'>Astringent</li>
									<li className='w-1 h-1 rounded-full bg-secondary'></li>
									<li className='flex items-center gap-3'>Fruity</li>
									<li className='w-1 h-1 rounded-full bg-secondary'></li>
									<li>Complex</li>
								</ul>
							</div>

							<div className='flex gap-4 lg:gap-8'>
								<Image src={tongueIcon} alt='smell' />

								<ul className='uppercase flex gap-3 items-center'>
									<li className='flex items-center gap-3'>BITTER</li>
									<li className='w-1 h-1 rounded-full bg-secondary'></li>
									<li className='flex items-center gap-3'>FLAMBOYANT</li>
									<li className='w-1 h-1 rounded-full bg-secondary'></li>
									<li>BRIGHT</li>
								</ul>
							</div>
						</div>

						<div className='mb-10'>
							<h2 className='font-bold text-base mb-5'>Flavour Intensity</h2>

							<ul className='grid grid-cols-5 gap-1'>
								<li className='w-full h-1 bg-primary'></li>
								<li className='w-full h-1 bg-primary'></li>
								<li className='w-full h-1 bg-primary'></li>
								<li className='w-full h-1 bg-grey-300'></li>
								<li className='w-full h-1 bg-grey-300'></li>
							</ul>
						</div>

						<div>
							<h2 className='font-bold text-base mb-6'>Suggested Use</h2>

							<div className='flex gap-3'>
								<span className='rounded bg-grey-100 flex items-center gap-3 px-3 py-2 text-xs'>
									In a cocktail <Image src={cocktailIcon} alt='cocktail' />
								</span>

								<span className='rounded bg-grey-100 flex items-center gap-3 px-3 py-2 text-xs'>
									At a party <Image src={partyIcon} alt='party' />
								</span>
							</div>
						</div>
					</aside>
				</section>

				{/* bot section */}
				<section className='grid grid-cols-2'>
					<div className='bg-grey-100 h-full flex flex-col justify-center gap-2 lg:gap-5 lg:px-8'>
						<h1 className='font-source-serif-pro font-bold text-5xl leading-[56px]'>
							Have a brand you&apos;d like to see on{' '}
							<span className='text-success'>Lexir</span>?
						</h1>

						<p className='text-black-100 mb-6'>
							Lexir is always looking to connect with new exciting craft brands
							from around the world. If you have a brand in mind that you&apos;d
							like to see on Lexir, let us know.
						</p>

						<button
							title='suggest a brand'
							className='bg-primary text-white py-3 w-[240px] text-center rounded font-bold'>
							Suggest a Brand
						</button>
					</div>

					<Image src={cellarImg} alt='cellar' />
				</section>
			</main>

			{/* footer */}
			<footer className='bg-primary text-white'>
				<div className='max-w-[1280px] mx-auto px-8 pt-14 pb-12'>
					<div className='border-b border-secondary pb-12 flex items-start justify-between'>
						<Image src={logoTransparent} alt='lexir' />

						<div className='flex gap-16 lg:gap-24'>
							{linksList.map(({ id, heading, sub }) => (
								<ul key={id} className='flex flex-col gap-5'>
									<li className='text-base leading-8 uppercase text-secondary font-semibold'>
										{heading}
									</li>

									{sub.map(link => (
										<li key={link.id}>
											<Link href={link.href}>
												<a>{link.label}</a>
											</Link>
										</li>
									))}
								</ul>
							))}
						</div>

						<Socials />
					</div>

					<div className='pt-4 flex justify-between items-center'>
						<span className='text-base font-light text-secondary'>
							&copy; 2022 Lexir Inc.
						</span>

						<ul className='flex items-center gap-14'>
							<li>
								<Link href='privacy'>
									<a className='text-base font-medium'>Privacy</a>
								</Link>
							</li>
							<li>
								<Link href='terms-of-service'>
									<a className='text-base font-medium'>Terms of service</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}
