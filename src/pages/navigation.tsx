import Image from 'next/image';
import Link from 'next/link';

import Logo from '../assets/logo.png';
import CartIcon from '../assets/cart-icon.png';
import ProfileIcon from '../assets/profile-icon.png';

const Navigation = () => {
    return (
        <>
            <header className='flex justify-between items-center font-lato h-28 shadow uppercase font-medium text-sm'>
                <div  className='ml-9'>
                    <Link href='/'>
                        <a>
                            <Image src={Logo} alt='Logo' />
                        </a>
                    </Link>
                </div>

                <div className='flex justify-evenly mr-9'>
                    <div className='mr-5'>
                        <Link href='/products'>Products</Link>
                    </div>

                    <div className='mx-5'>
                        <Link href='/brands'>Brands</Link>
                    </div>

                    <div className='flex items-center mx-5'>
                        <Image src={ProfileIcon} alt='Profile Icon' />
                        <div className='ml-2.5'>
                            <Link href='/signIn'>Sign In</Link>
                        </div>
                    </div>

                    <div className='flex items-center ml-5'>
                            <Image src={CartIcon} alt='Logo' />
                            <div className='ml-2.5'>
                                <Link href='/cart'>
                                    Cart
                                </Link>
                            </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navigation;