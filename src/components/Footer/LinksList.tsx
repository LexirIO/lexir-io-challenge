import Link from 'next/link';

export default function LinksList({
	heading,
	sub,
}: {
	heading: string;
	sub: { id: string; label: string; href: string }[];
}) {
	return (
		<ul className='flex flex-col gap-5'>
			<li className='text-base leading-8 uppercase text-secondary font-semibold'>
				{heading}
			</li>

			{sub.map(link => (
				<li key={link.id}>
					<Link href={link.href}>
						<a>{link.label}</a>
					</Link>
				</li>
			))}
		</ul>
	);
}
