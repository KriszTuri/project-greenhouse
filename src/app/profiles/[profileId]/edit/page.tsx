import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import { EditProfile } from "../../components/EditProfile"
import getCurrentUserProfileData from "../../queries/getCurrentUserProfileData"

/*export async function generateMetadata({
  currentUser,
}: UserData): Promise<Metadata> {
  //const Profile = await invoke(getProfile, { id: Number(currentUser?.id) });
  return {
    title: `Edit Profile ${Profile.id} - ${Profile.name}`,
  };
}*/

/// Page for /profiles/[id]/edit ///

export default async function Page() {
  const currentUser = await invoke(getCurrentUserProfileData, null)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditProfile currentUser={currentUser} />
      </Suspense>
    </div>
  )
}
