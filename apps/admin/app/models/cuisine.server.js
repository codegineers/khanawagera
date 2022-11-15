import { prisma } from 'db'

export function getCuisine() {
	return prisma.cuisine.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { id: 'asc' },
	})
}
