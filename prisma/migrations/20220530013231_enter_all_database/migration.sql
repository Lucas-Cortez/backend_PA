/*
  Warnings:

  - You are about to drop the column `end` on the `lines` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `lines` table. All the data in the column will be lost.
  - Added the required column `id_end_stop` to the `lines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_start_stop` to the `lines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `lines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lines` DROP COLUMN `end`,
    DROP COLUMN `start`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `id_end_stop` INTEGER NOT NULL,
    ADD COLUMN `id_start_stop` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_id_key`(`id`),
    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_hash_key`(`hash`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stops` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,

    UNIQUE INDEX `stops_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `capacity` INTEGER NOT NULL,
    `height` DOUBLE NOT NULL,
    `width` DOUBLE NOT NULL,
    `length` DOUBLE NOT NULL,
    `weight` DOUBLE NOT NULL,

    UNIQUE INDEX `bus_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stops_lines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_line` INTEGER NOT NULL,
    `id_stop` INTEGER NOT NULL,

    UNIQUE INDEX `stops_lines_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stop_historic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` DATETIME(3) NOT NULL,
    `entered_people` INTEGER NOT NULL,
    `left_people` INTEGER NOT NULL,
    `id_line` INTEGER NOT NULL,
    `id_stop` INTEGER NOT NULL,

    UNIQUE INDEX `stop_historic_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lines` ADD CONSTRAINT `lines_id_start_stop_fkey` FOREIGN KEY (`id_start_stop`) REFERENCES `stops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lines` ADD CONSTRAINT `lines_id_end_stop_fkey` FOREIGN KEY (`id_end_stop`) REFERENCES `stops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stops_lines` ADD CONSTRAINT `stops_lines_id_line_fkey` FOREIGN KEY (`id_line`) REFERENCES `lines`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stops_lines` ADD CONSTRAINT `stops_lines_id_stop_fkey` FOREIGN KEY (`id_stop`) REFERENCES `stops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stop_historic` ADD CONSTRAINT `stop_historic_id_line_fkey` FOREIGN KEY (`id_line`) REFERENCES `lines`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stop_historic` ADD CONSTRAINT `stop_historic_id_stop_fkey` FOREIGN KEY (`id_stop`) REFERENCES `stops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
