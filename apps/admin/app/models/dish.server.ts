import prisma from 'db/dist/connection'
import type { Dish } from 'db/prisma-client'

export function getAllByCategoryId(categoryId: Dish['categoryId']) {
	return prisma.dish.findMany({
		select: {
			id: true,
			name: true,
		},
		where: { categoryId },
	})
}

export function getDishById(id: Dish['id']) {
	return prisma.dish.findFirst({
		select: {
			id: true,
			name: true,
		},
		where: { id: id },
	})
}

export function createDish({
	name,
	categoryId,
}: Pick<Dish, 'name' | 'categoryId'>) {
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

export function deleteById(id: Dish['id']) {
	return prisma.dish.delete({
		where: {
			id,
		},
	})
}

export function updateDish({ id, name }: Pick<Dish, 'id' | 'name'>) {
	return prisma.dish.update({
		data: {
			name,
		},
		where: {
			id,
		},
	})
}
