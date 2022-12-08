import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getCuisines } from "db/models/cuisine";

export async function loader() {
  const cuisines = await getCuisines();
  return json({ cuisines });
}

export default function Index() {
  const { cuisines } = useLoaderData<typeof loader>();

  return (
    <div className="container my-8 mx-auto px-8 py-4">
      <h2 className="text-xl capitalize font-semibold">cuisines</h2>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-4 my-4">
        {cuisines.map(({ id, name }) => (
          <Link
            to={`/search?cuisine=${name.toLowerCase()}`}
            key={id}
            className="capitalize block bg-white col-span-3 md:col-span-3 py-8 rounded my-auto text-center cursor-pointer hover:shadow-md"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
