import { Ctx } from "blitz"
import db from "db"

export default async function getUserById(id: number, ctx: Ctx) {
  const isCurrentUser = ctx.session.userId == id
  const data = await db.profile.findFirst({
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

  return { data, isCurrentUser }
}
