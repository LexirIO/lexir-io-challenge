import Image from 'next/image';
import Link from 'next/link';
import LinksList from './LinksList';
import Socials from './Socials';
import logo from '@assets/logo-transparent.png';

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

export default function index() {
	return (
		<footer className='bg-primary text-white'>
			<div className='max-w-[1280px] mx-auto px-8 pt-14 pb-12'>
				<div className='border-b border-secondary pb-12 flex items-start justify-between'>
					<Image src={logo} alt='lexir' />

					<div className='flex gap-16 lg:gap-24'>
						{linksList.map(list => (
							<LinksList key={list.id} {...list} />
						))}
					</div>

					<Socials />
				</div>

				<div className='pt-4 flex justify-between items-center'>
					<span className='text-base font-light'>&copy; 2022 Lexir Inc.</span>

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
	);
}
