import React, { useState } from 'react';
import logo from '../assets/netflix.svg';
import Search from './Search';

const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'TV Shows', href: '#', current: false },
	{ name: 'Movies', href: '#', current: false },
	{ name: 'New & Popular', href: '#', current: false },
	{ name: 'My list', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
	const [currentPage, setCurrentpage] = useState('Home');
	return (
		<nav class='flex items-center justify-between flex-wrap bg-teal-500 p-6 top-0'>
			<div class='flex items-center flex-shrink-0 text-white mr-6'>
				<img
					className='hidden lg:block h-8 w-auto'
					src={logo}
					alt={'netflix-logo'}
				/>
			</div>
			<div class='block lg:hidden'>
				<button class='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
					<svg
						class='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div class='text-sm lg:flex-grow'>
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={classNames(
								item.current
									? 'bg-gray-900 text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white',
								'block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'
							)}
							aria-current={item.current ? 'page' : undefined}
						>
							{item.name}
						</a>
					))}
				</div>
				<div>
					<a
						href='#'
						className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
					>
						{' '}
					</a>
				</div>
			</div>
		</nav>
	);
}
