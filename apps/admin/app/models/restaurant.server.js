import { prisma } from 'db'

export function getRestaurants() {
	return prisma.restaurant.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { name: 'desc' },
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

export function updateRestaurant({ id, name, address }) {
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

export function getRestaurantById(id) {
	return prisma.restaurant.findFirst({
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
