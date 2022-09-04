import Image from 'next/image';
import cn from 'classnames';
import bottles from '../assets/images/bottles.png';

type Props = {
  isDesktop: boolean;
};

export default function SuggestBrand({isDesktop}: Props) {
  return (
    <section className={cn("max-w-7xl mx-auto px-8 py-10 grid gap-4", {'grid-cols-2': isDesktop})} >
      <div className="pl-8 flex flex-col justify-center">
        <h2 className="font-sourceSerif text-5xl leading-extra" >
          Have a brand you’d like to see on <span className="text-success">Lexir</span>?
        </h2>
        <p className="font-regular text-base leading-6 mt-6">
          Lexir is always looking to connect with new exciting craft brands
          from around the world. If you have a brand in mind that
          you'd like to see on Lexir, let us know.
        </p>
        <button type="button" className="bg-primary w-60 text-white py-3 rounded mt-7">
          Suggest a Brand
        </button>
      </div>
      <Image src={bottles} alt="bottles on a shelf"/>
    </section>
  )
}
