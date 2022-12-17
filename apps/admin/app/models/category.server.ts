import prisma from 'db/dist/connection'
import type { Category } from 'db/prisma-client'

export function createCategory({
	name,
	menuId,
}: Pick<Category, 'name' | 'menuId'>) {
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

export function getCategoryById(id: Category['id']) {
	return prisma.category.findFirst({
		select: {
			id: true,
			name: true,
		},
		where: { id },
	})
}

export function deleteCategory(id: Category['id']) {
	return prisma.category.delete({
		where: {
			id,
		},
	})
}

export function updateCategory({ id, name }: Pick<Category, 'id' | 'name'>) {
	return prisma.category.update({
		data: {
			name,
		},
		where: {
			id,
		},
	})
}
