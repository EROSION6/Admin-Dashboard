import { useState } from 'react'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TfiClose } from 'react-icons/tfi'
import logo from '../assets/logo.svg'
import { navigation } from '../data'
import styles from '../styles/data.module.css'

const SideBar = () => {
	const [isActive, setIsActive] = useState<number>(4)
	const [isOpen, setIsOpen] = useState<boolean>(true)
	return (
		<aside className='h-full py-5 pl-8 md:px-0 md:py-0'>
			<button
				onClick={() => setIsOpen(true)}
				className={`text-[#7d8da1] absolute hidden left-3 top-8 md:block ${
					isOpen ? 'hidden' : ''
				}`}
			>
				<RxHamburgerMenu className='w-[35px] h-[35px]' />
			</button>

			<div
				className={`flex flex-col justify-between h-full w-[14rem] bg-white shadow-xl shadow-gray-300 rounded-2xl py-2 lg:w-[5rem] md:rounded-none md:fixed top-0 z-10 ${
					isOpen ? 'translate-x-0' : '-translate-x-[150%]'
				} transition-transform duration-300 ease-in-out ${styles.sidebar}`}
			>
				<div className='space-y-8'>
					<div className='flex items-center justify-center space-x-2'>
						<img className='w-[40px] h-[40px]' src={logo} alt='logo' />
						<h2 className='font-[700] text-[#3c2a21] text-[1.6rem] lg:hidden '>
							Ali<span className='text-[#F3005B]'>Prog</span>
						</h2>
						<button
							onClick={() => setIsOpen(false)}
							className={`text-[#7d8da1] hidden md:block absolute left-[14rem] top-[50%] z-10 ${
								isOpen ? 'block' : ''
							}`}
						>
							<TfiClose className='w-[25px] h-[25px] hover:rotate-180 hover:transition-all hover:delay-350' />
						</button>
					</div>
					<div className='flex w-full justify-center'>
						<ul className='space-y-8'>
							{navigation.map((item, i) => (
								<li
									onClick={() => setIsActive(i)}
									className={`flex items-center cursor-pointer space-x-4 text-[#7d8da1] hover:translate-x-2 transition duration-350 ${
										isActive === i ? 'text-[#F3005B] translate-x-2 ' : ''
									}`}
									key={i}
								>
									<span>{item.icon}</span>
									<a className='text-md font-[500]  lg:hidden' href='#'>
										{item.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<a
					href='#'
					className='flex items-center justify-center text-[#7d8da1] text-center md:justify-center font-[500]'
				>
					<RiLogoutBoxRLine className='mr-3 w-[25px] h-[25px] lg:mr-0' />
					<span className='lg:hidden'>Logout</span>
				</a>
			</div>
		</aside>
	)
}

export default SideBar
