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
					<Link
						to={`categories/${category.id}`}
						key={category.id}
						className="border-b-2 active:bg-emerald-500 border-slate-100 py-3 px-4 hover:bg-emerald-300 hover:text-white cursor-pointer"
					>
						<span className="overflow-hidden whitespace-nowrap">
							{category.name}
						</span>
					</Link>
				))}
			</div>
			<Link to={`categories/new`}>
				<Button type="button" primary full>
					Add Category
				</Button>
			</Link>
			<Outlet />
			{showNewDishModal && <AddDishDialog title={'Add dish'} />}
		</div>
	)
}