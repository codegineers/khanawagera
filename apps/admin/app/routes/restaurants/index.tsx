import { useLoaderData, Link, Outlet } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getRestaurants } from 'db/dist/models/restaurant'

export async function loader() {
	return json(await getRestaurants())
}

export default function RestaurantPage() {
	const restaurants = useLoaderData<typeof loader>()

	return (
		<div>
			<div className="bg-emerald-400 py-3 px-2 text-white">Restaurants</div>

			<div className="max-w-md mx-auto my-8 bg-white rounded shadow">
				{restaurants.length > 0 && (
					<Link to="new">
						<button
							type="button"
							className="font-bold text-slate-400 border-b-2 w-full text-left px-4 py-3 active:bg-emerald-500 border-slate-100 hover:bg-emerald-300 hover:text-white cursor-pointer"
						>
							Add new restaurant
						</button>
					</Link>
				)}
				<div>
					{restaurants.map(({ id, name }) => (
						<Link
							key={`${id}-${name}`}
							to={`${id}/details`}
							className="border-b-2 border-slate-100 block py-3 px-4 hover:bg-emerald-300 hover:text-white cursor-pointer active:bg-emerald-500"
						>
							{name}
						</Link>
					))}
				</div>
				<Link to="new">
					<button
						type="button"
						className="font-bold text-slate-400 w-full text-left px-4 py-3 active:bg-emerald-500 border-slate-100 hover:bg-emerald-300 hover:text-white cursor-pointer"
					>
						Add new restaurant
					</button>
				</Link>
			</div>

			<Outlet />
		</div>
	)
}
