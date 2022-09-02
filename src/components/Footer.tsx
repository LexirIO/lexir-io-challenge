import Image from 'next/image'

import logoWhite from '../assets/images/logo-white.svg'
import mediumIcon from '../assets/images/medium.png'
import facebookIcon from '../assets/images/facebook.png'
import instagramIcon from '../assets/images/instagram.png'
import linkedInIcon from '../assets/images/linkedin.png'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return(
    <div className={`flex flex-col w-full ${styles.footer}`}>
      <div className='flex w-full flex-wrap pt-10 pb-5 px-9'>
        <div className='flex w-1/5'>
          <div className='flex h-max'>
            <Image
              src={logoWhite}
              alt="Logo"
              width="105"
              height="24"
              className="mr-3 h-6"
            />
          </div>
        </div>

        <div className='flex w-3/5'>
          <div className='flex flex-col w-1/4'>
            <h4 className={`text-base uppercase ${styles.footerTitlesColor}`}>COMMUNITY</h4>
            <p className='text-white mt-5 capitalize'>Lexit for brands</p>
            <p className='text-white mt-5 capitalize'>Business Buyers</p>
            <p className='text-white mt-5 capitalize'>Sales Affiliates</p>
          </div>
          <div className='flex flex-col w-1/4'>
            <h4 className={`text-base uppercase ${styles.footerTitlesColor}`}>Platform</h4>
            <p className='text-white mt-5 capitalize'>Resources</p>
            <p className='text-white mt-5 capitalize'>Pricing</p>
            <p className='text-white mt-5 capitalize'>Get Started</p>
          </div>
          <div className='flex flex-col w-1/4'>
            <h4 className={`text-base uppercase ${styles.footerTitlesColor}`}>Company</h4>
            <p className='text-white mt-5 capitalize'>About</p>
            <p className='text-white mt-5 capitalize'>Contact</p>
            <p className='text-white mt-5 capitalize'>Legal</p>
          </div>
          <div className='flex flex-col w-1/4'>
            <h4 className={`text-base uppercase ${styles.footerTitlesColor}`}>Lexir Shop</h4>
            <p className='text-white mt-5 capitalize'>Brands</p>
            <p className='text-white mt-5 capitalize'>Spirits</p>
            <p className='text-white mt-5 capitalize'>Wine</p>
            <p className='text-white mt-5 capitalize'>Blog</p>
          </div>
        </div>

        <div className='flex flex-row w-1/5 justify-end'>
          <div className='flex h-max'>
            <img src={mediumIcon.src} alt="medium" className='mr-5' />
            <img src={facebookIcon.src} alt="facebook" className='mr-5' />
            <img src={instagramIcon.src} alt="instagram" className='mr-5' />
            <img src={linkedInIcon.src} alt="linkedin" />
          </div>
        </div>
      </div>

      <div className='flex w-full px-9 pt-10 pb-2'>
        <hr className={`w-full ${styles.hrColor}`} />
      </div>
      <div className='flex justify-between px-9 mb-5'>
        <div className='flex'>
          <p className='font-base text-white'>© 2022 Lexir Inc.</p>
        </div>
        <div className='flex justify-end'>
          <p className='font-base text-white mr-16'>Privacy</p>
          <p className='font-base text-white'>Terms of service</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
