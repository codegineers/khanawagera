import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getRestaurantById } from "~/models/restaurant.server";

export async function loader({ params }) {
  const { restaurantId } = params;
  const restaurant = await getRestaurantById(restaurantId);
  return json({ restaurant });
}

export default function RestaurantPage() {
  const { restaurant } = useLoaderData();
  const { name, address, menus, restaurantCuisines } = restaurant;
  const { dishes } = menus[0];
  return (
    <div>
      <div className="grid bg-white py-4 px-4 rounded max-w-xl mx-auto justify-items-center my-8">
        <h1 className="my-2 text-2xl font-bold uppercase">{name}</h1>
        <div className="flex space-x-1">
          {restaurantCuisines.map(({ cuisine }, index) => (
            <span
              key={cuisine.id}
              className="space-x-1 text-sm my-2 font-light"
            >
              {cuisine.name}
              {index !== restaurantCuisines.length - 1 && ","}
            </span>
          ))}
        </div>
        <div className="text-sm my-2 font-light text-center">{address}</div>
      </div>

      <div className="bg-white py-4 px-4 rounded max-w-xl mx-auto my-8">
        <h3 className="text-xl font-medium border-b-2 border-emerald-400 pb-2 mb-4 uppercase">
          What to eat
        </h3>
        {dishes.map(({ id, name }, index) => (
          <div
            className="my-2 text-slate-700 border-b-2 border-slate-100 pb-2"
            key={id}
          >
            #<span className="mr-4">{index + 1}</span>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
