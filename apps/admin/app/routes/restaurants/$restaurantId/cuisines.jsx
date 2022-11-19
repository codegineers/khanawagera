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
		<div className="text-slate-700 p-4">
			<div>
				<div className="font-medium">Selected:</div>
				<ul className="list-inside list-decimal mt-2 grid grid-cols-8 gap-2">
					{restaurantCuisines.length > 0 &&
						restaurantCuisines.map(({ cuisine }) => (
							<li className="col-span-2 py-2" key={cuisine.id}>
								{cuisine.name}
							</li>
						))}
				</ul>
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
