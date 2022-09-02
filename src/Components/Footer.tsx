import Image from 'next/image'
import logo from '../public/logow.png'
import fb from '../public/fb.png'
import insta from '../public/insta.png'
import linkedin from '../public/linkedin.png'
import medium from '../public/medium.png'

export function Footer() {
  return (
    <div className='p-12  m-auto max-w-[1280px]'>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6 border-b pb-8 border-producttext">
            <div className='w-[50%] col-span-full sm:col-span-1' >
                <Image src={logo} alt='logo'/>
            </div>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h3 className='text-producttext'>COMMUNITY</h3>
                <span>Lexir for Brands</span>
                <span>Business Buyers</span>
                <span>Sales Affilliates</span>
            </div>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h3 className='text-producttext'>PLATFORM</h3>
                <span>Resources</span>
                <span>Pricing</span>
                <span>Get Started</span>
            </div>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h3 className='text-producttext'>COMPANY</h3>
                <span>About</span>
                <span>Contact</span>
                <span>Legal</span>
            </div>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h3 className='text-producttext'>LEXIR SHOP</h3>
                <span>Brands</span>
                <span>Spirits</span>
                <span>wine</span>
                <span>Blog</span>
            </div>
            <div className='flex items-start  sm:justify-self-end gap-2'>
                <Image src={medium} alt='medium'/>
                <Image src={fb} alt='fb'/>
                <Image src={insta} alt='fb'/>
                <Image src={linkedin} alt='linkedin'/>
            </div>
        </div>
        <div className='flex gap-8 justify-end py-4 text-sm text-white'>
            <span className='flex-grow'>© 2022 Lexir Inc.</span>
            <span>Privacy</span>
            <span>Terms of service</span>
        </div>
    </div>
  )
}
