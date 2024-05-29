import { Ctx } from "blitz"
import db from "db"

export default async function getUserById(id: number | undefined) {
  const user = await db.profile.findFirst({
    where: { id: id },
    select: {
      id: true,
      name: true,
      isOnline: true,
      description: true,
      user: {
        select: {
          email: true,
          hashedPassword: true,
          listings: true,
          role: true,
        },
      },
    },
  })

  return user
}
