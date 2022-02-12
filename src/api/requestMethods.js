import Client from './Client';
let top_TV_data = [];

const getTopRatedTv = async () => {
	try {
		const response = await Client.get('/title/get-top-rated-tv-shows');
		console.log(response.data.slice(0, 10));
		response.data.slice(0, 5).forEach(async (element) => {
			try {
				const response = await Client.get('/title/get-details', {
					params: { tconst: element.id.split('/').at(-2) },
				});
				top_TV_data = [...top_TV_data, response.data];
			} catch (error) {
				console.log(error);
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export { getTopRatedTv, top_TV_data };
