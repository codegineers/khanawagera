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
  const { name, address, Menu, RestaurantCuisine } = restaurant;
  const [Dish] = Menu;

  return (
    <div>
      <div className="flex flex-1 bg-emerald-400 p-3 text-white">
        Kia khana hai?
      </div>

      <div className="grid bg-white py-4 px-4 rounded max-w-xl mx-auto justify-items-center my-8">
        <h1 className="my-2 text-xl font-semibold uppercase">{name}</h1>
        {RestaurantCuisine.map(({ Cuisine }, index) => (
          <div key={Cuisine.id} className="text-sm my-2 font-light">
            {Cuisine.name} {!index === 0 && "/"}
          </div>
        ))}
        <div className="text-sm my-2 font-light text-center">{address}</div>
      </div>
    </div>
  );
}
