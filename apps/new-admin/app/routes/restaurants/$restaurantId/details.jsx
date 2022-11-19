import { redirect } from '@remix-run/node'
import { Form, useOutletContext } from '@remix-run/react'

import Button from '~/components/Button'

import { updateRestaurant } from '~/models/restaurant.server'

export async function action({ request, params }) {
	const { restaurantId } = params
	const formData = await request.formData()
	const name = formData.get('name')
	const address = formData.get('address')

	await updateRestaurant({
		id: restaurantId,
		name,
		address,
	})

	return redirect(`restaurants/${restaurantId}/details`)
}

export default function RestaurantDetailsPage() {
	const { restaurant } = useOutletContext()

	return (
		<div className="p-4">
			<Form method="post">
				<div>
					<label htmlFor="restaurant-name" className="text-slate-700">
						Name
					</label>
					<input
						id="restaurant-name"
						className="mt-2 bg-white px-2 py-2 w-full border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
						type="text"
						name="name"
						required
						defaultValue={restaurant.name}
					/>
				</div>
				<div className="mt-8">
					<label htmlFor="restaurant-address" className="text-slate-700">
						Address
					</label>
					<textarea
						id="restaurant-address"
						className="mt-2 bg-white px-2 py-2 w-full border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
						type="text"
						name="address"
						required
						rows="4"
						defaultValue={restaurant.address}
					/>
				</div>
				<div className="mt-8">
					<Button type="submit" primary full rounded>
						Save
					</Button>
				</div>
			</Form>
		</div>
	)
}
