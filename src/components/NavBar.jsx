import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/netflix.svg';
import Search from './Search';
import profile from '../assets/profile.png';
import { BellIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid';

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
	const menu = useRef();
	useEffect(() => {
		menu.current = document.querySelector('div.mobile-menu');
	}, []);

	return (
		<nav class='flex items-center justify-between flex-wrap bg-teal-500 p-6 top-0'>
			<div class='flex items-center flex-shrink-0 text-white mr-6'>
				<img className='lg:block h-8 w-auto' src={logo} alt={'netflix-logo'} />
			</div>
			<div class='block lg:hidden'>
				<button
					class='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mobile-menu-button'
					onClick={() => {
						menu.current.classList.toggle('hidden');
					}}
				>
					<MenuIcon className='h-7 w-7 text-blue-500' />
				</button>
			</div>
			<div className='mobile-menu w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
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
				<div class='flex items-center flex-wrap bg-teal-500 p-6 top-0'>
					<div>
						<Search />
					</div>
					<div>
						<BellIcon className='h-7 w-7 text-blue-500 mr-5 my-5' />
					</div>
					<div>
						<img src={profile} alt='profile' className='rounded' />
					</div>
				</div>
			</div>
		</nav>
	);
}
