import Image from 'next/image';
import homeIcon from '@assets/home.svg';
import arrowIcon from '@assets/right-half-arrow.svg';

export default function BreadCrumb() {
	return (
		<ul className='flex items-center gap-4 text-primary text-base leading-5 mb-14'>
			<li className='flex items-center gap-4'>
				<Image src={homeIcon} alt='home' /> Home
			</li>
			<li className='flex items-center gap-4'>
				<Image src={arrowIcon} alt='direction' /> Spirits
			</li>
			<li className='flex items-center gap-4'>
				<Image src={arrowIcon} alt='direction' /> Kiss My
			</li>
			<li className='flex items-center gap-4 font-bold'>
				<Image src={arrowIcon} alt='direction' /> Kiss My Rhubarb
			</li>
		</ul>
	);
}
