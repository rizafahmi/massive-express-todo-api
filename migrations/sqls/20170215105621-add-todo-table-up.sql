CREATE TABLE "todo" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "text" TEXT,
  "createdAt" TIMESTAMPTZ,
  "deletedAt" TIMESTAMPTZ
);
