import { Ctx } from "blitz"
import db from "db"

export default async function getUserProfileDataById(id: number) {
  const user = await db.user.findFirst({
    where: { id: id },
    select: { id: true, name: true, email: true, listings: true, role: true },
  })

  return user
}
