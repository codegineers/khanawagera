import { redirect } from '@remix-run/node'
import type { ActionArgs } from '@remix-run/node'
import { Form, Link, useParams } from '@remix-run/react'
import { createDish } from '~/models/dish.server'

import Button from '~/components/Button'
import invariant from 'tiny-invariant'
import { json } from '@remix-run/node'

export async function action({ request, params }: ActionArgs) {
	const { restaurantId, menuId, categoryId } = params
	invariant(restaurantId, 'restaurantId not found')
	invariant(menuId, 'menuId not found')
	invariant(categoryId, 'categoryId not found')

	const formData = await request.formData()
	const name = formData.get('dish')

	if (typeof name !== 'string' || name.length === 0) {
		return json({ errors: { name: 'Dish name is required' } }, { status: 400 })
	}

	await createDish({ name, categoryId })
	return redirect(`/restaurants/${restaurantId}/menu`)
}

export default function NewDishPage() {
	const { restaurantId } = useParams()

	return (
		<>
			<div className="grid grid-flow-col justify-between bg-emerald-400 text-white shadow rounded">
				<Link
					to={`/restaurants/${restaurantId}/menu`}
					className="hover:bg-emerald-300 py-3 px-2 active:bg-emerald-500"
				>
					New dish
				</Link>
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
						/>
					</div>
					<div className="grid border-t-2 text-slate-700 mt-4 mx-4 py-4">
						<div>
							<Button name="type" value="edit" type="submit" primary full>
								<span>Save</span>
							</Button>
						</div>
					</div>
				</Form>
			</div>
		</>
	)
}
