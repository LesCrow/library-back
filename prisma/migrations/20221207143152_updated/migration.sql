/*
  Warnings:

  - You are about to drop the column `publicationDate` on the `Book` table. All the data in the column will be lost.
  - Added the required column `year` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` DROP COLUMN `publicationDate`,
    ADD COLUMN `year` DATETIME(3) NOT NULL;
