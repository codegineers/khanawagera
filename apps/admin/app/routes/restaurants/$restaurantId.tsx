import { Link, NavLink, useLoaderData, Outlet } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { getRestaurantById } from '~/models/restaurant.server'

export async function loader({ params }: LoaderArgs) {
	const { restaurantId } = params

	invariant(restaurantId, 'restaurantId not found')

	const restaurant = await getRestaurantById(restaurantId)

	if (!restaurant) {
		throw new Response('Restaurant not found', { status: 404 })
	}

	return json({ restaurant })
}

export default function RestaurantPage() {
	const { restaurant } = useLoaderData<typeof loader>()

	return (
		<div>
			<div className="grid grid-flow-col justify-between bg-emerald-400 text-white">
				<Link
					to="/restaurants"
					className="hover:bg-emerald-300 py-3 px-2 active:bg-emerald-500"
				>
					{restaurant.name}
				</Link>
			</div>

			<div className="max-w-lg py-3 px-8 mx-auto rounded">
				<div className="my-8 grid grid-cols-12 gap-1 grid-flow-col shadow">
					<NavLink
						className={({ isActive }) =>
							`${isActive && 'text-emerald-400 border-b-4 border-b-emerald-400'}
              p-2 bg-white col-span-4 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to="details"
					>
						Details
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`${
								isActive && ' text-emerald-400 border-b-4 border-b-emerald-400'
							}
              p-2 bg-white col-span-4 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to="cuisines"
					>
						Cuisines
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`${isActive && 'text-emerald-400 border-b-4 border-b-emerald-400'}
             p-2 bg-white col-span-4 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to={`menu/${restaurant.menu[0].id}`}
					>
						Menu
					</NavLink>
				</div>
				<div className="bg-white rounded shadow">
					<Outlet context={{ restaurant }} />
				</div>
			</div>
		</div>
	)
}
