import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";

import { getRestaurants } from "~/models/restaurant.server";

import Button from "~/components/Button";

export async function loader() {
  return json(await getRestaurants());
}

export default function RestaurantPage() {
  const restaurants = useLoaderData()

  return (
    <div className="container px-8">
      <h2 className="mt-2 text-lg font-semibold text-slate-700">Restaurants</h2>
      
      <div className="my-4">
        {restaurants.map(({id, name}) => (
        <div key={`${id}-${name}`}>
          <Link to={`${id}/cuisine`}>{name}</Link>
        </div>
      ))}
      </div>

      <div className="my-4">
        <Link to="new">
          <Button type="button" primary>
            Add Restaurant
          </Button>
        </Link>
      </div>

      <Outlet />
    </div>
  )
}