import { apiUrl } from '../Config/Config';

export class Api {
	get(url, params) {
		url = new URL(`${apiUrl}${url}`);
		if (params) Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
		return fetch(url, {
			method: 'GET',
		})
			.then(async (response) => {
				response.payload = await response.json();
				return response;
			})
			.catch((err) => err);
	}
}

export default new Api();
