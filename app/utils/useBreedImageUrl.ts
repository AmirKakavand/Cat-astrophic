import useSWR from "swr";
import { ICatResponse } from "../types/ICatBreed";

const apiKey: string = process.env.API_KEY as string;
const fetcher = (url: string) => fetch(url, {headers: {"x-api-key": apiKey}}).then((res) => res.json());

export const useBreedImageUrl = (breedId: string) => {
    const {data, isLoading, error} = useSWR<ICatResponse[], Error>(
        `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}`,
        fetcher
    )
    return {
        breedData: data,
        isLoading,
        error
    }
}