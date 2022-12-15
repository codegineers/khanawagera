import type { Restaurant } from 'db/prisma-client'
import prisma from 'db/dist/connection'

export function getRestaurants() {
	return prisma.restaurant.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { name: 'desc' },
	})
}

export function createRestaurant({ name, address }: Restaurant) {
	return prisma.restaurant.create({
		data: {
			name,
			address,
		},
	})
}

export function updateRestaurant({ id, name, address }: Restaurant) {
	return prisma.restaurant.update({
		data: {
			name,
			address,
		},
		where: {
			id,
		},
	})
}

export function getRestaurantById(id: Restaurant['id']) {
	return prisma.restaurant.findUnique({
		select: {
			id: true,
			name: true,
			address: true,
			menus: {
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
			},
			restaurantCuisines: {
				select: {
					cuisine: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			},
		},
		where: { id },
	})
}
