import { prisma } from 'db'

export function createCategory({ name, menuId }) {
	return prisma.category.create({
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
