import { CiUser } from 'react-icons/ci'
import { GoPlus } from 'react-icons/go'
import { IoMdSettings } from 'react-icons/io'
import { IoAnalytics } from 'react-icons/io5'
import { LiaClipboardListSolid } from 'react-icons/lia'
import { MdDashboard, MdErrorOutline, MdHistoryEdu } from 'react-icons/md'
import { RxEnvelopeClosed } from 'react-icons/rx'
import plus from '../assets/plus.png'
import jace from '../assets/profile-2.jpg'
import amir from '../assets/profile-3.jpg'
import ember from '../assets/profile-4.jpg'

type NavigationItem = {
	icon: JSX.Element
	title: string
}

export type ProgressTypeData = {
	totalSales: string
	cx: number
	cy: number
	r: number
	percent: number
	bg: string
}

type UserTypeData = {
	name: string
	active: string
	avatar: string
}

type TableRowsData = {
	name: string
	job: string
	date: string
	status: string
	color: string
}

export const navigation: NavigationItem[] = [
	{
		icon: <MdDashboard />,
		title: 'Dashboard',
	},
	{ icon: <CiUser />, title: 'Users' },
	{
		icon: <MdHistoryEdu />,
		title: 'History',
	},
	{
		icon: <IoAnalytics />,
		title: 'Analytics',
	},
	{
		icon: <RxEnvelopeClosed />,
		title: 'Tickets',
	},
	{
		icon: <LiaClipboardListSolid />,
		title: 'Sale List',
	},
	{
		icon: <MdErrorOutline />,
		title: 'Reports',
	},
	{
		icon: <IoMdSettings />,
		title: 'Settings',
	},
	{ icon: <GoPlus />, title: 'New Login' },
]

export const progressData: ProgressTypeData[] = [
	{
		totalSales: '$65,024',
		cx: 38,
		cy: 38,
		r: 36,
		percent: 81,
		bg: '#1b9c85',
	},
	{
		totalSales: '$24,981',
		cx: 38,
		cy: 38,
		r: 36,
		percent: -48,
		bg: '#F3005B',
	},
	{
		totalSales: '$14,147',
		cx: 38,
		cy: 38,
		r: 36,
		percent: +21,
		bg: '#1349bf',
	},
]

export const usersData: UserTypeData[] = [
	{ name: 'Jake', avatar: jace, active: '54 Min Ago' },
	{ name: 'Amir', avatar: amir, active: '3 Hours Ago' },
	{ name: 'Ember', avatar: ember, active: '6 Hours Ago' },
	{ name: 'More', avatar: plus, active: 'New User' },
]

export const TABLE_HEAD: string[] = ['Name', 'Job', 'Employed', 'Status']

export const TABLE_ROWS: TableRowsData[] = [
	{
		name: 'John Michael',
		job: 'Manager',
		date: '23/04/18',
		status: 'Pending',
		color: 'text-[#cbe409]',
	},
	{
		name: 'Alexa Liras',
		job: 'Developer',
		date: '23/04/18',
		status: 'Declined',
		color: 'text-[#F3005B]',
	},
	{
		name: 'Laurent Perrier',
		job: 'Executive',
		date: '19/09/17',
		status: 'Active',
		color: 'text-[#1b9c85]',
	},
]
