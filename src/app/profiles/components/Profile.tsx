"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ProfileCard from "./ProfileCard"
import { useParams } from "next/navigation"
import { UserData } from "../propsType"
//import deleteProfile from "../mutations/deleteProfile";
//import getProfile from "../queries/getProfile";

/// Component for rendering the profile page - if it's the user's page who is currently logged in, it also renders an edit page ///

export const Profile = (props: UserData) => {
  if (!props.requestedUser) {
    return <h1>User not found!</h1>
  }

  /*if (props.currentUser?.id == props.requestedUser?.id) {
    return (
      <>
        <div>
          <ProfileCard requestedUser={props.requestedUser} currentUser={props.currentUser} />
          <Link href={`/profiles/${props.requestedUser?.id}/edit`}>Edit</Link>
        </div>
      </>
    )
  }*/

  return (
    <>
      <div>
        <ProfileCard requestedUser={props.requestedUser} currentUser={props.currentUser} />
      </div>
    </>
  )
}
