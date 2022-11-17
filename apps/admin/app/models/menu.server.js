import { prisma } from 'db'

export function createMenu(restaurantId) {
	return prisma.menu.create({
		data: {
			restaurant: {
				connect: {
					id: restaurantId,
				},
			},
		},
	})
}
