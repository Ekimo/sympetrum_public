-- AlterTable
ALTER TABLE `article` MODIFY `image_url` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `media` MODIFY `url` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `odonate` MODIFY `link` VARCHAR(2000) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `publication` MODIFY `link` VARCHAR(2000) NOT NULL DEFAULT '';
