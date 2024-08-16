export interface ICatBreed {
  // id: string;
  // url: string;
  // breeds: [
  //   {
      weight: {
        imperial: string;
        metric: string;
      };
      id: string;
      name: string;
      cfa_url: string;
      vetstreet_url: string;
      vcahospitals_url: string;
      temperament: string;
      origin: string;
      country_codes: string;
      country_code: string;
      description: string;
      life_span: string;
      indoor: number;
      lap: number;
      alt_names: string;
      adaptability: number;
      affection_level: number;
      child_friendly: number;
      dog_friendly: number;
      energy_level: number;
      grooming: number;
      health_issues: number;
      intelligence: number;
      shedding_level: number;
      social_needs: number;
      stranger_friendly: number;
      vocalisation: number;
      experimental: number;
      hairless: number;
      natural: number;
      rare: number;
      rex: number;
      suppressed_tail: number;
      short_legs: number;
      wikipedia_url: string;
      hypoallergenic: number;
      reference_image_id: string;
  //   }
  // ];
  // width: number;
  // height: number;
}

export interface ICatResponse {
  breeds: ICatBreed[],
  id: string,
  url: string,
  height: number,
  width: number,
}

// -------------------------------------------------------
// export interface ICatBreed {
//   id: string;
//   name: string;
//   description: string;
//   temperament: string;
//   origin: string;
//   life_span: string; // e.g., "12 - 15 years"
//   weight: {
//       imperial: string; // e.g., "8 - 15"
//       metric: string; // e.g., "4 - 7"
//   };
//   height: {
//       imperial: string; // e.g., "8 - 10"
//       metric: string; // e.g., "20 - 25"
//   };
//   indoor: number; // 0 or 1
//   lap: number; // 0 or 1
//   alt_names: string;
//   adaptability: number; // 1 to 5 scale
//   affection_level: number; // 1 to 5 scale
//   child_friendly: number; // 0 to 5 scale
//   dog_friendly: number; // 0 to 5 scale
//   energy_level: number; // 1 to 5 scale
//   grooming: number; // 1 to 5 scale
//   health_issues: number; // 0 to 5 scale
//   intelligence: number; // 1 to 5 scale
//   shedding_level: number; // 1 to 5 scale
//   social_needs: number; // 1 to 5 scale
//   stranger_friendly: number; // 0 to 5 scale
//   image: {
//       id: string;
//       width: number;
//       height: number;
//       url: string; // URL to the image of the breed
//   };
// }

// export interface ICatBreedsResponse {
//   breeds: ICatBreed[];
// }

// interface IBreedName {
//   id: string,
//   name: string
// }

// const catBreeds: IBreedName[] = [
//   { id: "abys", name: "Abyssinian" },
//   { id: "aege", name: "Aegean" },
//   { id: "bali", name: "Balinese" },
//   { id: "beng", name: "Bengal" },
//   { id: "birm", name: "Birman" },
//   { id: "bomb", name: "Bombay" },
//   { id: "brit", name: "British Shorthair" },
//   { id: "burm", name: "Burmese" },
//   { id: "burq", name: "Burmilla" },
//   { id: "cha", name: "Chartreux" },
//   { id: "cymr", name: "Cymric" },
//   { id: "devon", name: "Devon Rex" },
//   { id: "dons", name: "Donskoy" },
//   { id: "egy", name: "Egyptian Mau" },
//   { id: "exot", name: "Exotic Shorthair" },
//   { id: "hima", name: "Himalayan" },
//   { id: "japa", name: "Japanese Bobtail" },
//   { id: "korat", name: "Korat" },
//   { id: "maine", name: "Maine Coon" },
//   { id: "manx", name: "Manx" },
//   { id: "munch", name: "Munchkin" },
//   { id: "norw", name: "Norwegian Forest" },
//   { id: "ocic", name: "Ocicat" },
//   { id: "ragd", name: "Ragdoll" },
//   { id: "russ", name: "Russian Blue" },
//   { id: "sav", name: "Savannah" },
//   { id: "sfin", name: "Sphynx" },
//   { id: "tonk", name: "Tonkinese" },
//   { id: "turk", name: "Turkish Angora" },
//   { id: "turf", name: "Turkish Van" }
// ];