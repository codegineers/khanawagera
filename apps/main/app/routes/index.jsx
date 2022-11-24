import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getCuisines } from "models/cuisine";

export async function loader({ request }) {
  const cuisines = await getCuisines();

  return json({ cuisines });
}

export default function Index() {
  const { cuisines } = useLoaderData();

  return (
    <div>
      {/* {restaurants.length > 0 && (
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
      </div> */}

      <div className="p-3">
        <h2 className="text-lg font-medium">Top Cuisines</h2>
        <div className="grid grid-cols-2 sm:grid-cols-12 gap-2 my-4">
          {cuisines.map(({ id, name }) => (
            <Link
              to={`/search?cuisine=${name.toLowerCase()}`}
              key={id}
              className="block bg-white col-span-1 sm:col-span-3 md:col-span-2 py-2 rounded my-auto text-center cursor-pointer hover:shadow-md"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
