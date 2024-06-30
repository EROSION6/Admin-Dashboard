import { TABLE_HEAD, TABLE_ROWS } from '../data'
import styles from '../styles/data.module.css'

export function Table() {
	return (
		<div className='h-full w-full p-7 shadow-xl shadow-gray-300 rounded-2xl cursor-pointer '>
			<table className='w-full min-w-max table-auto text-left'>
				<thead>
					<tr>
						{TABLE_HEAD.map(head => (
							<th
								key={head}
								className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4 ${styles.table}`}
							>
								<p className='font-normal leading-none opacity-70'>{head}</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{TABLE_ROWS.map(table => (
						<tr key={table.name}>
							<td className='p-4 border-b border-blue-gray-50'>
								<p className='font-normal'>{table.name}</p>
							</td>
							<td className='p-4 border-b border-blue-gray-50'>
								<p className='font-normal'>{table.job}</p>
							</td>
							<td className='p-4 border-b border-blue-gray-50 md:hidden'>
								<p className='font-normal'>{table.date}</p>
							</td>
							<td className='p-4 border-b border-blue-gray-50'>
								<p className={`font-normal ${table.color}`}>{table.status}</p>
							</td>
							<td className='p-4 border-b border-blue-gray-50 md:hidden'>
								<p className='font-medium'>Details</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
