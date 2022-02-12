import React from 'react';
import profile from '../assets/profile.png';

export default function Dropdown() {
	return (
		<div class='flex justify-center'>
			<div>
				<div class='dropdown relative'>
					<button
						class='dropdown-toggle inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap'
						type='button'
						id='dropdownMenuButton2'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<img src={profile} alt='profile' className='rounded' />
					</button>

					<ul
						class='dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none bg-gray-800'
						aria-labelledby='dropdownMenuButton2'
					>
						<h6 class='text-gray-400 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent'>
							Dropdown header
						</h6>
						<span class='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300'>
							Dropdown item text
						</span>
						<li>
							<a
								class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600'
								href='#'
							>
								Action
							</a>
						</li>
						<li>
							<a
								class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700'
								href='#'
							>
								Another action
							</a>
						</li>
						<li>
							<a
								class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700'
								href='#'
							>
								Something else here
							</a>
						</li>
						<li>
							<hr class='h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25' />
						</li>
						<li>
							<a
								class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700'
								href='#'
							>
								Separated link
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
