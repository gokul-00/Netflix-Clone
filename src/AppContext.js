import { createContext, useEffect, useState } from 'react';
import tvseries from './assets/tvseries.json';
import topmovies from './assets/topmovies.json';
import comingsoon from './assets/comingsoon.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [query, setQuery] = useState('');
	const [tvData, setTvData] = useState([]);
	const [movieData, setMovieData] = useState([]);
	const [comingsoonData, setcomingsoonData] = useState([]);

	const getData = async () => {
		try {
			await setTvData(tvseries);
			await setMovieData(topmovies);
			await setcomingsoonData(comingsoon);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				query: { query, setQuery },
				tv: { tvData, setTvData },
				movie: { movieData, setMovieData },
				comingsoon: { comingsoonData, setcomingsoonData },
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
