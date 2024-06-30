import { ProgressTypeData } from '../data'
import styles from '../styles/data.module.css'

const CardProgress = ({
	totalSales,
	cx,
	cy,
	r,
	percent,
	bg,
}: ProgressTypeData) => {
	return (
		<article className='w-[20vw] h-auto p-7 shadow-xl shadow-gray-300 flex items-center justify-between rounded-2xl cursor-pointer xl2:w-full'>
			<div>
				<h3 className='font-[600] text-[#3c2a21] text-lg'>Total Sales</h3>
				<strong className='font-[900] text-[#3c2a21] text-[1.8rem] lg:text-2xl'>
					{totalSales}
				</strong>
			</div>
			<div className='relative   rounded-full'>
				<svg className='w-[90px] h-[90px]'>
					<circle
						style={{ stroke: bg }}
						className={styles.progress}
						cx={cx}
						cy={cy}
						r={r}
					></circle>
				</svg>
				<div className='absolute top-[2rem] left-7 z-10'>
					<p className='text-[#3c2a21]'>{percent}%</p>
				</div>
			</div>
		</article>
	)
}

export default CardProgress
