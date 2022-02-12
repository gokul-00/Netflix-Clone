import axios from 'axios';

const Client = axios.create({
	baseURL: 'https://imdb8.p.rapidapi.com/',
	headers: {
		'x-rapidapi-host': 'imdb8.p.rapidapi.com',
		'x-rapidapi-key': '',
	},
});

export default Client;
