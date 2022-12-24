import { Form } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'
import type { ActionArgs } from '@remix-run/node'
import { createRestaurant } from 'db/dist/models/restaurant'
import { createMenu } from '~/models/menu.server'

import Button from '~/components/Button'

export async function action({ request }: ActionArgs) {
	const formData = await request.formData()
	const name = formData.get('name')
	const address = formData.get('address')

	if (typeof name !== 'string' || name.length === 0) {
		return json(
			{ errors: { name: 'Name is required', address: null } },
			{ status: 400 }
		)
	}

	if (typeof address !== 'string' || address.length === 0) {
		return json(
			{ errors: { address: 'Address is required', name: null } },
			{ status: 400 }
		)
	}

	const restaurant = { name, address }
	const newRestaurant = await createRestaurant(restaurant)

	await createMenu(newRestaurant.id)
	return redirect('/restaurants')
}

export default function NewRestaurantPage() {
	return (
		<div className="container px-8">
			<h2 className="mt-2 text-lg font-semibold text-slate-700">
				New Restaurant
			</h2>

			<Form method="post" className="flex-1 my-8">
				<div>
					<label className="block text-slate-700">Name</label>
					<input
						className="w-96 border-2 px-2 py-1 mt-2"
						type="text"
						name="name"
						required
					/>
				</div>
				<div className="mt-8">
					<label className="block text-slate-700">Address</label>
					<textarea
						className="w-96 border-2 px-2 py-1 mt-2"
						name="address"
						required
					/>
				</div>
				<div className="mt-8">
					<Button type="submit" primary>
						<span>Create</span>
					</Button>
				</div>
			</Form>
		</div>
	)
}
