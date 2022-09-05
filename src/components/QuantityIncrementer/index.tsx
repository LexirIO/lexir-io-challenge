import Image from 'next/image';
import minusIcon from '@assets/svg/minus.svg';
import plusIcon from '@assets/svg/plus.svg';

export default function QuantityIncrementer({
	quant,
	increment,
	decrement,
}: {
	quant: number;
	increment: () => void;
	decrement: () => void;
}) {
	return (
		<div className='w-4/12 h-full border border-secondary-light flex'>
			<button
				title='minus'
				className='flex items-center justify-center w-[36%] border-r border-secondary-light'
				onClick={decrement}>
				<Image src={minusIcon} alt='minus' />
			</button>
			<span className='flex-grow flex items-center justify-center'>
				{quant}
			</span>
			<button
				title='plus'
				className='flex items-center justify-center w-[36%] border-l border-secondary-light'
				onClick={increment}>
				<Image src={plusIcon} alt='plus' />
			</button>
		</div>
	);
}
