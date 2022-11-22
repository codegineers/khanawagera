import { redirect } from '@remix-run/node'
import { Form, Link, useParams } from '@remix-run/react'
import { createCategory } from '~/models/category.server'

import Button from '~/components/Button'

export async function action({ request, params }) {
	const { restaurantId, menuId } = params
	const formData = await request.formData()
	const name = formData.get('category')
	await createCategory({ name, menuId })
	return redirect(`/restaurants/${restaurantId}/menus/${menuId}`)
}

export default function NewCategoryPage() {
	const { restaurantId, menuId } = useParams()

	return (
		<>
			<div className="grid grid-flow-col justify-between bg-emerald-400 text-white shadow rounded">
				<Link
					to={`/restaurants/${restaurantId}/menus/${menuId}`}
					className="hover:bg-emerald-300 py-3 px-2 active:bg-emerald-500"
				>
					New category
				</Link>
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
