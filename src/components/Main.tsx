import { AiFillSound } from 'react-icons/ai'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { LiaPenSolid } from 'react-icons/lia'
import { LuPlus } from 'react-icons/lu'
import logo from '../assets/logo.svg'
import { progressData, usersData } from '../data'
import styles from '../styles/data.module.css'
import CardProgress from './CardProgress'
import Navbar from './Navbar'
import { Table } from './Table'

type ReminderType = {
	icon: JSX.Element
	color: string
}

const reminders: ReminderType[] = [
	{
		icon: <AiFillSound className='w-[25px] h-[22px] text-white ' />,
		color: 'bg-[#1B9C85]',
	},
	{
		icon: <LiaPenSolid className='w-[25px] h-[22px] text-white' />,
		color: 'bg-[#F3005B]',
	},
]

const Main = () => {
	return (
		<main className='py-5 px-8 w-full md:px-2'>
			<Navbar />
			<section className='flex items-start space-x-5 lg:flex-col md:space-x-0'>
				<div className='w-full'>
					<div className='flex space-x-6 xl2:flex-col xl2:space-x-0'>
						{progressData.map(item => (
							<CardProgress key={item.percent} {...item} />
						))}
					</div>
					<h2 className='font-[600] text-[#3c2a21] text-2xl py-8'>New Users</h2>
					<div className='w-full h-auto p-7 shadow-xl shadow-gray-300 flex justify-between items-center rounded-2xl cursor-pointer lg:grid grid-cols-2'>
						{usersData.map(user => (
							<div className='w-auto flex items-center flex-col gap-5'>
								<img
									src={user.avatar}
									alt='avatar'
									className='w-[110px] h-[110px] object-cover rounded-full xl:w-[80px] xl:h-[80px]'
								/>
								<div className='text-center mt-2 xl:mt-0'>
									<b className='font-[400] text-2xl text-[#3c2a21] xl: text-[1.3rem]'>
										{user.name}
									</b>
									<p className='text-[#8D9BAD]'>{user.active}</p>
								</div>
							</div>
						))}
					</div>
					<h2 className='font-[600] text-[#3c2a21] text-2xl py-4'>
						Recent Order
					</h2>
					<Table />
				</div>
				<div className='lg:w-full'>
					<div
						className={`w-[23rem] h-auto p-7 shadow-xl shadow-gray-300 flex items-center flex-col rounded-2xl cursor-pointer  ${styles.profile}`}
					>
						<img src={logo} alt='logo' className='w-52 h-52 text-[#F3005B]' />
						<div className='text-center'>
							<h3 className='font-[600] text-[#3c2a21] text-2xl'>AliProg</h3>
							<p className='font-[300] text-[#3c2a21] text-md'>
								Frontend Developer
							</p>
						</div>
					</div>
					<div className='w-full'>
						<h2 className='font-[600] text-[#3c2a21] text-2xl py-8'>
							Reminders
						</h2>
						<div className='w-full space-y-3'>
							{reminders.map(remin => (
								<div
									className={`w-[23rem] h-auto p-7 shadow-xl shadow-gray-300 flex justify-between items-center cursor-pointer ${styles.reminderCard}`}
								>
									<div className='flex items-center space-x-3 '>
										<div className={`${remin.color} py-3 px-3 rounded-lg`}>
											{remin.icon}
										</div>
										<div>
											<b className='font-[600] text-[#3c2a21]'>Warkshop</b>
											<p className='text-[#8D9BAD] text-sm'>
												0:8:00 AM-12:00 PM
											</p>
										</div>
									</div>
									<button>
										<FaEllipsisVertical className='text-[#3c2a21] w-[25px] h-[22px] ' />
									</button>
								</div>
							))}
							<div
								className={`w-[23rem] h-auto p-5 shadow-xl shadow-gray-300  cursor-pointer border-[2.6px] 
									text-[#8D9BAD] border-dotted border-[#8D9BAD] rounded-xl hover:bg-[#8D9BAD]  hover:text-white transition duration-300 ${styles.button}`}
							>
								<button className='flex items-center justify-center w-full  gap-3 font-bold '>
									<LuPlus className='w-[25px] h-[25px]' /> Add Reminder
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Main
