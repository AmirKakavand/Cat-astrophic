"use client";
import React from "react";
import { ICatBreed, ICatResponse } from "../types/ICatBreed";
import { useBreedImageUrl } from "../utils/useBreedImageUrl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getBaseUrl } from "../utils/getBaseUrl";

interface IProps {
  breed: ICatBreed;
}

const CatCard = ({ breed }: IProps) => {
  const { breedData, isLoading, error } = useBreedImageUrl(breed.id);
  const imageUrl = breedData !== undefined ? breedData[0].url : "";
  
  // const router = useRouter();
  // const handleRouting = (breedName: string) => {
  //   router.push(`/cats/${breedName}`);
  // };

  if (breedData && breedData.length > 0 && breedData[0].url) {
    return (
      <Link href={getBaseUrl() + "/cats/" + encodeURIComponent(breed.name)}>
      <section
        className="w-4/5 border-[#F6C448] sm:w-1/5 p-2"
        // onClick={() => handleRouting(breed.name)}
      >
        <Image
          src={imageUrl}
          alt={`Image of ${breed.name} breed`}
          width={100}
          height={100}
          className="w-11/12 my-2 mx-auto rounded"
        />
        <h2 className="text-4xl text-[#F07070] text-center">{breed.name}</h2>
        {/* <p>{breed.description}</p> */}
      </section>
      </Link>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default CatCard;
