import { useLoaderData, Link, Outlet } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getRestaurants } from '~/models/restaurant.server'

import Button from '~/components/Button'

export async function loader() {
	return json(await getRestaurants())
}

export default function RestaurantPage() {
	const restaurants = useLoaderData()

	return (
		<div>
			<div className="bg-emerald-400 p-3 text-white">Restaurants</div>

			<div className="max-w-md mx-auto my-8 bg-white rounded">
				<div>
					{restaurants.map(({ id, name }) => (
						<Link
							key={`${id}-${name}`}
							to={`${id}/cuisine`}
							className="border-b-2 border-slate-100 block py-3 px-4 hover:bg-emerald-300 hover:text-white cursor-pointer active:bg-emerald-500"
						>
							{name}
						</Link>
					))}
				</div>

				<Link to="new">
					<Button type="button" primary full>
						Add Restaurant
					</Button>
				</Link>
			</div>

			<Outlet />
		</div>
	)
}
