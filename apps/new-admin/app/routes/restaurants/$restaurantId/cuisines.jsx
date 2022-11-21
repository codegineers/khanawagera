import {
	useSubmit,
	useTransition,
	useLoaderData,
	useOutletContext,
} from '@remix-run/react'
import { json } from '@remix-run/node'

import { getCuisines } from '~/models/cuisine.server'
import { addRestaurantCuisine } from '~/models/restaurantCuisine.server'

export async function loader() {
	const cuisines = await getCuisines()
	return json({ cuisines })
}

export async function action({ request, params }) {
	const { restaurantId } = params
	const formData = await request.formData()
	const cuisineId = formData.get('cuisine')
	return await addRestaurantCuisine({ restaurantId, cuisineId })
}

export default function RestaurantCuisines() {
	const { cuisines } = useLoaderData()
	const { restaurant } = useOutletContext()
	const submit = useSubmit()
	const transition = useTransition()

	const { restaurantCuisines } = restaurant
	const existingCuisineIds = restaurantCuisines.map(({ cuisine }) => cuisine.id)

	if (transition.submission) {
		var updatingCuisine = Object.fromEntries(
			transition.submission.formData
		).cuisine
	}

	function handleCuisine(event) {
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
								disabled={transition.submission}
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
