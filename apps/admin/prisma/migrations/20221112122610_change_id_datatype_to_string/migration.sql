/*
  Warnings:

  - The primary key for the `Cuisine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Dish` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RestaurantCuisine` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_menuId_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantCuisine" DROP CONSTRAINT "RestaurantCuisine_cuisineId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantCuisine" DROP CONSTRAINT "RestaurantCuisine_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Cuisine" DROP CONSTRAINT "Cuisine_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cuisine_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Cuisine_id_seq";

-- AlterTable
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "menuId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Dish_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Dish_id_seq";

-- AlterTable
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "restaurantId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Menu_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Menu_id_seq";

-- AlterTable
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Restaurant_id_seq";

-- AlterTable
ALTER TABLE "RestaurantCuisine" DROP CONSTRAINT "RestaurantCuisine_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "cuisineId" SET DATA TYPE TEXT,
ALTER COLUMN "restaurantId" SET DATA TYPE TEXT,
ADD CONSTRAINT "RestaurantCuisine_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RestaurantCuisine_id_seq";

-- AddForeignKey
ALTER TABLE "RestaurantCuisine" ADD CONSTRAINT "RestaurantCuisine_cuisineId_fkey" FOREIGN KEY ("cuisineId") REFERENCES "Cuisine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantCuisine" ADD CONSTRAINT "RestaurantCuisine_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
