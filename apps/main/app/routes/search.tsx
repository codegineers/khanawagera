import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  filterRestaurants,
  getRestaurantsByCuisine,
} from "db/dist/models/restaurant";

import type { Restaurant } from "db/dist/models/restaurant";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const searchByCuisine = url.searchParams.get("cuisine");
  const searchQuery = url.searchParams.get("q");

  let restaurants: Restaurant[] = [];

  if (searchByCuisine) {
    restaurants = await getRestaurantsByCuisine({
      cuisine: searchByCuisine,
    });
  }

  if (searchQuery) {
    restaurants = await filterRestaurants({
      searchQuery,
    });
  }

  return json({ restaurants });
}

export default function SearchPage() {
  const { restaurants } = useLoaderData<typeof loader>();

  return (
    <div className="container my-8 mx-auto px-8 py-4">
      {restaurants.length > 0 && (
        <div className="mb-4 font-light">
          {restaurants.length} restaurants found
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-12 gap-4">
        {restaurants.map(({ id, name }) => (
          <Link
            key={id}
            to={`/restaurants/${id}`}
            className="rounded col-span-full sm:col-span-6 bg-white my-1 py-8 text-center text-lg font-medium cursor-pointer border-b-2 text-slate-700 sm:hover:shadow-md"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}