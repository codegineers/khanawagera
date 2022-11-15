import { prisma } from '~/db.server'

export function getDishes(menuId) {
	return prisma.dish.findMany({
		select: {
			id: true,
			name: true,
		},
		where: { menuId: menuId },
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
