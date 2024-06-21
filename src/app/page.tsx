import { invoke } from "./blitz-server"
import getCurrentUser from "./users/queries/getCurrentUser"
import LandingPageTextField from "./components/LandingPageTextField"
import { HomepageLayout } from "./layout"

export default async function Home() {
  //const currentUser = await invoke(getCurrentUser, null)

  return (
    <>
      <HomepageLayout body={<LandingPageTextField />} />
    </>
  )
}
