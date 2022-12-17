import { useSubmit, useTransition, useLoaderData } from '@remix-run/react'
import React from 'react'
import { json } from '@remix-run/node'
import type { LoaderArgs, ActionArgs } from '@remix-run/node'

import { getCuisines } from '~/models/cuisine.server'
import {
	addRestaurantCuisine,
	getAllByRestaurantId,
} from '~/models/restaurantCuisine.server'

import invariant from 'tiny-invariant'

export async function loader({ params }: LoaderArgs) {
	const { restaurantId } = params

	invariant(restaurantId, 'restaurantId not found')

	const cuisines = await getCuisines()
	const restaurantCuisines = await getAllByRestaurantId(restaurantId)
	return json({ restaurantCuisines, cuisines })
}

export async function action({ request, params }: ActionArgs) {
	const { restaurantId } = params

	invariant(restaurantId, 'restaurantId not found')

	const formData = await request.formData()
	const cuisineId = formData.get('cuisine')

	if (typeof cuisineId !== 'string' || cuisineId.length === 0) {
		return json(
			{ errors: { cuisineId: 'cuisine is required' } },
			{ status: 400 }
		)
	}

	return await addRestaurantCuisine({ restaurantId, cuisineId })
}

export default function RestaurantCuisines() {
	const { cuisines, restaurantCuisines } = useLoaderData<typeof loader>()
	const submit = useSubmit()
	const transition = useTransition()

	const existingCuisineIds = restaurantCuisines.map(
		({ cuisineId }) => cuisineId
	)

	if (transition.submission) {
		var updatingCuisine = Object.fromEntries(
			transition.submission.formData
		).cuisine
	}

	function handleCuisine(event: React.ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.currentTarget
		const formData = new FormData()
		formData.append(name, value)
		submit(formData, { method: 'post' })
	}

	return (
		<div className="text-slate-700 p-4 space-y-1">
			{cuisines.map(({ id, name }) => (
				<div key={`${id}-${name}`}>
					{updatingCuisine === id ? (
						<div>Loading...</div>
					) : (
						<>
							<input
								id={`cuisine-${id}`}
								name="cuisine"
								type="checkbox"
								checked={existingCuisineIds.includes(id)}
								onChange={handleCuisine}
								value={id}
								className="form-checkbox text-emerald-400 rounded border-gray-300 focus:ring-emerald-400 dark:focus:ring-emerald-400"
								disabled={transition.submission ? true : false}
							/>
							<label className="ml-2" htmlFor={`cuisine-${id}`}>
								{name}
							</label>
						</>
					)}
				</div>
			))}
		</div>
	)
}
