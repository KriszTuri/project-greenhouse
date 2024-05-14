import { Ctx } from "blitz"
import db from "db"

export default async function getCurrentUserSettingsData(_: null, ctx: Ctx) {
  if (!ctx.session.userId) return null
  const user = await db.user.findFirst({
    where: { id: ctx.session.userId },
    select: {
      id: true,
      name: true,
      email: true,
      hashedPassword: true,
    },
  })

  return user
}
