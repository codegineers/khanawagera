import prisma from 'db/dist/connection'
import type { Menu } from 'db/prisma-client'

export function getAllByRestaurantId(restaurantId: Menu['restaurantId']) {
	return prisma.menu.findMany({
		select: {
			id: true,
			categories: {
				select: {
					id: true,
					name: true,
					dishes: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			},
		},
		where: {
			restaurantId,
		},
	})
}

export function createMenu(restaurantId: Menu['restaurantId']) {
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
