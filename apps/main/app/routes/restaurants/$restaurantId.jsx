import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getRestaurantById } from "db/models/restaurant";

export async function loader({ params }) {
  const { restaurantId } = params;
  const restaurant = await getRestaurantById(restaurantId);
  return json({ restaurant });
}

export default function RestaurantPage() {
  const { restaurant } = useLoaderData();
  const { name, address, menus, restaurantCuisines } = restaurant;
  const { categories } = menus[0];
  return (
    <div className="container my-8 max-w-lg mx-auto px-8 py-4">
      <div className="bg-white py-4 px-4 rounded text-center">
        <h1 className="my-2 text-lg sm:text-2xl font-bold uppercase">{name}</h1>
        <div className="space-x-1">
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

      <div className="bg-white rounded mt-8">
        <h3 className="text-base sm:text-xl p-4 font-medium border-b-2 border-emerald-400 pb-2 uppercase">
          What to eat
        </h3>
        <div>
          {categories.map(({ id, name, dishes }) => (
            <>
              <div
                key={id}
                className="text-sm border-b-2 font-semibold border-slate-100 py-3 px-4 hover:bg-emerald-300 hover:text-white"
              >
                <span className="overflow-hidden whitespace-nowrap">
                  {name}
                </span>
              </div>
              {dishes.map(({ id, name }) => (
                <div
                  key={id}
                  className="text-sm border-b-2 border-slate-100 py-3 px-6 hover:bg-emerald-300 hover:text-white"
                >
                  <span className="overflow-hidden whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
