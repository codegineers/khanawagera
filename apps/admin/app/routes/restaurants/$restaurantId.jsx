import { NavLink, useLoaderData, Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";

import { getRestaurant } from "~/models/restaurant.server";

export async function loader({ params }) {
  const restaurant = await getRestaurant(params.restaurantId);
  console.log({restaurant})
  if (!restaurant) {
    return json("Restaurant not found", { status: 404 });
  }

  return json({ restaurant })
}

export default function RestaurantDetailPage() {
  const { restaurant } = useLoaderData()
  console.log({ restaurant })
  return (
    <div className="container px-8">
      <h2 className="mt-2 text-lg font-semibold text-slate-700">{restaurant.name}</h2>

      <p className="text-sm my-2">Address: {restaurant.address}</p>

      <div className="my-8 grid grid-cols-12 justify-items-center">
        <NavLink
          className={({isActive}) =>
            `${isActive && 'border-b-2 pb-1 text-emerald-400 border-emerald-400'}
              w-full col-start-5 text-center hover:text-emerald-300 active:text-emerald-500
            `
          }
          to="cuisine"
        >
          Cuisine
        </NavLink>

        <div className="text-xl text-emerald-300">|</div>
        <NavLink
          className={({isActive}) =>
            `${isActive && 'border-b-2 pb-1 text-emerald-400 border-emerald-400 '}
             w-full col-start-7 text-center hover:text-emerald-300 active:text-emerald-500
            `
          }
          to={`menu/${restaurant.menu[0]?.id}`}
        >
          Menu
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}