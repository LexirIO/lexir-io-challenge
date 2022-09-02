import Image from 'next/image';
import Link from 'next/link';

export default function NavItem({
	label,
	href,
	icon,
}: {
	label: string;
	href: string;
	icon?: any;
}) {
	return (
		<li>
			<Link href={href}>
				<a className='uppercase text-primary text-sm hover:text-secondary flex items-center gap-1'>
					{icon && <Image src={icon} alt={label} />}
					{label}
				</a>
			</Link>
		</li>
	);
}
