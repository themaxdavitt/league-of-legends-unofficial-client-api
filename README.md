# `@themaxdavitt/league-of-legends-unofficial-client-api`

[![NPM link](https://img.shields.io/npm/v/@themaxdavitt/league-of-legends-unofficial-client-api?style=flat-square)](https://npmjs.com/package/@themaxdavitt/league-of-legends-unofficial-client-api) [![Package license](https://img.shields.io/npm/l/@themaxdavitt/league-of-legends-unofficial-client-api?style=flat-square)](LICENSE) 

Auto-generated [`axios`](https://www.npmjs.com/package/axios)-powered Typescript League of Legends Unofficial Client API (LCU) client.

## Building

We pull an OpenAPI 3.0 definition from a running client, and then feed it into 
[`openapi-client-axios`](https://www.npmjs.com/package/openapi-client-axios) and [`openapi-client-axios-typegen`](https://www.npmjs.com/package/openapi-client-axios-typegen). That's it.

We do this automatically in `npm run build` before publishing. Just sit back and relax.

## Versioning

We're following a [SemVer](https://semver.org/)-compatible version of [CalVer](https://calver.org/) (similar to `date +0.%Y.%j`) since we have no idea when Riot will update their APIs.

## License

`@themaxdavitt/league-of-legends-unofficial-client-api` is released under [the MIT license](LICENSE).
