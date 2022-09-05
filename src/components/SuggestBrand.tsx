import Image from 'next/image';
import cn from 'classnames';
import bottles from '../assets/images/bottles.png';
import { useIsDesktop } from './context/DesktopWidthProvider';

export default function SuggestBrand() {
  const {isDesktop} = useIsDesktop();

  return (
    <section className={cn("max-w-7xl mx-auto px-8 pt-10 grid gap-4",
      {'grid-cols-2': isDesktop})}
    >
      <div className={cn("flex flex-col justify-center",
        {'pl-8 py-4': isDesktop, 'py-4': !isDesktop})}
      >
        <h2 className="font-sourceSerif text-5xl leading-extra" >
          Have a brand you’d like to see on <span className="text-success">Lexir</span>?
        </h2>
        <p className="font-regular text-base leading-6 mt-6">
          Lexir is always looking to connect with new exciting craft brands
          from around the world. If you have a brand in mind that
          you&apos;d like to see on Lexir, let us know.
        </p>
        <button 
          type="button"
          className="bg-primary w-60 text-white py-3 rounded mt-7
            transition-color duration-500 hover:bg-fadeGray"
        >
          Suggest a Brand
        </button>
      </div>
      <Image src={bottles} alt="bottles on a shelf" className="object-contain" />
    </section>
  )
}
