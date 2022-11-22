import { prisma } from 'db'

export function getDishes(categoryId) {
	return prisma.dish.findMany({
		select: {
			id: true,
			name: true,
		},
		where: { categoryId: categoryId },
	})
}

export function getDishById(id) {
	return prisma.dish.findFirst({
		select: {
			id: true,
			name: true,
		},
		where: { id: id },
	})
}

export function createDish({ name, categoryId }) {
	console.log({ name, categoryId })
	return prisma.dish.create({
		data: {
			name,
			category: {
				connect: {
					id: categoryId,
				},
			},
		},
	})
}

export function deleteDish({ id }) {
	return prisma.dish.delete({
		where: {
			id,
		},
	})
}

export function updateDish({ id, name }) {
	return prisma.dish.update({
		data: {
			name,
		},
		where: {
			id,
		},
	})
}
