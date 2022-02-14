import React, { useContext } from 'react';
import Card from './Card';

import { AppContext } from '../AppContext';

export default function MovieList() {
	const { tv, movie, comingsoon } = useContext(AppContext);
	return (
		<div className='mx-auto pb-12 min-h-screen'>
			<div className='mt-4 mx-5'>
				<h3 className='lg:text-lg sm:text-base xl:text-xl font-bold'>
					Top Movies
				</h3>
				{movie.movieData && movie.movieData.length ? (
					<div className='flex flex-row scrollbar sm:scrollbar-hidden scroll-smooth overflow-x-auto overflow-y-hidden mx-auto '>
						{movie.movieData.map((ele, i) => (
							<Card key={i} src={ele.image.url} alt={ele.title} />
						))}
					</div>
				) : (
					<div className='lg:text-md sm:text-sm xl:text-lg text-grey'>
						No data found :(
					</div>
				)}
			</div>
			<div className='mt-4 mx-5'>
				<h3 className='lg:text-lg sm:text-base xl:text-xl font-bold'>
					Top TV Shows
				</h3>
				{tv.tvData && tv.tvData.length ? (
					<div className='flex flex-row scrollbar sm:scrollbar-hidden scroll-smooth overflow-x-auto overflow-y-hidden mx-auto'>
						{tv.tvData.map((ele, i) => (
							<Card key={i} src={ele.image.url} alt={ele.title} />
						))}
					</div>
				) : (
					<div className='lg:text-md sm:text-sm xl:text-lg text-grey'>
						No data found :(
					</div>
				)}
			</div>
			<div className='mt-4 mx-5'>
				<h3 className='lg:text-lg sm:text-base xl:text-xl font-bold'>
					Coming Soon
				</h3>
				{comingsoon.comingsoonData && comingsoon.comingsoonData.length ? (
					<div className='flex flex-row scrollbar sm:scrollbar-hidden scroll-smooth overflow-x-auto overflow-y-hidden mx-auto'>
						{comingsoon.comingsoonData.map((ele, i) => (
							<Card key={i} src={ele.image.url} alt={ele.title} />
						))}
					</div>
				) : (
					<div className='lg:text-md sm:text-sm xl:text-lg text-grey'>
						No data found :(
					</div>
				)}
			</div>
		</div>
	);
}
