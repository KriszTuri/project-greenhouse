"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
//import deleteProfile from "../mutations/deleteProfile";
//import getProfile from "../queries/getProfile";

type UserData = {
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

export const Profile = (props: UserData) => {
  const router = useRouter()
  //const [deleteProfileMutation] = useMutation(deleteProfile);
  //const [profile] = useQuery(getProfile, { id: profileId });
  console.log(props.currentUser)

  return (
    <>
      <div>
        <h1>{props.currentUser?.name}&apos;s profile</h1>
        <Link href={`/profiles/${props.currentUser?.id}/edit`}>Edit</Link>
      </div>
    </>
  )
}
