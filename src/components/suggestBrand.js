import Image from 'next/image'
import Cottonbro from '../assets/Images/pexels-cottonbro-4254032.png'

const SuggestBrand = () => {
    return (
        <section className="flex justify-center lg:mt-28">
            <div className='flex flex-col lg:flex-row px-8'>
            <div className='w-full lg:w-2/4 py-12 px-8 bg-background'>
                <h3 className='text-5xl font-Source-Sans-Pro-Bold leading-extra-loose'>
                Have a brand you&apos;d like to see on <span className='text-success font-Source-Sans-Pro-Bold'>Lexir</span>?
                </h3>
                <p className='mt-6 text-base'>
                Lexir is always looking to connect with new exciting craft brands from around the world. If you have a brand in mind that you&apos;d like to see on Lexir, let us know.
                </p>
                <button className='w-60 h-12 bg-primary text-white rounded-md flex justify-center items-center px-10 text-base mt-8 hover:shadow-primary/60 hover:shadow-lg'>
                Suggest a Brand
                </button>
            </div>
            <div className='w-full lg:w-2/4 relative min-h-[394px]'>
                <Image src={Cottonbro.src} alt="Cottonbro" layout='fill' objectFit='cover' priority/>
            </div>
            </div>
        </section>
    )
}

export default SuggestBrand