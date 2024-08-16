"use client"
import { useRouter } from 'next/router'
import React from 'react'

const Page = () => {
  const router = useRouter();
  const { breedName } = router.query;
  // console.log(breedName)
  return (
    <div>cat info about: {breedName}</div>
  )
}

export default Page;