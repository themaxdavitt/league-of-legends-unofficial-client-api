import { readFile } from 'fs/promises';
import { Agent } from 'https';
import { authenticate } from 'league-connect';
import OpenAPIClientAxios from 'openapi-client-axios';
import { OpenAPIV3 } from 'openapi-types';
import { join } from 'path';

import { Client } from './client';
import def from './openapi.json';

export const definition = def as unknown as OpenAPIV3.Document;

export async function createClient(): Promise<Client> {
	const credentials = await authenticate();
	const api = new OpenAPIClientAxios({
		definition,
		axiosConfigDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Basic ${Buffer.from(`riot:${credentials.password}`).toString('base64')}`
			},
			httpsAgent: new Agent({
				ca: await readFile(join(__dirname, 'riotgames.pem'), 'utf8'),
			})
		}
	});
	api.withServer({ url: `https://127.0.0.1:${credentials.port}` });
	return await api.init();
}
