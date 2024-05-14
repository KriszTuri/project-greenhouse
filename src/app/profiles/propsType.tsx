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
    isOnline: boolean | null
    description: string | null
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
    isOnline: boolean | null
  } | null
}

type DescriptionProps = {
  name: string | null
  description: string | null
}

export type { UserData, DescriptionProps }
