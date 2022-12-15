import { redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'

export async function loader({ params }: LoaderArgs) {
	const { restaurantId } = params

	return redirect(`/restaurants/${restaurantId}/details`)
}
