-- AlterTable
ALTER TABLE `article` MODIFY `image_url` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `media` MODIFY `url` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `odonate` MODIFY `link` TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `publication` MODIFY `link` TEXT NOT NULL DEFAULT '';
