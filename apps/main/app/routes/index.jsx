import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { filterRestaurants } from "~/models/restaurant.server";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("search");

  const restaurants = await filterRestaurants({
    searchQuery,
  });
  return json({ restaurants });
}

export default function Index() {
  const { restaurants } = useLoaderData();

  return (
    <div>
      <div className="flex flex-1 bg-emerald-400 p-3 text-white">
        Kia khana hai?
      </div>
      <div className="mt-8 grid grid-cols-12 p-2">
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

      <div className="my-8 h-0.5 w-full bg-slate-300" />

      <div className="p-2 m-1">{restaurants.length} Restaurants found</div>

      <div className="grid p-2">
        {restaurants.map(({ id, name, cuisine }) => (
          <Link
            key={id}
            to={`restaurants/${id}`}
            className="bg-white my-1 py-2 px-4 cursor-pointer border-b-2 text-slate-700 hover:shadow-md"
          >
            <div>{name}</div>
            <div className="text-sm text-slate-600">{cuisine}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
