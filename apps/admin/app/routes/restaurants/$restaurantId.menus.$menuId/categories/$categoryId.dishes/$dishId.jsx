import { json, redirect } from '@remix-run/node'
import { Form, Link, useParams, useLoaderData } from '@remix-run/react'
import { deleteDish, getDishById, updateDish } from '~/models/dish.sever'

import Button from '~/components/Button'

export async function loader({ params }) {
	const dish = await getDishById(params.dishId)
	return json({ dish })
}

export async function action({ request, params }) {
	const { restaurantId, menuId, dishId } = params
	const formData = await request.formData()

	const formType = formData.get('type')
	switch (formType) {
		case 'delete':
			await deleteDish({ id: dishId })
			break

		case 'edit':
			const dishName = formData.get('dish')
			await updateDish({ id: dishId, name: dishName })
			break
	}

	return redirect(`/restaurants/${restaurantId}/menus/${menuId}`)
}

export default function DishPage() {
	const { dish } = useLoaderData()
	const { restaurantId, menuId } = useParams()
	const { name } = dish

	return (
		<>
			<div className="grid grid-flow-col justify-between bg-emerald-400 text-white shadow rounded">
				<Link
					to={`/restaurants/${restaurantId}/menus/${menuId}`}
					className="hover:bg-emerald-300 py-3 px-2 active:bg-emerald-500"
				>
					{name}
				</Link>
				<Form method="post">
					<button
						name="type"
						value="delete"
						type="submit"
						className="hover:bg-emerald-300 py-3 px-2 active:bg-emerald-500"
					>
						Delete
					</button>
				</Form>
			</div>
			<div className="max-w-lg my-8 py-4 px-4 mx-auto bg-white rounded">
				<Form method="post">
					<div className="p-4">
						<label htmlFor="dish" className="text-sm font-medium">
							Name
						</label>
						<input
							id="dish"
							type="text"
							name="dish"
							className="mt-2 bg-white px-2 py-2 w-full border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
							placeholder="Chicken biryani"
							autoFocus
							defaultValue={name}
						/>
					</div>
					<div className="grid border-t-2 text-slate-700 mt-4 mx-4 py-4">
						<div>
							<Button name="type" value="edit" type="submit" primary full>
								Save
							</Button>
						</div>
					</div>
				</Form>
			</div>
		</>
	)
}
