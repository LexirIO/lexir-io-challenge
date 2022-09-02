import Image from 'next/image';
import logo from '@assets/logo.png';
import userIcon from '@assets/user.svg';
import cartIcon from '@assets/cart.svg';
import NavItem from './NavItem';

const navItems = [
	{ id: 1, label: 'Products', href: 'products' },
	{ id: 2, label: 'Brands', href: 'brands' },
	{ id: 3, label: 'Sign In', href: 'sign-in', icon: userIcon },
	{ id: 4, label: 'Cart', href: 'cart', icon: cartIcon },
];

export default function Header() {
	return (
		<header className='bg-white shadow'>
			<div className='max-w-[1280px] mx-auto px-8 py-10 flex justify-between items-center'>
				<Image src={logo} alt='lexir' />

				<nav>
					<ul className='flex items-center gap-10'>
						{navItems.map(item => (
							<NavItem key={item.id} {...item} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
