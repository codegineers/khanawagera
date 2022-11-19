import { Link, NavLink, useLoaderData, Outlet } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getRestaurant } from '~/models/restaurant.server'

export async function loader({ params }) {
	const restaurant = await getRestaurant(params.restaurantId)

	if (!restaurant) {
		return json('Restaurant not found', { status: 404 })
	}

	return json({ restaurant })
}

export default function RestaurantDetailPage() {
	const { restaurant } = useLoaderData()

	return (
		<div>
			<div className=" bg-emerald-400 text-white flex items-center">
				<Link
					to="/restaurants"
					className="hover:bg-emerald-300 py-3 px-2 active:bg-emerald-500"
				>
					{restaurant.name}
				</Link>
			</div>
			<div className="max-w-lg my-8 py-4 px-8 mx-auto bg-white rounded">
				<h2 className="mt-2 text-lg font-semibold text-slate-700">
					{restaurant.name}
				</h2>

				<p className="text-sm my-2">Address: {restaurant.address}</p>

				<div className="my-8 grid grid-cols-12 justify-items-center">
					<NavLink
						className={({ isActive }) =>
							`${
								isActive &&
								'border-b-2 pb-1 text-emerald-400 border-emerald-400'
							}
              w-full col-start-1 col-end-6 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to="cuisine"
					>
						Cuisine
					</NavLink>

					<div className="text-xl">|</div>
					<NavLink
						className={({ isActive }) =>
							`${
								isActive &&
								'border-b-2 pb-1 text-emerald-400 border-emerald-400 '
							}
             w-full col-start-7 col-end-12 text-center hover:text-emerald-300 active:text-emerald-500
            `
						}
						to="menu"
					>
						Menu
					</NavLink>
				</div>

				<Outlet context={{ restaurant }} />
			</div>
		</div>
	)
}
