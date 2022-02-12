import React, { useEffect, useState, Suspense, lazy } from 'react';
import Card from './Card';
import tvseries from '../assets/tvseries.json';
import topmovies from '../assets/topmovies.json';
import comingsoon from '../assets/comingsoon.json';

// let arr = Array.from(Array(10), (val, i) => i + 1);
export default function MovieList() {
	const [tvData, setTvData] = useState([]);
	const [movieData, setMovieData] = useState([]);
	const [comingsoonData, setcomingsoonData] = useState([]);

	const getData = async () => {
		try {
			// const comingsoon = await import('../assets/comingsoon.json');
			await setTvData(tvseries);
			await setMovieData(topmovies);
			await setcomingsoonData(comingsoon);
			console.log(tvData, tvseries);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='mx-auto pb-12 min-h-screen'>
			<div className='mt-4 mx-4'>
				<h3 className='lg:text-lg sm:text-base xl:text-xl font-bold'>
					Top Movies
				</h3>
				{movieData && (
					<div className='flex flex-row sm:scrollbar-hidden scroll-smooth overflow-x-auto overflow-y-hidden mx-auto'>
						{movieData.map((ele, i) => (
							<Card key={i} src={ele.image.url} alt={ele.title} />
						))}
					</div>
				)}
			</div>
			<div className='mt-4 mx-4'>
				<h3 className='lg:text-lg sm:text-base xl:text-xl font-bold'>
					Top TV Shows
				</h3>
				{tvData && (
					<div className='flex flex-row sm:scrollbar-hidden scroll-smooth overflow-x-auto overflow-y-hidden mx-auto'>
						{tvData.map((ele, i) => (
							<Card key={i} src={ele.image.url} alt={ele.title} />
						))}
					</div>
				)}
			</div>
			<div className='mt-4 mx-4'>
				<h3 className='lg:text-lg sm:text-base xl:text-xl font-bold'>
					Coming Soon
				</h3>
				{comingsoonData && (
					<div className='flex flex-row sm:scrollbar-hidden scroll-smooth overflow-x-auto overflow-y-hidden mx-auto'>
						{comingsoonData.map((ele, i) => (
							<Card key={i} src={ele.image.url} alt={ele.title} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
