import Image from 'next/image'

import productImg1 from '../assets/images/products/mr-gaston-1.png'
import productImg2 from '../assets/images/products/mr-gaston-2.png'
import productImg3 from '../assets/images/products/mr-gaston-3.png'
import productImg4 from '../assets/images/products/mr-gaston-4.png'
import addToCardIcon from '../assets/images/products/addToCardIcon.png'

import styles from '../styles/Products.module.css'

const Products = () => {
  return(
    <div className="flex w-8/12">
      <div className="flex flex-row flex-wrap w-full h-auto">

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg1.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 1</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg2.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 2</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg3.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 3</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg4.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 4</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg1.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 1</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg2.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 2</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg3.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 3</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg4.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 4</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg1.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 1</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg2.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 2</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg3.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 3</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.productItems}`}>
          <div className={`flex justify-center items-center ${styles.productImgContent}`}>
            <img src={productImg4.src} alt="product image" />
          </div>
          <div className={`flex flex-col ${styles.productMainContent}`}>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-black'>mr gaston 4</p>
              <span className='font-base text-slate-600'>€32</span>
            </div>
            <div className='flex flex-row items-center justify-between px-2.5 mt-2'>
              <p className='uppercase font-base font-bold text-slate-600'>brandy</p>
              <Image
                src={addToCardIcon}
                alt="Logo"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products
