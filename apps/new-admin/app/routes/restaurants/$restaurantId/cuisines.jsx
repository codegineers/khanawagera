import { useSubmit, useLoaderData, useOutletContext } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getCuisines } from '~/models/cuisine.server'
import { addRestaurantCuisine } from '~/models/restaurantCuisine.server'

export async function loader({ params }) {
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
	const { restaurantCuisines } = restaurant

	const submit = useSubmit()
	const existingCuisineIds = restaurantCuisines.map(({ cuisine }) => cuisine.id)

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
					<input
						id={`cuisine-${id}`}
						name="cuisine"
						type="checkbox"
						checked={existingCuisineIds.includes(id)}
						onChange={handleCuisine}
						value={id}
						className="form-checkbox text-emerald-400 rounded border-gray-300 focus:ring-emerald-400 dark:focus:ring-emerald-400"
					/>
					<label className="ml-2" htmlFor={`cuisine-${id}`}>
						{name}
					</label>
				</div>
			))}
		</div>
	)
}
