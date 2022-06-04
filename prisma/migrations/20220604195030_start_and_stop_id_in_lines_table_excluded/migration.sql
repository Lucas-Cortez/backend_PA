/*
  Warnings:

  - You are about to drop the column `id_end_stop` on the `lines` table. All the data in the column will be lost.
  - You are about to drop the column `id_start_stop` on the `lines` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `lines` DROP FOREIGN KEY `lines_id_end_stop_fkey`;

-- DropForeignKey
ALTER TABLE `lines` DROP FOREIGN KEY `lines_id_start_stop_fkey`;

-- AlterTable
ALTER TABLE `lines` DROP COLUMN `id_end_stop`,
    DROP COLUMN `id_start_stop`;
