/*
  Warnings:

  - You are about to drop the column `Name` on the `user` table. All the data in the column will be lost.
  - Added the required column `NameOne` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NameTwo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Passaword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ROL` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `Name`,
    ADD COLUMN `NameOne` VARCHAR(255) NOT NULL,
    ADD COLUMN `NameTwo` VARCHAR(255) NOT NULL,
    ADD COLUMN `Passaword` VARCHAR(255) NOT NULL,
    ADD COLUMN `ROL` VARCHAR(255) NOT NULL;
