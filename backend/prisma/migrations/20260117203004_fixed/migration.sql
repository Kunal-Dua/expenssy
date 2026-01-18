/*
  Warnings:

  - You are about to drop the column `expenseId` on the `Expenses` table. All the data in the column will be lost.
  - Added the required column `dateUpdated` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Expenses` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_userId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "dateUpdated" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "expenseId",
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
