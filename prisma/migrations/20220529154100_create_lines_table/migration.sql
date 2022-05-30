-- CreateTable
CREATE TABLE `lines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `start` VARCHAR(191) NOT NULL,
    `end` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `lines_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
