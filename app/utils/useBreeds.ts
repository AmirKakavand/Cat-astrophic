"use client"
import useSWR from "swr";
import { ICatBreed } from "../types/ICatBreed";

const apiKey: string = process.env.API_KEY as string;
const fetcher = (url: string) => fetch(url, {headers: {"x-api-key": apiKey}}).then((res) => res.json());

export const useBreeds = () => {
  const { data, error, isLoading } = useSWR<ICatBreed[], Error>(
    // `https://api.thecatapi.com/v1/images/${catId}`,
    `https://api.thecatapi.com/v1/breeds?limit=10`,
    fetcher
  );

  return {
    cats: data,
    isLoading,
    error
  }
};
