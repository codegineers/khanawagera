import { Form } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { createRestaurant } from '~/models/restaurant.server'
import { createMenu } from '~/models/menu.server'

import Button from '~/components/Button'

export async function action({ request }) {
	const formData = await request.formData()
	const name = formData.get('name')
	const address = formData.get('address')

	const restaurant = { name, address }
	console.log('creating new restaurant')
	const newRestaurant = await createRestaurant(restaurant)

	if (newRestaurant) {
		await createMenu(newRestaurant.id)
	}

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
						type="text"
						name="address"
						required
					/>
				</div>
				<div className="mt-8">
					<Button type="submit" primary>
						Create
					</Button>
				</div>
			</Form>
		</div>
	)
}
