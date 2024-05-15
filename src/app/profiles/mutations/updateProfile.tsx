import db from "@/db"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { User, UserData, UserLoginData } from "../../propsType"
import { Ctx } from "blitz"

export default async function editProfile(user: UserLoginData) {
  const hashedPassword = await SecurePassword.hash(user.password as string)
  const updateUser = await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      hashedPassword: hashedPassword,
    },
  })

  return updateUser
}
