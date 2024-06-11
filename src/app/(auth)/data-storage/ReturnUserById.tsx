import { invoke } from "@blitzjs/rpc"
import getUserById from "../../users/queries/getUserById"
import { useLocalStorage } from "usehooks-ts"
import { RequestedUser } from "../../propsType"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function ReturnUserById(userId: number | null | undefined) {
  const user = await invoke(getUserById, userId)
  /*const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(user)
      console.log(jsonValue)
      await AsyncStorage.setItem("user-data", jsonValue)
    } catch (e) {
      // saving error
    }
  }*/
  return user
}
