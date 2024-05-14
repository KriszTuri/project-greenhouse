type UserData = {
  requestedUser?: {
    /*listings: {
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      listingName: string
      price: number
      description: string
    }[]*/
    id: number
    email: string
    name: string | null
    isOnline: boolean | null
    description: string | null
  } | null

  currentUser: {
    /*listings: {
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      listingName: string
      price: number
      description: string
    }[]*/
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

type User = {
  user: {
    id: number | undefined
    email: string
    name: string | null
    hashedPassword: string | null
  } | null
  /*listings: {
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      listingName: string
      price: number
      description: string
    }[]*/
}

type UserLoginData = {
  email: string
  name: string | null
  password: string | null
}

export type { UserData, DescriptionProps, User, UserLoginData }
