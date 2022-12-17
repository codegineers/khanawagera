import { json, redirect } from '@remix-run/node'
import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { Form, Link, useParams, useLoaderData } from '@remix-run/react'
import {
	deleteCategory,
	getCategoryById,
	updateCategory,
} from '~/models/category.server'

import Button from '~/components/Button'
import invariant from 'tiny-invariant'

export async function loader({ params }: LoaderArgs) {
	const { categoryId } = params
	invariant(categoryId, 'categoryId not found')

	const category = await getCategoryById(categoryId)

	if (!category) {
		throw new Response('Not found', { status: 404 })
	}

	return json({ category })
}

export async function action({ request, params }: ActionArgs) {
	const { restaurantId, menuId, categoryId } = params
	invariant(restaurantId, 'restaurantId not found')
	invariant(menuId, 'menuId not found')
	invariant(categoryId, 'categoryId not found')

	const formData = await request.formData()

	const formType = formData.get('type')

	switch (formType) {
		case 'delete':
			await deleteCategory(categoryId)
			break

		case 'edit':
			const name = formData.get('category')

			if (typeof name !== 'string' || name.length === 0) {
				return json(
					{ errors: { name: 'Category name is required' } },
					{ status: 400 }
				)
			}

			await updateCategory({ id: categoryId, name })
			break
	}

	return redirect(`/restaurants/${restaurantId}/menu`)
}

export default function CategoryPage() {
	const { category } = useLoaderData<typeof loader>()
	const { restaurantId, menuId } = useParams()
	const { name } = category

	return (
		<>
			<div className="grid grid-flow-col justify-between bg-emerald-400 text-white shadow rounded">
				<Link
					to={`/restaurants/${restaurantId}/menu`}
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
								<span>Save</span>
							</Button>
						</div>
					</div>
				</Form>
			</div>
		</>
	)
}
