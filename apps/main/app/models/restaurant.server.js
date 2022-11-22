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
    left outer join public."Category" as c
    on m.id = c."menuId"
    left outer join public."Dish" as d
    on c.id = d."categoryId"
    where d.name ilike ${filterBy}
    or c.name ilike ${filterBy}
    or r.name ilike ${filterBy}
    group by r.id, r.name
  `;
}
