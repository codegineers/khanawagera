import { Form, Link } from '@remix-run/react'
import Button from '~/components/Button'

import Modal, { Header, Body } from '~/components/Modal'

export default function AddDishDialog({ title }) {
	return (
		<Modal>
			<Header>{title}</Header>
			<Body>
				<Form method="post">
					<div className="p-4">
						<label htmlFor="dish" className="text-sm font-medium">
							Name
						</label>
						<input
							id="dish"
							type="text"
							name="dish-name"
							className="mt-2 bg-white px-2 py-2 w-full border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
							placeholder="Chicken biryani"
							autoFocus
						/>
					</div>
					<div className="grid grid-cols-12 place-items-end border-t-2 text-slate-700 mt-8 p-4">
						<div className="col-start-6 col-span-2">
							<Link to="">
								<Button type="button" outlined small>
									Cancel
								</Button>
							</Link>
						</div>
						<div className="col-start-10 col-span-12">
							<Button type="submit" primary small>
								Save
							</Button>
						</div>
					</div>
				</Form>
			</Body>
		</Modal>
	)
}
