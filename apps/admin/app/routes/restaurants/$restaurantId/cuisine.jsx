import { useSubmit, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getCuisine } from '~/models/cuisine.server'
import { getRestaurantCuisine, addRestaurantCuisine } from '~/models/restaurantCuisine.server'

export async function loader({ params }) {
  const { restaurantId } = params
  const cuisine = await getCuisine()
  const restaurantCuisine = await getRestaurantCuisine({ restaurantId })
  return json({ cuisine, restaurantCuisine })
}

export async function action({ request, params }) {
  const { restaurantId } = params
  const formData = await request.formData()
  const cuisineId = formData.get("cuisine")
  return await addRestaurantCuisine({ restaurantId, cuisineId })
}

export default function RestaurantCuisine() {
  const { cuisine, restaurantCuisine } = useLoaderData()
  const submit = useSubmit()
  const existingCuisineIds = restaurantCuisine.map(({cuisine}) => cuisine.id)

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
          {restaurantCuisine.length > 0 && restaurantCuisine.map(({cuisine}) => (
            <div className="col-span-2 py-2 border-2 rounded-sm border-emerald-400 text-center" key={cuisine.id}>
              {cuisine.name}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8" />
      {cuisine.map(({id, name}) => (
        <div key={`${id}-${name}`}>
          <input
            id="cuisine"
            name="cuisine"
            type="checkbox"
            defaultChecked={existingCuisineIds.includes(id)}
            onChange={handleCuisine}
            value={id}
          />
          <label className="ml-2" htmlFor="cuisine">{name}</label>
        </div>
      ))}
    </div>
  )
}