import { prisma } from '~/db.server'

export function getCuisine() {
	return prisma.cuisine.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { id: 'asc' },
	})
}
