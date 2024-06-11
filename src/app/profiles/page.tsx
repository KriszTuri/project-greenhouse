import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import getCurrentUser from "../users/queries/getCurrentUser"
import { invoke } from "../blitz-server"
import { useCurrentUser } from "../users/hooks/useCurrentUser"
import { BlitzPage } from "@blitzjs/auth"
import { Profile } from "./components/Profile"
import getCurrentUserSettingsData from "../users/queries/getCurrentUserSettingsData"
import getAllProfiles from "./queries/getAllProfiles"
import ProfilesPage from "./components/ProfilesPage"
//import { useSearchParams } from "next/navigation"

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

/// Page for /profiles ///

export default async function ProfilePage() {
  //const searchParams = useSearchParams()
  const currentUser = await invoke(getCurrentUser, null)
  const profiles = await invoke(getAllProfiles, null)
  return (
    <>
      <ProfilesPage profiles={profiles} currentUser={currentUser} />
    </>
  )
}
