import { Link, NavLink, useLoaderData, Outlet } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getRestaurantById } from '~/models/restaurant.server'

export async function loader({ params }) {
	const restaurant = await getRestaurantById(params.restaurantId)

	if (!restaurant) {
		return json('Restaurant not found', { status: 404 })
	}

	return json({ restaurant })
}

export default function RestaurantPage() {
	const { restaurant } = useLoaderData()

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
				<div className="my-8 grid grid-cols-12 grid-flow-col justify-between border-2 divide-x-2">
					<NavLink
						className={({ isActive }) =>
							`${isActive && 'bg-white text-emerald-400'}
              p-2 col-span-4 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to="details"
					>
						Details
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`${isActive && 'bg-white text-emerald-400'}
              p-2 col-span-4 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to="cuisines"
					>
						Cuisines
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`${isActive && 'bg-white text-emerald-400'}
             p-2 col-span-4 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to={`menu/${restaurant.menus[0].id}`}
					>
						Menu
					</NavLink>
				</div>
				<div className="bg-white rounded">
					<Outlet context={{ restaurant }} />
				</div>
			</div>
		</div>
	)
}
