const { prisma } = require('db')

async function seed() {
	const name = 'Al-Rehman Biryani'

	// cleanup the existing database
	await prisma.restaurant.delete({ where: { name } }).catch(() => {
		// no worries if it doesn't exist yet
	})

	const restaurant = await prisma.restaurant.create({
		data: {
			name,
		},
	})

	await prisma.menu.create({
		data: {
			Restaurant: {
				connect: {
					id: restaurant.id,
				},
			},
		},
	})

	console.log(`Database has been seeded. 🌱`)
}

seed()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
