import Image from 'next/image';
import cn from 'classnames';
import tongue from '../assets/images/tongue.svg';
import nose from '../assets/images/nose.svg';
import cocktail from '../assets/images/cocktail.svg';
import party from '../assets/images/party.svg';
import { useIsDesktop } from './context/DesktopWidthProvider';

export default function ProductDetails() {
  const { isDesktop } = useIsDesktop();

  return (
    <section className={cn("max-w-7xl mx-auto px-8 py-10 grid gap-20", {'grid-cols-twoToOne': isDesktop})}>
      <article className="flex flex-col gap-8">
        <h2 className="font-bold text-xl">
          Product Details
        </h2>
        <p className="font-regular text-base">
          Kiss My Rhubarb takes its origins from an old handwritten recipe
          from co-creators Niels’ and Wouters’ rebellious grandparents.
          Using carefully hand-selected stalks of rhubarb, and locally-sourced
          flowers and herbs, this summery aperitif perfectly expresses the
          brimming liveliness that characterizes the Belgian
          countryside in bloom.
        </p>
        <p className="font-regular text-base">
          Kiss My Rhubarb is created in collaboration with local producers
          in Izegem that select only the freshest stalks of rhubarb using
          attentive and sustainable practices. By avoiding the pitfalls
          of overproduction and diminished flavour that large-scale harvesting
          methods can bring, Kiss My’s careful foraging process results in an
          aperitif that emphasises the tangy juiciness of its
          primary ingredient.
        </p>
      </article>

      <article className="flex flex-col gap-8">
        <h3 className="font-bold text-base leading-5">Testing Notes</h3>
        <div className="flex items-center">
          <Image src={nose} alt="nose" />
          <span className="ml-10">ASTRIENGENT</span>
          <div className="w-1 h-1 bg-lightGray2 rounded mx-2" />
          <span>FRUITY</span>
          <div className="w-1 h-1 bg-lightGray2 rounded mx-2" />
          <span>COMPLEX</span>
        </div>
        <div className="flex items-center">
          <Image src={tongue} alt="nose" />
          <span className="ml-10">BITTER</span>
          <div className="w-1 h-1 bg-lightGray2 rounded mx-2" />
          <span>FLAMBOYANT</span>
          <div className="w-1 h-1 bg-lightGray2 rounded mx-2" />
          <span>BRIGHT</span>
        </div>
        <h3 className="font-bold text-base leading-5">Flavour Intensity</h3>
        <div className="flex gap-1">
          <div className="grow bg-primary h-0.5" />
          <div className="grow bg-primary h-0.5" />
          <div className="grow bg-primary h-0.5" />
          <div className="grow bg-lightGray h-0.5" />
          <div className="grow bg-lightGray h-0.5" />
        </div>
        <h3 className="font-bold text-base leading-5">Suggested Use</h3>
        <div className="flex gap-1">
          <div className="px-2 py-1.5 flex gap-2.5 items-center bg-lightGray1" >
            <p className="font-regular text-xs leading-5" >In a cocktail</p>
            <Image src={cocktail} alt="coctail image" className="object-contain" />
          </div>
          <div className="px-2 py-1.5 flex gap-2.5 items-center bg-lightGray1" >
            <p className="font-regular text-xs leading-5">At a party</p>
            <Image src={party} alt="party image" className="object-contain" />
          </div>
        </div>
      </article>
    </section>
  )
}
