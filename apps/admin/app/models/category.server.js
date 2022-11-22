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

export function getCategoryById(id) {
	return prisma.category.findFirst({
		select: {
			id: true,
			name: true,
		},
		where: { id },
	})
}

export function deleteCategory({ id }) {
	return prisma.category.delete({
		where: {
			id,
		},
	})
}

export function updateCategory({ id, name }) {
	return prisma.category.update({
		data: {
			name,
		},
		where: {
			id,
		},
	})
}
