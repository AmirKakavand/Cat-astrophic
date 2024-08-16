export interface Main {
    breeds: Breed[];
    id:     string;
    url:    string;
    width:  number;
    height: number;
}
// We have 67 cat breeds in total
export interface Breed {
    weight:             Weight;
    id:                 ID;
    name:               Name;
    vetstreet_url?:     string;
    temperament:        string;
    origin:             Origin;
    country_codes:      CountryCode;
    country_code:       CountryCode;
    description:        string;
    life_span:          LifeSpan;
    indoor:             number;
    alt_names?:         AltNames;
    adaptability:       number;
    affection_level:    number;
    child_friendly:     number;
    dog_friendly:       number;
    energy_level:       number;
    grooming:           number;
    health_issues:      number;
    intelligence:       number;
    shedding_level:     number;
    social_needs:       number;
    stranger_friendly:  number;
    vocalisation:       number;
    experimental:       number;
    hairless:           number;
    natural:            number;
    rare:               number;
    rex:                number;
    suppressed_tail:    number;
    short_legs:         number;
    wikipedia_url:      string;
    hypoallergenic:     number;
    reference_image_id: ReferenceImageID;
    cfa_url?:           string;
    vcahospitals_url?:  string;
    lap?:               number;
}

export enum AltNames {
    Ankara = "Ankara",
    Empty = "",
    MoscowSemiLonghairHairSiberianForestCat = "Moscow Semi-longhair, HairSiberian Forest Cat",
    Tonk = "Tonk",
    TurkishCatSwimmingCat = "Turkish Cat, Swimming cat",
    York = "York",
}

export enum CountryCode {
    CA = "CA",
    Eg = "EG",
    Gr = "GR",
    Ru = "RU",
    Tr = "TR",
    Us = "US",
}

export enum ID {
    Abys = "abys",
    Aege = "aege",
    Kuri = "kuri",
    Sibe = "sibe",
    Tang = "tang",
    Tonk = "tonk",
    Toyg = "toyg",
    Tvan = "tvan",
    Ycho = "ycho",
}

export enum LifeSpan {
    The1215 = "12 - 15",
    The1217 = "12 - 17",
    The1315 = "13 - 15",
    The1415 = "14 - 15",
    The1416 = "14 - 16",
    The1518 = "15 - 18",
    The1520 = "15 - 20",
    The912 = "9 - 12",
}

export enum Name {
    Abyssinian = "Abyssinian",
    Aegean = "Aegean",
    Kurilian = "Kurilian",
    Siberian = "Siberian",
    Tonkinese = "Tonkinese",
    Toyger = "Toyger",
    TurkishAngora = "Turkish Angora",
    TurkishVan = "Turkish Van",
    YorkChocolate = "York Chocolate",
}

export enum Origin {
    Canada = "Canada",
    Egypt = "Egypt",
    Greece = "Greece",
    Russia = "Russia",
    Turkey = "Turkey",
    UnitedStates = "United States",
}

export enum ReferenceImageID {
    KBroiVNCM = "KBroiVNCM",
    NZpO4PU56M = "NZpO4pU56M",
    O3F3S1Xn = "O3F3_S1XN",
    OzEvzdVM = "ozEvzdVM-",
    SxIXJax6H = "sxIXJax6h",
    The0SxW2SQS = "0SxW2SQ_S",
    The0XYvRd7OD = "0XYvRd7oD",
    The3BkZAjRh1 = "3bkZAjRh1",
    The7CGV6WVXq = "7CGV6WVXq",
}

export interface Weight {
    imperial: Imperial;
    metric:   Metric;
}

export enum Imperial {
    Imperial710 = "7  -  10",
    The1218 = "12 - 18",
    The510 = "5 - 10",
    The612 = "6 - 12",
    The710 = "7 - 10",
    The715 = "7 - 15",
    The720 = "7 - 20",
    The815 = "8 - 15",
    The816 = "8 - 16",
}

export enum Metric {
    The25 = "2 - 5",
    The35 = "3 - 5",
    The37 = "3 - 7",
    The39 = "3 - 9",
    The47 = "4 - 7",
    The58 = "5 - 8",
}