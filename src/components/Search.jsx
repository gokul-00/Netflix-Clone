import { SearchIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import searchQuery from '../utils/search';

export default function Search() {
	const { query, tv, movie, comingsoon } = useContext(AppContext);

	useEffect(() => {
		searchQuery(
			query.query,
			tv.setTvData,
			movie.setMovieData,
			comingsoon.setcomingsoonData
		);
	}, [query.query]);

	const handleSearch = (e) => {
		// console.log(e.target.value);
		query.setQuery(e.target.value);
	};
	return (
		<div class='flex rounded-full'>
			<button>
				<span class='w-auto flex justify-end items-center text-grey p-2'>
					<SearchIcon className='h-7 w-7' />
				</span>
			</button>
			<input
				class='w-full mr-4 bg-background'
				type='text'
				placeholder='Search...'
				onChange={handleSearch}
				// onKeyPress={handleSubmit}
			/>
		</div>
	);
}
