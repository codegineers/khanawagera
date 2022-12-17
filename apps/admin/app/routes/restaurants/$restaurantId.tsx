import { Link, NavLink, Outlet } from '@remix-run/react'

export default function RestaurantPage() {
	return (
		<div>
			<div className="grid grid-flow-col justify-between bg-emerald-400 text-white">
				<Link
					to="/restaurants"
					className="hover:bg-emerald-300 py-3 px-2 active:bg-emerald-500"
				>
					Back
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
						to="menu"
					>
						Menu
					</NavLink>
				</div>
				<div className="bg-white rounded shadow">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
