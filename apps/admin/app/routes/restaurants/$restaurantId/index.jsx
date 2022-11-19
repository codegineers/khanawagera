import { redirect } from '@remix-run/node'

export async function loader({ params }) {
	const { restaurantId } = params

	return redirect(`/restaurants/${restaurantId}/details`)
}
