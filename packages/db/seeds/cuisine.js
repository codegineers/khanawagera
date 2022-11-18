const { prisma } = require('../connection')

async function seed() {
	const cuisines = [
		'Biryani',
		'Pakistani',
		'Chai',
		'Coffee',
		'Beverages',
		'Pizza',
		'Burgers',
		'Sandwiches',
		'Fast Food',
		'Steak',
		'BBQ',
		'Wraps & Rolls',
		'Shawarma',
		'Desserts',
		'Cakes & Bakery',
		'Seafood',
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
