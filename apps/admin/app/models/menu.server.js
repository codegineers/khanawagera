import { prisma } from '~/db.server'

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
