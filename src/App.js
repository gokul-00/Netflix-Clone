import './App.css';
import Browse from './components/Browse';
import Card from './components/Card';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className='bg-background text-white font-sans min-h-screen'>
			<NavBar />
			<Browse />
		</div>
	);
}

export default App;
