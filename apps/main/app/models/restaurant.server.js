import { prisma } from 'db'

export function getRestaurants() {
	return prisma.restaurant.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { updatedAt: 'desc' },
	})
}

export function createRestaurant({ name, address }) {
	return prisma.restaurant.create({
		data: {
			name,
			address,
		},
	})
}

export function getRestaurant(id) {
	return prisma.restaurant.findFirst({
		where: { id },
		select: {
			id: true,
			name: true,
			address: true,
			menu: {
				select: {
					id: true,
				},
			},
		},
	})
}
