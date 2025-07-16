/*
  Warnings:

  - You are about to drop the `holiday_event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "holiday_event" DROP CONSTRAINT "holiday_event_user_id_fkey";

-- DropTable
DROP TABLE "holiday_event";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holiday_events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "country_code" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "holiday_events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "holiday_events" ADD CONSTRAINT "holiday_events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
