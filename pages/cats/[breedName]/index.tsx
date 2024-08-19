"use client";
import { breedNames } from "@/app/types/breeds";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  id: string;
  description: string;
}

const Page: React.FC<IProps> = (breed) => {
  const router = useRouter();
  // const { breedName } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <div>cat info about: {breed.id}</div>;
};

export async function getStaticPaths() {
  console.log(breedNames)
  const paths = breedNames.map((breedName) => ({ params: { breedName } }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const breed = {
    id: params?.breedName as string,
    description: "Some info about the cat breed",
  };
  return { props: { breed } };
}

export default Page;
