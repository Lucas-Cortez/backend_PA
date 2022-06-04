/*
  Warnings:

  - Added the required column `active` to the `bus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bus` ADD COLUMN `active` BOOLEAN NOT NULL,
    ADD COLUMN `model` VARCHAR(191) NULL;
