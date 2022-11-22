import { prisma } from "db";

export function getRestaurantById(id) {
  return prisma.restaurant.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      address: true,
      menus: {
        select: {
          dishes: {
            select: {
              id: true,
              name: true,
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
  });
}

export function filterRestaurants({ searchQuery }) {
  const filterBy = `%${searchQuery}%`;

  return prisma.$queryRaw`
    select r.id,
    r.name
    from public."Restaurant" as r
    left outer join public."Menu" as m
    on r.id = m."restaurantId"
    left outer join public."Dish" as d
    on m.id = d."menuId"
    left outer join public."RestaurantCuisine" as rc
    on r.id = rc."restaurantId"
    left outer join public."Cuisine" as c
    on rc."cuisineId" = c.id
    where d.name ilike ${filterBy}
    or c.name ilike ${filterBy}
    or r.name ilike ${filterBy}
    group by r.id, r.name
  `;
}
