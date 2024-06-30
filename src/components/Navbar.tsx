import profile from '../assets/profile-1.jpg'

const Navbar = () => {
	return (
		<header className='w-full flex justify-between'>
			<div>
				<h1 className='font-[900] text-[#3c2a21] text-[2.3rem] md:pl-14 smy:hidden'>
					Analytics
				</h1>
			</div>
			<div className='flex items-center'>
				<div className='mr-5'>
					<p>
						Hey, <b>Reza</b>
					</p>
					<small className='text-[#7d8da1] cursor-pointer hover:text-[#F3005B] transition-all  duration-350'>
						Admin
					</small>
				</div>
				<div>
					<img src={profile} alt='profile' className='w-12 h-12 rounded-full' />
				</div>
			</div>
		</header>
	)
}

export default Navbar
