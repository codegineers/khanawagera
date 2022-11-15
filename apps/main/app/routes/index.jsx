import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRestaurants } from "~/models/restaurant.server";

export async function loader() {
  const restaurants = await getRestaurants();
  return json({ restaurants });
}

export default function Index() {
  const { restaurants } = useLoaderData();
  console.log({ restaurants });
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.5",
        boxSizing: "border-box",
      }}
    >
      <div className="flex flex-1 bg-emerald-400 p-2 text-white">
        Pak Restaurants
      </div>
      <div className="mt-8 grid grid-cols-12 box-content">
        <div className="col-span-12 flex-1 p-2">
          <input
            id="search"
            type="text"
            name="search"
            className="bg-white w-full p-2 border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
            placeholder="Search dishes, cuisine, restaurants..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
