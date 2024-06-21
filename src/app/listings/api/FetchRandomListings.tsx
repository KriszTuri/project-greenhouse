"use client"
import { useMutation } from "@blitzjs/rpc"
import { Image } from "@chakra-ui/react"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import createListing from "../mutations/createListing"

export const API_KEY = "sk-kmyO6670754d304435957"

export const ID = Math.floor(Math.random() * 1000)

export type testListing = {
  listingName: string
  price: string
  description: string
  imageUrl: string
}

export function titleCaseWord(word: string) {
  if (!word) return word
  return word[0].toUpperCase() + word.substr(1).toLowerCase()
}

export default function FetchListings() {
  const [testListing, setTestListing] = useState<testListing>()
  const [currentUser, setCurrentUser] = useState()
  const createNewTestListing = useMutation(createListing)

  useEffect(() => {
    const currentUser = JSON.parse(window.localStorage.getItem("user-data") || "{}")
    console.log(currentUser)
    //setCurrentUser(currentUser)
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://perenual.com/api/species/details/${ID}?key=${API_KEY}`
        )
        const fetchedTestListing = {
          listingName: titleCaseWord(response.data.common_name),
          price: JSON.stringify(Number(response.data.id) / 10) + "0€",
          description: response.data.description,
          imageUrl: response.data.original_url,
        }
        setTestListing(fetchedTestListing)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div>Name: {testListing?.listingName}</div>
      <div>Price: {testListing?.price}</div>
      <div>Description: {testListing?.description}</div>
      <img src={testListing?.imageUrl} />
    </>
  )
}
