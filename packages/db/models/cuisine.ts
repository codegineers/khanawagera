import { prisma } from '../connection'
import { Cuisine } from '../prisma-client'

function getCuisines(): Cuisine[] {
	return prisma.cuisine.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { id: 'asc' },
	})
}

export { getCuisines }
