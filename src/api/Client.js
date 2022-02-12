import axios from 'axios';

const Client = axios.create({
	baseURL: 'https://imdb8.p.rapidapi.com/',
	headers: {
		'x-rapidapi-host': 'imdb8.p.rapidapi.com',
		'x-rapidapi-key': 'e0ae4270cdmshd958aace8970be5p1f500ejsn2829e9fdb80e',
	},
});

export default Client;
