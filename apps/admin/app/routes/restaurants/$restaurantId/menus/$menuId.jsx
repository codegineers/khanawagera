import {
	Outlet,
	Link,
	useSearchParams,
	useOutletContext,
} from '@remix-run/react'
import { redirect } from '@remix-run/node'

import Button from '~/components/Button'
import AddDishDialog from '~/dialogs/AddDish'

import { createDish } from '~/models/dish.sever'

export async function action({ request, params }) {
	const { menuId, restaurantId } = params
	const formData = await request.formData()
	const name = formData.get('dish-name')
	await createDish({ name, menuId })

	return redirect(`/restaurants/${restaurantId}/menu/${menuId}`)
}

export default function RestaurantMenu() {
	const { restaurant } = useOutletContext()
	const { menus } = restaurant
	const [searchParams] = useSearchParams()
	const showNewDishModal = searchParams.get('new-dish')

	return (
		<div>
			<div>
				{menus[0].categories.map((category) => (
					<>
						<Link
							to={`categories/${category.id}`}
							key={category.id}
							className="block text-slate-700 font-semibold py-3 px-4 border-b-2 active:bg-emerald-500 border-slate-100 hover:bg-emerald-300 hover:text-white cursor-pointer"
						>
							<span className="overflow-hidden whitespace-nowrap">
								{category.name}
							</span>
						</Link>
						{category.dishes.map((dish) => (
							<Link
								to={`categories/${category.id}/dishes/${dish.id}`}
								key={dish.id}
								className="block py-3 px-6 border-b-2 active:bg-emerald-500 border-slate-100 hover:bg-emerald-300 hover:text-white cursor-pointer"
							>
								<span className="overflow-hidden whitespace-nowrap">
									{dish.name}
								</span>
							</Link>
						))}
						<Link to={`categories/${category.id}/dishes/new`}>
							<button
								type="button"
								className="border-b-2 text-slate-400 w-full text-left px-6 py-3 active:bg-emerald-500 border-slate-100 hover:bg-emerald-300 hover:text-white cursor-pointer"
							>
								Add new dish
							</button>
						</Link>
					</>
				))}
			</div>
			<Link to={`categories/new`}>
				<button
					type="button"
					className="font-semibold text-slate-400 w-full text-left px-4 py-3 active:bg-emerald-500 border-slate-100 hover:bg-emerald-300 hover:text-white cursor-pointer"
				>
					Add new category
				</button>
			</Link>
			<Outlet />
			{showNewDishModal && <AddDishDialog title={'Add dish'} />}
		</div>
	)
}
