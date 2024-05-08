"use client"
import { Suspense } from "react"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

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

/// Component rendered at /profiles/[id]/edit ///

export const EditProfile = (props: UserData) => {
  return (
    <>
      <div>Editing {props.currentUser?.name}&apos;s profile</div>
    </>
  )

  /* const [profile, { setQueryData }] = useQuery(
    getProfile,
    { id: profileId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updateProfileMutation] = useMutation(updateProfile);
  const router = useRouter();
  return (
    <>
      <div>
        <h1>Edit Profile {profile.id}</h1>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileForm
            submitText="Update Profile"
            schema={UpdateProfileSchema}
            initialValues={profile}
            onSubmit={async (values) => {
              try {
                const updated = await updateProfileMutation({
                  ...values,
                  id: profile.id,
                });
                await setQueryData(updated);
                router.refresh();
              } catch (error: any) {
                console.error(error);
                return {
                  [FORM_ERROR]: error.toString(),
                };
              }
            }}
          />
        </Suspense>
      </div>
    </>
  );*/
}
