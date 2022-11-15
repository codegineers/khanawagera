import { Outlet, Link, useSearchParams, useLoaderData } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'

import Button from '~/components/Button'
import AddDishDialog from '~/dialogs/AddDish'

import { createDish, getDishes } from '~/models/dish.sever'

export async function action({ request, params }) {
	const { menuId, restaurantId } = params
	const formData = await request.formData()
	const name = formData.get('dish')
	await createDish({ name, menuId })
	return redirect(`/restaurants/${restaurantId}/menu/${menuId}`)
}

export async function loader({ params }) {
	const { menuId } = params
	const dishes = await getDishes(menuId)
	return json({ dishes })
}

export default function RestaurantMenu() {
	const { dishes } = useLoaderData()
	const [searchParams] = useSearchParams()
	const showNewDishModal = searchParams.get('new-dish')
	return (
		<div>
			<div>
				{dishes.map((dish) => (
					<div key={dish.id} className="w-56 my-2 rounded">
						{dish.name}
					</div>
				))}
			</div>
			<Link to="?new-dish=true">
				<Button type="button" primary>
					Add Dish
				</Button>
			</Link>
			<Outlet />
			{showNewDishModal && <AddDishDialog title={'Add dish'} />}
		</div>
	)
}
