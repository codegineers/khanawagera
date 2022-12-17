import type { Restaurant } from 'db/prisma-client'
import prisma from 'db/dist/connection'
export type { Restaurant } from 'db/prisma-client'

export function getRestaurants() {
	return prisma.restaurant.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: { name: 'desc' },
	})
}

export function createRestaurant({
	name,
	address,
}: Pick<Restaurant, 'name' | 'address'>) {
	return prisma.restaurant.create({
		data: {
			name,
			address,
		},
	})
}

export function updateRestaurant({
	id,
	name,
	address,
}: Pick<Restaurant, 'id' | 'name' | 'address'>) {
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
		},
		where: { id },
	})
}
