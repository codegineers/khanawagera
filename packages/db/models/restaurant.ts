import prisma from '../connection'
import { Restaurant } from '../prisma-client'

export function getRestaurantById(id: Restaurant['id']) {
	return prisma.restaurant.findUnique({
		where: { id },
		select: {
			id: true,
			name: true,
			address: true,
			menus: {
				select: {
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
	})
}

export function getRestaurantsByCuisine({ cuisine }: { cuisine: string }) {
	return prisma.$queryRaw`
    SELECT r.id, r.name
    FROM public."Restaurant" as r
    JOIN public."RestaurantCuisine" as rc
    ON r.id = rc."restaurantId"
    JOIN public."Cuisine" as c
    ON rc."cuisineId" = c.id
    WHERE c.name = ${cuisine}
    ORDER BY r.name
  `
}

export function filterRestaurants({ searchQuery }: { searchQuery: string }) {
	const filterBy = `%${searchQuery}%`

	return prisma.$queryRaw`
    select r.id,
    r.name
    from public."Restaurant" as r
    left outer join public."Menu" as m
    on r.id = m."restaurantId"
    left outer join public."Category" as c
    on m.id = c."menuId"
    left outer join public."Dish" as d
    on c.id = d."categoryId"
    left outer join public."RestaurantCuisine" as rc
    on r.id = rc."restaurantId"
    left outer join public."Cuisine" as cu
    on rc."cuisineId" = cu.id
    where d.name ilike ${filterBy}
    or c.name ilike ${filterBy}
    or r.name ilike ${filterBy}
    or cu.name ilike ${filterBy}
    group by r.id, r.name
    ORDER BY r.name
  `
}
