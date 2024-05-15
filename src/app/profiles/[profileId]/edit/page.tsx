import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import { EditProfile } from "../../components/EditProfile"
import getCurrentUser from "@/src/app/users/queries/getCurrentUser"
import getUserById from "@/src/app/users/queries/getUserById"
import { useQuery } from "@blitzjs/rpc"
import getCurrentUserSettingsData from "@/src/app/users/queries/getCurrentUserSettingsData"
import Layout from "@/src/app/components/Layout"

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
  const currentUser = await invoke(getCurrentUserSettingsData, null)

  if (currentUser) {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout
            pageType="page"
            currentUser={currentUser}
            pageContent={<EditProfile user={currentUser} listings={undefined} />}
          />
        </Suspense>
      </div>
    )
  }
  return <div>Error</div>
}
