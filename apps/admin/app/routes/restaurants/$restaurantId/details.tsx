import type { ActionArgs } from '@remix-run/node'
import { Form, useOutletContext } from '@remix-run/react'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'

import Button from '~/components/Button'

import { updateRestaurant } from '~/models/restaurant.server'
import type { Restaurant } from 'db/prisma-client'

export async function action({ request, params }: ActionArgs) {
	const { restaurantId } = params
	invariant(restaurantId, 'restaurantId not found')

	const formData = await request.formData()
	const name = formData.get('name')
	const address = formData.get('address')

	if (typeof name !== 'string' || name.length === 0) {
		return json(
			{
				errors: { name: 'Name is required', address: null },
			},
			{ status: 400 }
		)
	}

	if (typeof address !== 'string' || address.length === 0) {
		return json(
			{
				errors: { address: 'Address is required', name: null },
			},
			{ status: 400 }
		)
	}

	const restaurant = await updateRestaurant({
		id: restaurantId,
		name,
		address,
	})

	return json({ restaurant })
}

export default function RestaurantDetailsPage() {
	const { restaurant } = useOutletContext<{ restaurant: Restaurant }>()

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
						name="address"
						required
						rows={4}
						defaultValue={restaurant.address || ''}
					/>
				</div>
				<div className="mt-8">
					<Button type="submit" primary full rounded>
						<span>Save</span>
					</Button>
				</div>
			</Form>
		</div>
	)
}
