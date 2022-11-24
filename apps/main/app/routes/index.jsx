import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { filterRestaurants } from "~/models/restaurant.server";

import { getCuisines } from "models/cuisine";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("search");

  const restaurants = await filterRestaurants({
    searchQuery,
  });

  const cuisines = await getCuisines();

  return json({ restaurants, cuisines });
}

export default function Index() {
  const { restaurants, cuisines } = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-12 p-3 bg-emerald-400">
        <Form className="col-span-12" method="get">
          <input
            id="search"
            type="text"
            name="search"
            className="w-full p-2 bg-white border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
            placeholder="Kya khaney ka mood hai?"
            autoFocus
          />
        </Form>
      </div>

      {restaurants.length > 0 && (
        <div className="p-3">{restaurants.length} Restaurants found</div>
      )}

      <div className="grid p-3">
        {restaurants.map(({ id, name }) => (
          <Link
            key={id}
            to={`restaurants/${id}`}
            className="bg-white my-1 py-2 px-4 cursor-pointer border-b-2 text-slate-700 hover:shadow-md"
          >
            <div>{name}</div>
          </Link>
        ))}
      </div>

      <div className="p-3">
        <h2 className="text-lg font-medium">Top Cuisines</h2>
        <div className="grid grid-cols-2 sm:grid-cols-12 gap-2 my-4">
          {cuisines.map(({ id, name }) => (
            <div
              key={id}
              className="bg-white col-span-1 sm:col-span-3 md:col-span-2 py-2 rounded my-auto text-center cursor-pointer hover:shadow-md"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
