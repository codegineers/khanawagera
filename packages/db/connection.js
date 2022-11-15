const { PrismaClient } = require('./prisma-client')
const invariant = require('tiny-invariant')

let prisma

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// in production we'll have a single connection to the DB.
console.log('process.env', process.env)
if (process.env.NODE_ENV === 'production') {
	prisma = getClient()
} else {
	if (!global.__db__) {
		global.__db__ = getClient()
	}
	prisma = global.__db__
}

function getClient() {
	const { PAKRESTAURANTS_V1_POSTGRESURL } = process.env
	invariant(
		typeof PAKRESTAURANTS_V1_POSTGRESURL === 'string',
		'PAKRESTAURANTS_V1_POSTGRESURL env var not set'
	)

	const databaseUrl = new URL(PAKRESTAURANTS_V1_POSTGRESURL)

	// const isLocalHost = databaseUrl.hostname === 'localhost'

	// const PRIMARY_REGION = isLocalHost ? null : process.env.PRIMARY_REGION
	// const DB_REGION = isLocalHost ? null : process.env.DB_REGION

	// const isReadReplicaRegion = !PRIMARY_REGION || PRIMARY_REGION === DB_REGION

	// if (!isLocalHost) {
	// 	databaseUrl.host = `${DB_REGION}.${databaseUrl.host}`
	// 	if (!isReadReplicaRegion) {
	// 		// 5433 is the read-replica port
	// 		databaseUrl.port = '5433'
	// 	}
	// }

	console.log(`🔌 setting up prisma client to ${databaseUrl.host}`)
	// NOTE: during development if you change anything in this function, remember
	// that this only runs once per server restart and won't automatically be
	// re-run per request like everything else is. So if you need to change
	// something in this file, you'll need to manually restart the server.
	const client = new PrismaClient({
		datasources: {
			db: {
				url: databaseUrl.toString(),
			},
		},
	})
	// connect eagerly
	client.$connect()

	return client
}

module.exports = { prisma }
