import Main from './components/Main'
import SideBar from './components/SideBar'
import './styles/null.css'

const App = () => {
	return (
		<div className='flex h-screen'>
			<SideBar />
			<Main />
		</div>
	)
}

export default App
