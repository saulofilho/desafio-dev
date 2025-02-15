# File Parser System Frontend

The frontend of the File Parser System is built with React 19, utilizing Vite for a fast and optimized development experience. It follows modern best practices with Tailwind CSS for styling and Axios for API requests.

## Technologies

This project was developed with the following technologies:

- [React](https://react.dev)
- [Docker](https://www.docker.com/)
- [Tailwind](https://www.tailwinds.com/)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### To access the container

Under the app folder execute the following commands:

```bash
docker-compose exec app bash

# install dependencies
$ yarn add -D vitest

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build

# lint project
$ yarn lint

# test project
$ yarn test
```

## API Rest

Get transactions: `GET /v1/transactions`
Post upload file: `POST /v1/transactions/upload`


URL to query                   | Description
------------------------------ | ---------------------------
<code>GET</code> `/v1/transactions` | Return a list of `Store` with relation of `Transactions`.
<code>POST</code> `/v1/transactions/upload` | Post a form `.txt`.

## Example

**Request**

    GET /v1/transactions

**Return**

``` json
{
	"stores": [
		{
			"id": 8,
			"name": "BAR DO JOÃO",
			"owner": "JOÃO MACEDO",
			"total_balance": null,
			"created_at": "2025-02-14T19:39:04.490Z",
			"updated_at": "2025-02-14T19:39:04.490Z",
			"transactions": [
				{
					"id": 36,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -142.0,
					"cpf": "09620676017",
					"card": "4753****3153",
					"time": "2000-01-01T15:34:53.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 39,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -112.0,
					"cpf": "09620676017",
					"card": "3648****0099",
					"time": "2000-01-01T23:42:34.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 40,
					"transaction_type": 1,
					"date": "2019-03-01",
					"value": 152.0,
					"cpf": "09620676017",
					"card": "1234****7890",
					"time": "2000-01-01T23:30:00.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 57,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -142.0,
					"cpf": "09620676017",
					"card": "4753****3153",
					"time": "2000-01-01T15:34:53.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 60,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -112.0,
					"cpf": "09620676017",
					"card": "3648****0099",
					"time": "2000-01-01T23:42:34.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 61,
					"transaction_type": 1,
					"date": "2019-03-01",
					"value": 152.0,
					"cpf": "09620676017",
					"card": "1234****7890",
					"time": "2000-01-01T23:30:00.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 78,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -142.0,
					"cpf": "09620676017",
					"card": "4753****3153",
					"time": "2000-01-01T15:34:53.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 81,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -112.0,
					"cpf": "09620676017",
					"card": "3648****0099",
					"time": "2000-01-01T23:42:34.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 82,
					"transaction_type": 1,
					"date": "2019-03-01",
					"value": 152.0,
					"cpf": "09620676017",
					"card": "1234****7890",
					"time": "2000-01-01T23:30:00.000Z",
					"store_id": 8,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				}
			]
		},
		{
			"id": 9,
			"name": "LOJA DO Ó - MATRIZ",
			"owner": "MARIA JOSEFINA",
			"total_balance": null,
			"created_at": "2025-02-14T19:39:04.496Z",
			"updated_at": "2025-02-14T19:39:04.496Z",
			"transactions": [
				{
					"id": 37,
					"transaction_type": 5,
					"date": "2019-03-01",
					"value": 132.0,
					"cpf": "55641815063",
					"card": "3123****7687",
					"time": "2000-01-01T14:56:07.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 44,
					"transaction_type": 1,
					"date": "2019-03-01",
					"value": 200.0,
					"cpf": "55641815063",
					"card": "1234****3324",
					"time": "2000-01-01T09:00:02.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 51,
					"transaction_type": 9,
					"date": "2019-03-01",
					"value": -102.0,
					"cpf": "55641815063",
					"card": "6228****9090",
					"time": "2000-01-01T00:00:00.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 58,
					"transaction_type": 5,
					"date": "2019-03-01",
					"value": 132.0,
					"cpf": "55641815063",
					"card": "3123****7687",
					"time": "2000-01-01T14:56:07.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 65,
					"transaction_type": 1,
					"date": "2019-03-01",
					"value": 200.0,
					"cpf": "55641815063",
					"card": "1234****3324",
					"time": "2000-01-01T09:00:02.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 72,
					"transaction_type": 9,
					"date": "2019-03-01",
					"value": -102.0,
					"cpf": "55641815063",
					"card": "6228****9090",
					"time": "2000-01-01T00:00:00.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 79,
					"transaction_type": 5,
					"date": "2019-03-01",
					"value": 132.0,
					"cpf": "55641815063",
					"card": "3123****7687",
					"time": "2000-01-01T14:56:07.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 86,
					"transaction_type": 1,
					"date": "2019-03-01",
					"value": 200.0,
					"cpf": "55641815063",
					"card": "1234****3324",
					"time": "2000-01-01T09:00:02.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 93,
					"transaction_type": 9,
					"date": "2019-03-01",
					"value": -102.0,
					"cpf": "55641815063",
					"card": "6228****9090",
					"time": "2000-01-01T00:00:00.000Z",
					"store_id": 9,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				}
			]
		},
		{
			"id": 10,
			"name": "MERCADO DA AVENIDA",
			"owner": "MARCOS PEREIRA",
			"total_balance": null,
			"created_at": "2025-02-14T19:39:04.499Z",
			"updated_at": "2025-02-14T19:39:04.499Z",
			"transactions": [
				{
					"id": 38,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -122.0,
					"cpf": "84515254073",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 41,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -107.0,
					"cpf": "84515254073",
					"card": "8723****9987",
					"time": "2000-01-01T12:33:33.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 42,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -502.0,
					"cpf": "84515254073",
					"card": "8473****1231",
					"time": "2000-01-01T23:12:33.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 45,
					"transaction_type": 5,
					"date": "2019-03-01",
					"value": 802.0,
					"cpf": "84515254073",
					"card": "3123****7687",
					"time": "2000-01-01T14:56:07.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 49,
					"transaction_type": 8,
					"date": "2019-03-01",
					"value": 102.03,
					"cpf": "84515254073",
					"card": "2344****1222",
					"time": "2000-01-01T12:32:22.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 52,
					"transaction_type": 4,
					"date": "2019-06-01",
					"value": 506.17,
					"cpf": "84515254073",
					"card": "1234****2231",
					"time": "2000-01-01T10:00:00.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 54,
					"transaction_type": 8,
					"date": "2019-03-01",
					"value": 2.0,
					"cpf": "84515254073",
					"card": "2344****1222",
					"time": "2000-01-01T12:32:22.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 56,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -192.0,
					"cpf": "84515254073",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 59,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -122.0,
					"cpf": "84515254073",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 62,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -107.0,
					"cpf": "84515254073",
					"card": "8723****9987",
					"time": "2000-01-01T12:33:33.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 63,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -502.0,
					"cpf": "84515254073",
					"card": "8473****1231",
					"time": "2000-01-01T23:12:33.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 66,
					"transaction_type": 5,
					"date": "2019-03-01",
					"value": 802.0,
					"cpf": "84515254073",
					"card": "3123****7687",
					"time": "2000-01-01T14:56:07.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 70,
					"transaction_type": 8,
					"date": "2019-03-01",
					"value": 102.03,
					"cpf": "84515254073",
					"card": "2344****1222",
					"time": "2000-01-01T12:32:22.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 73,
					"transaction_type": 4,
					"date": "2019-06-01",
					"value": 506.17,
					"cpf": "84515254073",
					"card": "1234****2231",
					"time": "2000-01-01T10:00:00.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 75,
					"transaction_type": 8,
					"date": "2019-03-01",
					"value": 2.0,
					"cpf": "84515254073",
					"card": "2344****1222",
					"time": "2000-01-01T12:32:22.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 77,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -192.0,
					"cpf": "84515254073",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 80,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -122.0,
					"cpf": "84515254073",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 83,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -107.0,
					"cpf": "84515254073",
					"card": "8723****9987",
					"time": "2000-01-01T12:33:33.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 84,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -502.0,
					"cpf": "84515254073",
					"card": "8473****1231",
					"time": "2000-01-01T23:12:33.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 87,
					"transaction_type": 5,
					"date": "2019-03-01",
					"value": 802.0,
					"cpf": "84515254073",
					"card": "3123****7687",
					"time": "2000-01-01T14:56:07.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 91,
					"transaction_type": 8,
					"date": "2019-03-01",
					"value": 102.03,
					"cpf": "84515254073",
					"card": "2344****1222",
					"time": "2000-01-01T12:32:22.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 94,
					"transaction_type": 4,
					"date": "2019-06-01",
					"value": 506.17,
					"cpf": "84515254073",
					"card": "1234****2231",
					"time": "2000-01-01T10:00:00.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 96,
					"transaction_type": 8,
					"date": "2019-03-01",
					"value": 2.0,
					"cpf": "84515254073",
					"card": "2344****1222",
					"time": "2000-01-01T12:32:22.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 98,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -192.0,
					"cpf": "84515254073",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 10,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				}
			]
		},
		{
			"id": 11,
			"name": "MERCEARIA 3 IRMÃOS",
			"owner": "JOSÉ COSTA",
			"total_balance": null,
			"created_at": "2025-02-14T19:39:04.503Z",
			"updated_at": "2025-02-14T19:39:04.503Z",
			"transactions": [
				{
					"id": 43,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -602.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 46,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -102.0,
					"cpf": "23270298056",
					"card": "8473****1231",
					"time": "2000-01-01T23:12:33.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 47,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -6102.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 50,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -103.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 53,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -109.0,
					"cpf": "23270298056",
					"card": "8723****9987",
					"time": "2000-01-01T12:33:33.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 55,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -5.0,
					"cpf": "23270298056",
					"card": "7677****8778",
					"time": "2000-01-01T14:18:08.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 64,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -602.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 67,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -102.0,
					"cpf": "23270298056",
					"card": "8473****1231",
					"time": "2000-01-01T23:12:33.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 68,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -6102.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 71,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -103.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 74,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -109.0,
					"cpf": "23270298056",
					"card": "8723****9987",
					"time": "2000-01-01T12:33:33.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 76,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -5.0,
					"cpf": "23270298056",
					"card": "7677****8778",
					"time": "2000-01-01T14:18:08.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 85,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -602.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 88,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -102.0,
					"cpf": "23270298056",
					"card": "8473****1231",
					"time": "2000-01-01T23:12:33.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 89,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -6102.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 92,
					"transaction_type": 3,
					"date": "2019-03-01",
					"value": -103.0,
					"cpf": "23270298056",
					"card": "6777****1313",
					"time": "2000-01-01T17:27:12.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 95,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -109.0,
					"cpf": "23270298056",
					"card": "8723****9987",
					"time": "2000-01-01T12:33:33.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				},
				{
					"id": 97,
					"transaction_type": 2,
					"date": "2019-03-01",
					"value": -5.0,
					"cpf": "23270298056",
					"card": "7677****8778",
					"time": "2000-01-01T14:18:08.000Z",
					"store_id": 11,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				}
			]
		},
		{
			"id": 12,
			"name": "LOJA DO Ó - FILIAL",
			"owner": "MARIA JOSEFINA",
			"total_balance": null,
			"created_at": "2025-02-14T19:39:04.507Z",
			"updated_at": "2025-02-14T19:39:04.507Z",
			"transactions": [
				{
					"id": 48,
					"transaction_type": 4,
					"date": "2019-03-01",
					"value": 152.32,
					"cpf": "55641815063",
					"card": "1234****6678",
					"time": "2000-01-01T10:00:00.000Z",
					"store_id": 12,
					"created_at": "2025-02-14T19:39:04.513Z",
					"updated_at": "2025-02-14T19:39:04.513Z"
				},
				{
					"id": 69,
					"transaction_type": 4,
					"date": "2019-03-01",
					"value": 152.32,
					"cpf": "55641815063",
					"card": "1234****6678",
					"time": "2000-01-01T10:00:00.000Z",
					"store_id": 12,
					"created_at": "2025-02-14T20:54:57.794Z",
					"updated_at": "2025-02-14T20:54:57.794Z"
				},
				{
					"id": 90,
					"transaction_type": 4,
					"date": "2019-03-01",
					"value": 152.32,
					"cpf": "55641815063",
					"card": "1234****6678",
					"time": "2000-01-01T10:00:00.000Z",
					"store_id": 12,
					"created_at": "2025-02-14T20:58:30.240Z",
					"updated_at": "2025-02-14T20:58:30.240Z"
				}
			]
		}
	]
}
```
