const { prisma } = require('../connection')

function getCuisines() {
	return prisma.cuisine.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { id: 'asc' },
	})
}

module.exports = {
	getCuisines,
}
