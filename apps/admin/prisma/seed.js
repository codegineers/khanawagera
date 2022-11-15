const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

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

	await prisma.category.create({
		data: {
			name: 'Biryani',
			restaurantId: restaurant.id,
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
