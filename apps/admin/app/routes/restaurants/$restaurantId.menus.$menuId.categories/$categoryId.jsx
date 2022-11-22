import { json, redirect } from '@remix-run/node'
import { Form, Link, useParams, useLoaderData } from '@remix-run/react'
import {
	deleteCategory,
	getCategoryById,
	updateCategory,
} from '~/models/category.server'

import Button from '~/components/Button'

export async function loader({ params }) {
	const category = await getCategoryById(params.categoryId)
	return json({ category })
}

export async function action({ request, params }) {
	const { restaurantId, menuId, categoryId } = params
	const formData = await request.formData()

	const formType = formData.get('type')
	switch (formType) {
		case 'delete':
			await deleteCategory({ id: categoryId })
			break

		case 'edit':
			const name = formData.get('category')
			await updateCategory({ id: categoryId, name })
			break
	}

	return redirect(`/restaurants/${restaurantId}/menus/${menuId}`)
}

export default function CategoryPage() {
	const { category } = useLoaderData()
	const { restaurantId, menuId } = useParams()
	const { name } = category

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
						<label htmlFor="category" className="text-sm font-medium">
							Name
						</label>
						<input
							id="category"
							type="text"
							name="category"
							className="mt-2 bg-white px-2 py-2 w-full border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
							placeholder="Biryani"
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
