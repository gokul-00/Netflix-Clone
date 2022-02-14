const topmovies = require('../assets/topmovies.json');
const tvseries = require('../assets/tvseries.json');
const comingsoon = require('../assets/comingsoon.json');

// const alldata = [...topmovies, ...tvseries, ...comingsoon];

const searchQuery = async (q, setTvData, setMovieData, setcomingsoonData) => {
	if (q == '') {
		await setTvData(tvseries);
		await setMovieData(topmovies);
		await setcomingsoonData(comingsoon);
	} else {
		const searchString = q;
		const pattern = new RegExp(searchString, 'i');
		await setTvData(tvseries.filter((obj) => pattern.test(obj.title)));
		await setMovieData(topmovies.filter((obj) => pattern.test(obj.title)));
		await setcomingsoonData(
			comingsoon.filter((obj) => pattern.test(obj.title))
		);
	}
};

export default searchQuery;
