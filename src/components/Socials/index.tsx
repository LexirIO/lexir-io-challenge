import Image from 'next/image';
import mediumIcon from '@assets/medium.svg';
import facebookIcon from '@assets/icons8-facebook 2.svg';
import instagramIcon from '@assets/icons8-instagram 2.svg';
import linkedinIcon from '@assets/linkedin.svg';

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
