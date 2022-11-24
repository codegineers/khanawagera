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
  console.log({ restaurants });
  return (
    <div className="grid p-3">
      {restaurants.length > 0 && (
        <div className="p-3">{restaurants.length} Restaurants found</div>
      )}
      {restaurants.map(({ id, name }) => (
        <Link
          key={id}
          to={`/restaurants/${id}`}
          target="_blank"
          className="bg-white my-1 py-2 px-4 cursor-pointer border-b-2 text-slate-700 hover:shadow-md"
        >
          <div>{name}</div>
        </Link>
      ))}
    </div>
  );
}
