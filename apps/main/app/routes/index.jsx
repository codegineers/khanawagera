import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
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
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.5",
      }}
    >
      <div className="flex flex-1 bg-emerald-400 p-2 text-white">
        Pak Restaurants
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

      <div className="my-8 h-0.5 w-full bg-slate-100" />

      <div className="p-2 m-2">{restaurants.length} Restaurants found</div>

      <div className="grid p-2">
        {restaurants.map(({ id, name }) => (
          <div
            key={id}
            className="my-1 p-2 cursor-pointer border-b-2 text-slate-700 hover:shadow-md"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
