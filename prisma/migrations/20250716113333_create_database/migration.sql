-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holiday_event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "country_code" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "holiday_event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "holiday_event" ADD CONSTRAINT "holiday_event_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
