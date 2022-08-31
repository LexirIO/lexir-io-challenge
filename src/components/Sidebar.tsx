import Image from 'next/image'

import baldoriaLogo from '../assets/images/baldoria-logo.png'
import locationIcon from '../assets/images/location-icon.png'
import productIcon from '../assets/images/product-icon.png'
import styles from '../styles/Sidebar.module.css'

const Sidebar = () => {
  return(
    <div className="w-4/12 px-3">
      <div className={`flex flex-col justify-items-center items-center w-full h-auto pt-5 pb-6 ${styles.sidebar}`}>
        <Image
          src={baldoriaLogo}
          alt="Logo"
          width="215"
          height="76"
        />
        <div className='mt-16 mb-16 px-8'>
          <h3 className={`font-bold text-3xl px-2 mb-5 ${styles.ls}`}>Baldoria Vermouth</h3>
          <p className='px-2 mb-8'>
            Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents.
          </p>
          <p className={`text-base font-bold text-center capitalize ${styles.readMore}`}>Read more</p>
        </div>

        <div className='flex w-full flex-col'>
          <div className='flex flex-row w-full px-3 mb-10'>
            <div className='h-auto'>
              <Image
                src={locationIcon}
                alt="Location Icon"
                width="24"
                height="24"
              />
            </div>
            <div className='ml-4'>
              <p className='text-sm text-black'>Location</p>
              <p className='text-base text-slate-600'>London, United Kingdom</p>
            </div>
          </div>
          <div className='flex flex-row w-full px-3 mb-10'>
            <div className='h-auto'>
              <Image
                src={productIcon}
                alt="Product Icon"
                width="24"
                height="24"
              />
            </div>
            <div className='ml-4'>
              <p className='text-sm text-black'>Product Categories</p>
              <div className='flex flex-row flex-wrap mt-3'>
                <span className={`mr-2 ${styles.productCategories}`}>Gin</span>
                <span className={`mr-2 ${styles.productCategories}`}>Vodka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
