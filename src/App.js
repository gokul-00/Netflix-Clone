import './App.css';
import { AppProvider } from './AppContext';
import Browse from './components/Browse';
import Card from './components/Card';
import NavBar from './components/NavBar';

function App() {
	return (
		<AppProvider>
			<div className='bg-background text-white font-sans min-h-screen'>
				<NavBar />
				<Browse />
			</div>
		</AppProvider>
	);
}

export default App;
