const { prisma } = require('../connection')

async function seed() {
	const cuisines = [
		'Biryani',
		'Pakistani',
		'Tea & Coffee',
		'Beverages',
		'Pizza',
		'Burgers',
		'Sandwich',
	]

	// cleanup
	for (const index in cuisines) {
		const cuisine = cuisines[index]
		await prisma.cuisine.delete({ where: { name: cuisine } }).catch(() => {
			// no worries if it doesn't exist yet
		})
	}

	for (const index in cuisines) {
		const cuisine = cuisines[index]
		await prisma.cuisine.create({
			data: {
				name: cuisine,
			},
		})
	}

	console.log(`Cuisines has been seeded. 🌱`)
}

seed()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})