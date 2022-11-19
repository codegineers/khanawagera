import {
	Outlet,
	Link,
	useSearchParams,
	useOutletContext,
	useLoaderData,
} from '@remix-run/react'
import { redirect } from '@remix-run/node'

import Button from '~/components/Button'
import AddDishDialog from '~/dialogs/AddDish'

import { createDish } from '~/models/dish.sever'

export async function action({ request, params }) {
	const { menuId, restaurantId } = params
	const formData = await request.formData()
	const name = formData.get('dish')
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
				{menus[0].dishes.map((dish) => (
					<Link
						to={`dishes/${dish.id}`}
						key={dish.id}
						className="grid border-b-2 border-slate-100 py-3 px-4 hover:bg-emerald-300 hover:text-white cursor-pointer"
					>
						<span className="overflow-hidden whitespace-nowrap">
							{dish.name}
						</span>
					</Link>
				))}
			</div>
			<Link to="?new-dish=true">
				<Button type="button" primary full>
					Add Dish
				</Button>
			</Link>
			<Outlet />
			{showNewDishModal && <AddDishDialog title={'Add dish'} />}
		</div>
	)
}
