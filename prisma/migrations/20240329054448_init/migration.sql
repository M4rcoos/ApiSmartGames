-- CreateTable
CREATE TABLE `games` (
    `idGame` INTEGER NOT NULL AUTO_INCREMENT,
    `nameGame` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `discount` DOUBLE NULL,
    `description` TEXT NOT NULL,
    `linkImage` TEXT NOT NULL,

    PRIMARY KEY (`idGame`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `platforms` (
    `idPlatform` INTEGER NOT NULL AUTO_INCREMENT,
    `namePlatform` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idPlatform`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stores` (
    `idStore` INTEGER NOT NULL AUTO_INCREMENT,
    `adress` TEXT NOT NULL,
    `sales_quantity` INTEGER NOT NULL,
    `nameStore` VARCHAR(191) NOT NULL,
    `linkMap` TEXT NOT NULL,

    PRIMARY KEY (`idStore`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `games_platforms` (
    `id_game_platform` INTEGER NOT NULL AUTO_INCREMENT,
    `game_IdGame` INTEGER NULL,
    `platform_IdPlatform` INTEGER NULL,

    PRIMARY KEY (`id_game_platform`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `games_stores` (
    `id_game_store` INTEGER NOT NULL AUTO_INCREMENT,
    `store_IdStore` INTEGER NULL,
    `game_IdGame` INTEGER NULL,

    PRIMARY KEY (`id_game_store`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `games_platforms` ADD CONSTRAINT `games_platforms_game_IdGame_fkey` FOREIGN KEY (`game_IdGame`) REFERENCES `games`(`idGame`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games_platforms` ADD CONSTRAINT `games_platforms_platform_IdPlatform_fkey` FOREIGN KEY (`platform_IdPlatform`) REFERENCES `platforms`(`idPlatform`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games_stores` ADD CONSTRAINT `games_stores_store_IdStore_fkey` FOREIGN KEY (`store_IdStore`) REFERENCES `stores`(`idStore`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games_stores` ADD CONSTRAINT `games_stores_game_IdGame_fkey` FOREIGN KEY (`game_IdGame`) REFERENCES `games`(`idGame`) ON DELETE SET NULL ON UPDATE CASCADE;
