"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ProfileCard from "./ProfileCard"
import { useParams } from "next/navigation"
//import deleteProfile from "../mutations/deleteProfile";
//import getProfile from "../queries/getProfile";

type UserData = {
  requestedUser: {
    listings: {
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      listingName: string
      price: number
      description: string
    }[]
    id: number
    email: string
    name: string | null
  } | null

  currentUser: {
    listings: {
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      listingName: string
      price: number
      description: string
    }[]
    id: number
    email: string
    name: string | null
  } | null
}

/// Component for rendering the profile page - if it's the user's page who is currently logged in, it also renders an edit page ///

export const Profile = (props: UserData) => {
  if (props.currentUser?.id == props.requestedUser?.id) {
    return (
      <>
        <div>
          <ProfileCard requestedUser={props.requestedUser} />
          <Link href={`/profiles/${props.requestedUser?.id}/edit`}>Edit</Link>
        </div>
      </>
    )
  }
  return (
    <>
      <div>
        <ProfileCard requestedUser={props.requestedUser} />
      </div>
    </>
  )
}
