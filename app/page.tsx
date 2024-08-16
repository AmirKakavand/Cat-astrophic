"use client"
import CatCard from "./components/CatCard";
import { useBreeds } from "./utils/useBreeds";

export default function Home() {
  const {cats, isLoading, error} = useBreeds()
  cats && console.log("cats: ")
  cats && console.log(cats)
  return (
    <main className="dots-bg h-fit py-6 flex flex-col items-center sm:flex-row justify-around flex-wrap gap-2">
      {cats?.map((catElement) => {
        // console.log(catElement)
        return (cats !== undefined && <CatCard key={catElement.id} breed={catElement} />)
        // return <p key={catElement.id}>{catElement.id}</p>
      })}
    </main>
  );
}
