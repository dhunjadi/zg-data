import {
  AnyDataSetConfig,
  CapitalInvestmentProperties,
  CityDistrictOffice,
  CulturalInstitutionProperties,
  DataSetConfig,
  ElementarySchoolProperties,
  HealthCareInstitution,
  HigherEducationInstitutionProperties,
  HighSchoolProperties,
  LocalOffice,
  LocalSelfGovernment,
  OdmorkoProperties,
  OtherPublicInstitution,
  PublicPlaygroundProperties,
  PupilDormProperties,
  RomanCatholicParish,
  SportFacilitiesProperties,
  StudentDormProperties,
  StudentRestaurantProperties,
} from "@/types";
import {
  CAPITAL_INVESTMENTS_2023_DATA_SET_ID,
  CAPITAL_INVESTMENTS_2024_DATA_SET_ID,
  CITY_DISTRICT_OFFICES_DATA_SET_ID,
  CULTURAL_INSTITUTION_DATA_SET_ID,
  ELEMENTARY_SCHOOL_DATA_SET_ID,
  HEALTH_CARE_INSTITUTIONS_DATA_SET_ID,
  HIGH_SCHOOL_DATA_SET_ID,
  HIGHER_EDUCATION_INSTITUTION_DATA_SET_ID,
  LOCAL_OFFICES_DATA_SET_ID,
  LOCAL_SELF_GOVERNMENT_DATA_SET_ID,
  ODMORKO_DATA_SET_ID,
  OTHER_PUBLIC_INSTITUTIONS_DATA_SET_ID,
  PUBLIC_PLAYGROUND_DATA_SET_ID,
  PUPIL_DORM_DATA_SET_ID,
  ROMAN_CATHOLIC_PARISHES_DATA_SET_ID,
  SPORT_FACILITIES_DATA_SET_ID,
  STUDENT_DORM_DATA_SET_ID,
  STUDENT_RESTAURANT_DATA_SET_ID,
} from "./dataSetIds";

export const STUDENT_RESTAURANT_DATA_SET: DataSetConfig<StudentRestaurantProperties> =
  {
    id: STUDENT_RESTAURANT_DATA_SET_ID,
    fetchUrl:
      "https://data.zagreb.hr/dataset/8b4ab584-5b5a-4d70-9cf3-24897645ad6b/resource/e1caf1d1-ecdf-4d5c-8020-6798c45a188d/download/data.geojson",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const STUDENT_DORM_DATA_SET: DataSetConfig<StudentDormProperties> = {
  id: STUDENT_RESTAURANT_DATA_SET_ID,
  fetchUrl:
    "https://data.zagreb.hr/dataset/cd0afdae-2ef7-44f8-96bb-b96f119aa59b/resource/306ebc37-e4ee-4715-b9e1-8f67418e36e7/download/data.geojson",
  getDisplayData: (feature) => ({
    title: feature.properties.naziv,
    details: [
      { label: "Adresa", value: feature.properties.adresa },
      { label: "Email", value: feature.properties.email },
      { label: "Web", value: feature.properties.web },
    ],
  }),
};

export const CULTURAL_INSTITUTION_DATA_SET: DataSetConfig<CulturalInstitutionProperties> =
  {
    id: CULTURAL_INSTITUTION_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/83db22aeb39441ec84911ee94f26e746_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Radno vrijeme", value: feature.properties.radno_vrijeme },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const ELEMENTARY_SCHOOL_DATA_SET: DataSetConfig<ElementarySchoolProperties> =
  {
    id: ELEMENTARY_SCHOOL_DATA_SET_ID,

    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/08ff18612cea48a1b1bdb921a83974bc_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const ODMORKO_DATA_SET: DataSetConfig<OdmorkoProperties> = {
  id: ODMORKO_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/0a671e4943634d42930ba9c0648a9ddb_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.lokacija,
    details: [
      { label: "Adresa", value: feature.properties.adresa },
      { label: "Telefon", value: feature.properties.tel },
      { label: "Web", value: feature.properties.web },
    ],
  }),
};

export const PUBLIC_PLAYGROUND_DATA_SET: DataSetConfig<PublicPlaygroundProperties> =
  {
    id: PUBLIC_PLAYGROUND_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/8e2abb22194b4595965d2056f31ff66e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.lokacija,
      details: [{ label: "Vrsta", value: feature.properties.Vrsta_objekta }],
    }),
  };

export const HIGHER_EDUCATION_INSTITUTION_DATA_SET: DataSetConfig<HigherEducationInstitutionProperties> =
  {
    id: HIGHER_EDUCATION_INSTITUTION_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/3f6954c6679f4b299f738304542a4837_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Vrsta", value: feature.properties.vrsta },
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const SPORT_FACILITIES_DATA_SET: DataSetConfig<SportFacilitiesProperties> =
  {
    id: SPORT_FACILITIES_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/c2dd015f24f84bdb9e367b7eafce6762_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Objekt", value: feature.properties.objekt },
        { label: "Sportovi", value: feature.properties.sportovi },
        { label: "Opremljenost", value: feature.properties.opremljenost },
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const PUPIL_DORM_DATA_SET: DataSetConfig<PupilDormProperties> = {
  id: PUPIL_DORM_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/25bdb57e84e443b38ecf47a912b5c2d1_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.naziv,
    details: [
      { label: "Struktura", value: feature.properties.poSTRUKTURI },
      { label: "Adresa", value: feature.properties.adresa },
      { label: "Telefon", value: feature.properties.telefon },
      { label: "Email", value: feature.properties.email },
      { label: "Web", value: feature.properties.web },
      { label: "Broj korisnika", value: feature.properties.Broj_koris },
      { label: "Sportski tereni", value: feature.properties.sport_tere },
      { label: "Sportska dvorana", value: feature.properties.sport_dvor },
    ],
  }),
};

export const HIGH_SCHOOL_DATA_SET: DataSetConfig<HighSchoolProperties> = {
  id: HIGH_SCHOOL_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/1095aeca947440bda0317834daa48c6a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.naziv,
    details: [
      { label: "Vrsta odgojne ustanove", value: feature.properties.vr_odg_us },
      { label: "Smjesnki rad", value: feature.properties.smjenski_r },
      { label: "Adresa", value: feature.properties.adresa },
      { label: "Telefon", value: feature.properties.telefon },
      { label: "Email", value: feature.properties.email },
      { label: "Web", value: feature.properties.web },
      { label: "Broj Učenika", value: feature.properties.Broj_uceni },
      { label: "Sportski tereni", value: feature.properties.Sport_tere },
      { label: "Sportska dvorana", value: feature.properties.sport_dvor },
    ],
  }),
};

export const CAPITAL_INVESTMENTS_2024_DATA_SET: DataSetConfig<CapitalInvestmentProperties> =
  {
    id: CAPITAL_INVESTMENTS_2024_DATA_SET_ID,
    fetchUrl:
      "https://hub.arcgis.com/api/v3/datasets/f1871e3fd952438e99dcccd63d37e81b_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Vrsta objekta", value: feature.properties.Vrsta_objekta },
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Opis radova", value: feature.properties.Opis_radova },
      ],
    }),
  };

export const CAPITAL_INVESTMENTS_2023_DATA_SET: DataSetConfig<CapitalInvestmentProperties> =
  {
    id: CAPITAL_INVESTMENTS_2023_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/e898521c36224b05b7bc0778632cd91d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Vrsta objekta", value: feature.properties.Vrsta_objekta },
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Opis radova", value: feature.properties.Opis_radova },
      ],
    }),
  };

export const OTHER_PUBLIC_INSTITUTIONS_DATA_SET: DataSetConfig<OtherPublicInstitution> =
  {
    id: OTHER_PUBLIC_INSTITUTIONS_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/29edc0bf8d604e759bc641fcfd9fec3a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const HEALTH_CARE_INSTITUTIONS_DATA_SET: DataSetConfig<HealthCareInstitution> =
  {
    id: HEALTH_CARE_INSTITUTIONS_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/fcadb80196684cc09f8c8a76852a4aa9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const CITY_DISTRICT_OFFICES_DATA_SET: DataSetConfig<CityDistrictOffice> =
  {
    id: CITY_DISTRICT_OFFICES_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/3cabb747881e44b39b561626dcd8b89a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Sjedište", value: feature.properties.sjediste },
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
        {
          label: "Primanje stranaka",
          value: feature.properties.primanje_stranaka,
        },
      ],
    }),
  };

export const LOCAL_SELF_GOVERNMENT_DATA_SET: DataSetConfig<LocalSelfGovernment> =
  {
    id: LOCAL_SELF_GOVERNMENT_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/f8f6eaeae11b408eaadf20474809a1b3_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.MO,
      details: [
        { label: "Adresa", value: feature.properties.adresa_sjedista_MO },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
        {
          label: "Primanje stranaka",
          value: feature.properties.primanje_stranaka,
        },
      ],
    }),
  };

export const ROMAN_CATHOLIC_PARISHES_DATA_SET: DataSetConfig<RomanCatholicParish> =
  {
    id: ROMAN_CATHOLIC_PARISHES_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/97dd39a14cdf4ce38bc3cb8ef484728a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Telefon", value: feature.properties.telefon },
        { label: "Email", value: feature.properties.email },
        { label: "Web", value: feature.properties.web },
      ],
    }),
  };

export const LOCAL_OFFICES_DATA_SET: DataSetConfig<LocalOffice> = {
  id: LOCAL_OFFICES_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/ab488f0b14b54acaaa0b29d35c9af626_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.naziv,
    details: [
      { label: "Adresa", value: feature.properties.adresa },
      { label: "Telefon", value: feature.properties.telefon },
      { label: "Email", value: feature.properties.email },
      { label: "Web", value: feature.properties.web },
      { label: "Radno vrijeme", value: feature.properties.radno_vrijeme },
    ],
  }),
};

const defineDataSetConfig = <TProperties>(
  config: DataSetConfig<TProperties>,
): AnyDataSetConfig => config as unknown as AnyDataSetConfig;

export const DATA_SET_CONFIGS = {
  [STUDENT_RESTAURANT_DATA_SET_ID]: defineDataSetConfig(
    STUDENT_RESTAURANT_DATA_SET,
  ),
  [CULTURAL_INSTITUTION_DATA_SET_ID]: defineDataSetConfig(
    CULTURAL_INSTITUTION_DATA_SET,
  ),
  [STUDENT_DORM_DATA_SET_ID]: defineDataSetConfig(STUDENT_DORM_DATA_SET),
  [ELEMENTARY_SCHOOL_DATA_SET_ID]: defineDataSetConfig(
    ELEMENTARY_SCHOOL_DATA_SET,
  ),
  [ODMORKO_DATA_SET_ID]: defineDataSetConfig(ODMORKO_DATA_SET),
  [PUBLIC_PLAYGROUND_DATA_SET_ID]: defineDataSetConfig(
    PUBLIC_PLAYGROUND_DATA_SET,
  ),
  [HIGHER_EDUCATION_INSTITUTION_DATA_SET_ID]: defineDataSetConfig(
    HIGHER_EDUCATION_INSTITUTION_DATA_SET,
  ),
  [SPORT_FACILITIES_DATA_SET_ID]: defineDataSetConfig(
    SPORT_FACILITIES_DATA_SET,
  ),
  [PUPIL_DORM_DATA_SET_ID]: defineDataSetConfig(PUPIL_DORM_DATA_SET),
  [HIGH_SCHOOL_DATA_SET_ID]: defineDataSetConfig(HIGH_SCHOOL_DATA_SET),
  [CAPITAL_INVESTMENTS_2024_DATA_SET_ID]: defineDataSetConfig(
    CAPITAL_INVESTMENTS_2024_DATA_SET,
  ),
  [CAPITAL_INVESTMENTS_2023_DATA_SET_ID]: defineDataSetConfig(
    CAPITAL_INVESTMENTS_2023_DATA_SET,
  ),
  [OTHER_PUBLIC_INSTITUTIONS_DATA_SET_ID]: defineDataSetConfig(
    OTHER_PUBLIC_INSTITUTIONS_DATA_SET,
  ),
  [HEALTH_CARE_INSTITUTIONS_DATA_SET_ID]: defineDataSetConfig(
    HEALTH_CARE_INSTITUTIONS_DATA_SET,
  ),
  [CITY_DISTRICT_OFFICES_DATA_SET_ID]: defineDataSetConfig(
    CITY_DISTRICT_OFFICES_DATA_SET,
  ),
  [LOCAL_SELF_GOVERNMENT_DATA_SET_ID]: defineDataSetConfig(
    LOCAL_SELF_GOVERNMENT_DATA_SET,
  ),
  [ROMAN_CATHOLIC_PARISHES_DATA_SET_ID]: defineDataSetConfig(
    ROMAN_CATHOLIC_PARISHES_DATA_SET,
  ),
  [LOCAL_OFFICES_DATA_SET_ID]: defineDataSetConfig(LOCAL_OFFICES_DATA_SET),
} as const;

export type DataSetId = keyof typeof DATA_SET_CONFIGS;

export const getDataSetConfig = (id?: string) => {
  if (!id) return undefined;

  return id in DATA_SET_CONFIGS ? DATA_SET_CONFIGS[id as DataSetId] : undefined;
};
