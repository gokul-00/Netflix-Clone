import React from 'react';
import sample from '../assets/sample.webp';

export default function Card({ src, alt }) {
	return (
		<img
			src={src}
			alt={alt}
			className='sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/8 aspect-[3/4] transition ease-in-out delay-500 hover:-translate-y-1 hover:scale-125 duration-100 mx-1 my-3'
		/>
	);
}
