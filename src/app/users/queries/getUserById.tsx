import { Ctx } from "blitz"
import db from "db"

export default async function getUserById(id: number) {
  const user = await db.user.findFirst({
    where: { id: id },
    select: {
      id: true,
      name: true,
      email: true,
      listings: true,
      role: true,
      isOnline: true,
      description: true,
    },
  })

  return user
}
