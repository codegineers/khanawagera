import prisma from 'db/dist/connection'
import type { RestaurantCuisine } from 'db/prisma-client'

export async function addRestaurantCuisine({
	restaurantId,
	cuisineId,
}: Pick<RestaurantCuisine, 'restaurantId' | 'cuisineId'>) {
	const restaurantCuisine = await getByRestaurantIdAndCuisineId({
		restaurantId,
		cuisineId,
	})

	if (restaurantCuisine) {
		return await deleteRestaurantCuisine(restaurantCuisine.id)
	} else {
		return prisma.restaurantCuisine.create({
			data: {
				restaurant: {
					connect: {
						id: restaurantId,
					},
				},
				cuisine: {
					connect: {
						id: cuisineId,
					},
				},
			},
		})
	}
}

export function getByRestaurantIdAndCuisineId({
	restaurantId,
	cuisineId,
}: Pick<RestaurantCuisine, 'restaurantId' | 'cuisineId'>) {
	return prisma.restaurantCuisine.findFirst({
		where: {
			restaurantId,
			cuisineId,
		},
	})
}

export function getAllByRestaurantId(
	restaurantId: RestaurantCuisine['restaurantId']
) {
	return prisma.restaurantCuisine.findMany({
		where: {
			restaurantId,
		},
	})
}

export function deleteRestaurantCuisine(id: RestaurantCuisine['id']) {
	return prisma.restaurantCuisine.delete({
		where: {
			id,
		},
	})
}
