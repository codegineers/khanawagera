import { prisma } from 'db'

export function getDishes(menuId) {
	return prisma.dish.findMany({
		select: {
			id: true,
			name: true,
		},
		where: { menuId: menuId },
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

export function createDish({ name, menuId }) {
	return prisma.dish.create({
		data: {
			name,
			menu: {
				connect: {
					id: menuId,
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
