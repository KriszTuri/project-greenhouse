"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ProfileCard from "./ProfileCard"
import { useParams } from "next/navigation"
import { RequestedUser } from "../../propsType"
//import deleteProfile from "../mutations/deleteProfile";
//import getProfile from "../queries/getProfile";

/// Component for rendering the profile page - if it's the user's page who is currently logged in, it also renders an edit page ///

export const Profile = (props: RequestedUser) => {
  if (!props.data) {
    return <h1>User not found!</h1>
  }

  return (
    <>
      <div>
        <ProfileCard data={props.data} isCurrentUser={props.isCurrentUser} />
      </div>
    </>
  )
}
