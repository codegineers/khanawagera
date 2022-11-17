import { useSubmit, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getCuisines } from '~/models/cuisine.server'
import {
	getRestaurantCuisines,
	addRestaurantCuisine,
} from '~/models/restaurantCuisine.server'

export async function loader({ params }) {
	const { restaurantId } = params
	const cuisines = await getCuisines()
	const restaurantCuisines = await getRestaurantCuisines({ restaurantId })
	return json({ cuisines, restaurantCuisines })
}

export async function action({ request, params }) {
	const { restaurantId } = params
	const formData = await request.formData()
	const cuisineId = formData.get('cuisine')
	return await addRestaurantCuisine({ restaurantId, cuisineId })
}

export default function RestaurantCuisine() {
	const { cuisines, restaurantCuisines } = useLoaderData()
	const submit = useSubmit()
	const existingCuisineIds = restaurantCuisines.map(({ cuisine }) => cuisine.id)

	function handleCuisine(event) {
		const { value, name } = event.currentTarget
		const formData = new FormData()
		formData.append(name, value)
		submit(formData, { method: 'post' })
	}

	return (
		<div className="text-slate-700">
			<div>
				<div>Selected:</div>
				<div className="mt-2 grid grid-cols-8 grid-rows-2 gap-2">
					{restaurantCuisines.length > 0 &&
						restaurantCuisines.map(({ cuisine }) => (
							<div
								className="col-span-2 py-2 border-2 rounded-sm border-emerald-400 text-center"
								key={cuisine.id}
							>
								{cuisine.name}
							</div>
						))}
				</div>
			</div>
			<hr className="my-8" />
			{cuisines.map(({ id, name }) => (
				<div key={`${id}-${name}`}>
					<input
						id={`cuisine-${id}`}
						name="cuisine"
						type="checkbox"
						defaultChecked={existingCuisineIds.includes(id)}
						onChange={handleCuisine}
						value={id}
					/>
					<label className="ml-2" htmlFor={`cuisine-${id}`}>
						{name}
					</label>
				</div>
			))}
		</div>
	)
}
