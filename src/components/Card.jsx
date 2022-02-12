import React from 'react';
import sample from '../assets/sample.webp';

export default function Card({ src, alt }) {
	return (
		<img
			src={src}
			alt={alt}
			className='w-80 aspect-[3/4] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300  mx-1 my-3'
		/>
	);
}
