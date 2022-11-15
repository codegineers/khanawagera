const { prisma } = require('db')

async function seed() {
	const cuisines = ['Biryani', 'Tea & Coffee']

	// cleanup
	// for (const index in cuisines) {
	// 	const cuisine = cuisines[index]
	// 	await prisma.cuisine.delete({ where: { name: cuisine } }).catch()
	// }

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
