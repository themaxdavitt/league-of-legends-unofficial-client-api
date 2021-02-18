import axios from 'axios';
import { writeFile } from 'fs/promises';
import { request, authenticate } from 'league-connect';

(async () => {
	await writeFile('riotgames.pem', (await axios.get<string>('https://static.developer.riotgames.com/docs/lol/riotgames.pem', {
		responseType: 'text'
	})).data);

	await writeFile('openapi.json', JSON.stringify(await (await request({
		method: 'GET',
		url: '/swagger/v3/openapi.json'
	}, await authenticate())).json()), 'utf8');
})().catch(console.error);
