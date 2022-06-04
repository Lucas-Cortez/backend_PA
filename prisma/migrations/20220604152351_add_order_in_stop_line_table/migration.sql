/*
  Warnings:

  - Added the required column `order` to the `stops_lines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stops_lines` ADD COLUMN `order` INTEGER NOT NULL;
