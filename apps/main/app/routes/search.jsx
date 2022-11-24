import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { filterRestaurants, getRestaurantsByCuisine } from "models/restaurant";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const searchByCuisine = url.searchParams.get("cuisine");
  const searchQuery = url.searchParams.get("q");

  var restaurants = [];

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
  const { restaurants } = useLoaderData();

  return (
    <div className="container my-8 mx-auto px-8 py-4">
      {restaurants.length > 0 && (
        <div className="my-4 font-light">
          {restaurants.length} Restaurants found
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-12 gap-4">
        {restaurants.map(({ id, name }) => (
          <Link
            key={id}
            to={`/restaurants/${id}`}
            target="_blank"
            className="rounded col-span-full sm:col-span-6 bg-white my-1 py-8 text-center text-lg font-medium cursor-pointer border-b-2 text-slate-700 sm:hover:shadow-md"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
