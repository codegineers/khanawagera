import { prisma } from '~/db.server'

export function getRestaurantCuisine({ restaurantId }) {
	return prisma.restaurantCuisine.findMany({
		select: {
			cuisine: {
				select: {
					id: true,
					name: true,
				},
			},
		},
		where: {
			restaurantId: restaurantId,
		},
		orderBy: {
			id: 'asc',
		},
	})
}

export async function addRestaurantCuisine({ restaurantId, cuisineId }) {
	const restaurantCuisine = await getRestaurantCuisineByRestaurantId(
		restaurantId,
		cuisineId
	)
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

export function getRestaurantCuisineByRestaurantId(restaurantId, cuisineId) {
	return prisma.restaurantCuisine.findFirst({
		where: {
			restaurantId,
			cuisineId,
		},
	})
}

export function deleteRestaurantCuisine(id) {
	return prisma.restaurantCuisine.delete({
		where: {
			id,
		},
	})
}
