-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER,
    "name" TEXT,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "isEditing" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("createdAt", "description", "id", "isEditing", "isOnline", "name", "updatedAt", "userId") SELECT "createdAt", "description", "id", "isEditing", "isOnline", "name", "updatedAt", "userId" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
