import db from "@/db"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { User, UserData } from "../propsType"

export default async function editProfile(user: User) {
  //const hashedPassword = await SecurePassword.hash(user.currentUser?.password as string)
  const updateUser = await db.user.update({
    where: {
      id: user.user?.id,
    },
    data: {
      name: user.user?.name,
      email: user.user?.email,
      hashedPassword: user.user?.hashedPassword,
    },
  })

  return updateUser
}
