module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			background: '#141414',
			white: '#E5E5E5',
			grey: '#B8B8B8',
			red: '#E74C16',
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
		container: {
			DEFAULT: '1rem',
			sm: '2rem',
			lg: '2rem',
			xl: '2rem',
			'2xl': '3rem',
			center: true,
		},
		aspectRatio: {
			'3/4': '3 / 4',
		},
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		},
	},
};
