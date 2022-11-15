
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRestaurants } from "~/models/restaurant.server";

export async function loader() {
  const restaurants = await getRestaurants()
  return json({ restaurants })
}

export default function Index() {
  const { restaurants } = useLoaderData() 
  console.log({ restaurants })
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl font-semibold
      
      
      ">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
