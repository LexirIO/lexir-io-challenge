import Image from 'next/image';
import mediumIcon from '@assets/svg/medium.svg';
import facebookIcon from '@assets/svg/icons8-facebook.svg';
import instagramIcon from '@assets/svg/icons8-instagram.svg';
import linkedinIcon from '@assets/svg/linkedin.svg';

export default function Socials() {
	return (
		<ul className='flex items-center gap-4'>
			<li>
				<a href=''>
					<Image src={mediumIcon} alt='medium' />
				</a>
			</li>
			<li>
				<a href=''>
					<Image src={facebookIcon} alt='facebook' />
				</a>
			</li>
			<li>
				<a href=''>
					<Image src={instagramIcon} alt='instagram' />
				</a>
			</li>
			<li>
				<a href=''>
					<Image src={linkedinIcon} alt='linkedin' />
				</a>
			</li>
		</ul>
	);
}
