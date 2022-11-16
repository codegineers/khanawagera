import { prisma } from "db";

export function getRestaurantById(id) {
  return prisma.restaurant.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      address: true,
      Menu: {
        select: {
          id: true,
          Dish: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      RestaurantCuisine: {
        select: {
          Cuisine: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
}

export function filterRestaurants({ searchQuery }) {
  const filterBy = `%${searchQuery}%`;

  return prisma.$queryRaw`
    SELECT r.id,
    r.name,
    c.name as cuisine
    FROM public."Restaurant" as r
    left outer join public."Menu" as m
    on r.id = m."restaurantId"
    left outer join public."Dish" as d
    on m.id = d."menuId"
    left outer join public."RestaurantCuisine" as rc
    on r.id = rc."restaurantId"
    left outer join public."Cuisine" as c
    on c.id = rc."cuisineId"
    WHERE d.name ilike ${filterBy}
    or r.name ilike ${filterBy}
    or c.name ilike ${filterBy}
    group by r.id, r.name, c.name
  `;
}
