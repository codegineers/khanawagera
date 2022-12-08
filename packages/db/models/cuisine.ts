import prisma from '../connection'

export function getCuisines() {
	return prisma.cuisine.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { id: 'asc' },
	})
}
