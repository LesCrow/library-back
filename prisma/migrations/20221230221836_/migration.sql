/*
  Warnings:

  - You are about to drop the column `firstname` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Author` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Author` DROP COLUMN `firstname`,
    DROP COLUMN `lastname`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Genre_name_key` ON `Genre`(`name`);
