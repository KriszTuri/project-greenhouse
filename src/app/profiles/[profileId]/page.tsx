//import { useSearchParams } from "next/navigation"

import { invoke } from "../../blitz-server"
import { Profile } from "../components/Profile"
import getCurrentUserProfileData from "../queries/getCurrentUserProfileData"

/*export const metadata: Metadata = {
  title: "Profile Page",
  description: "Profile Page of User",
}*/
/*export const dynamic = "force-dynamic"*/

/*const ProfilePage: BlitzPage = async () => {
  const currentUser = await useCurrentUser()
  return <>{currentUser?.name}</>
}*/
//ProfilePage.authenticate = true;

export default async function ProfilePage() {
  //const searchParams = useSearchParams()
  //const currentUser = useQuery(getCurrentUser(), null)
  const currentUser = await invoke(getCurrentUserProfileData, null)
  return (
    <>
      <Profile currentUser={currentUser} />
    </>
  )
}
