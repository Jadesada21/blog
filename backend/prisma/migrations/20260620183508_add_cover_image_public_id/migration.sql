/*
  Warnings:

  - Added the required column `publicId` to the `Blog_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog_images" ADD COLUMN     "publicId" VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE "Blogs" ADD COLUMN     "coverImagePublicId" VARCHAR(200);
