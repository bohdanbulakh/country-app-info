/*
  Warnings:

  - A unique constraint covering the columns `[country_code,name,user_id]` on the table `holiday_events` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "holiday_events_country_code_name_user_id_key" ON "holiday_events"("country_code", "name", "user_id");
