import {
  AnyDataSetConfig,
  CapitalInvestmentProperties,
  CityDistrictOffice,
  CulturalInstitutionProperties,
  DataSetConfig,
  ElectricChargingStation,
  ElementarySchoolProperties,
  GasStation,
  HealthCareInstitution,
  HigherEducationInstitutionProperties,
  HighSchoolProperties,
  HzRailwayStop,
  LocalOffice,
  LocalSelfGovernment,
  OdmorkoProperties,
  OtherPublicInstitution,
  PublicBicycleParking,
  PublicBicycleSystem,
  PublicGarage,
  PublicPlaygroundProperties,
  PupilDormProperties,
  ReservedParkingZone,
  RomanCatholicParish,
  SportFacilitiesProperties,
  StateAdministrationBody,
  StudentDormProperties,
  StudentRestaurantProperties,
  SurveillanceCamera,
  TaxiStand,
  ZetBusStop,
  ZetTramStop,
} from "@/types";
import {
  CAPITAL_INVESTMENTS_2023_DATA_SET_ID,
  CAPITAL_INVESTMENTS_2024_DATA_SET_ID,
  CITY_DISTRICT_OFFICES_DATA_SET_ID,
  CULTURAL_INSTITUTION_DATA_SET_ID,
  ELECTRIC_CHARGING_STATIONS_DATA_SET_ID,
  ELEMENTARY_SCHOOL_DATA_SET_ID,
  GAS_STATIONS_DATA_SET_ID,
  HEALTH_CARE_INSTITUTIONS_DATA_SET_ID,
  HIGH_SCHOOL_DATA_SET_ID,
  HIGHER_EDUCATION_INSTITUTION_DATA_SET_ID,
  HZ_RAILWAY_STOPS_DATA_SET_ID,
  LOCAL_OFFICES_DATA_SET_ID,
  LOCAL_SELF_GOVERNMENT_DATA_SET_ID,
  ODMORKO_DATA_SET_ID,
  OTHER_PUBLIC_INSTITUTIONS_DATA_SET_ID,
  PEDESTRIAN_ZONES_DATA_SET_ID,
  PUBLIC_BICYCLE_PARKING_DATA_SET_ID,
  PUBLIC_BICYCLE_SYSTEM_DATA_SET_ID,
  PUBLIC_GARAGES_DATA_SET_ID,
  PUBLIC_PLAYGROUND_DATA_SET_ID,
  PUPIL_DORM_DATA_SET_ID,
  RESERVED_PARKING_ZONES_DATA_SET_ID,
  ROMAN_CATHOLIC_PARISHES_DATA_SET_ID,
  SPORT_FACILITIES_DATA_SET_ID,
  STATE_ADMINISTRATION_BODIES_DATA_SET_ID,
  STUDENT_DORM_DATA_SET_ID,
  STUDENT_RESTAURANT_DATA_SET_ID,
  SURVEILLANCE_CAMERAS_DATA_SET_ID,
  TAXI_STANDS_DATA_SET_ID,
  ZET_BUS_STOPS_DATA_SET_ID,
  ZET_TRAM_STOPS_DATA_SET_ID,
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
  id: STUDENT_DORM_DATA_SET_ID,
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

export const STATE_ADMINISTRATION_BODIES_DATA_SET: DataSetConfig<StateAdministrationBody> =
  {
    id: STATE_ADMINISTRATION_BODIES_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/5c237e0b5c84441e80a4c46ffcb30522_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.tdu,
      details: [{ label: "Adresa", value: feature.properties.adresa }],
    }),
  };

// TRAFFIC
export const ZET_BUS_STOPS_DATA_SET: DataSetConfig<ZetBusStop> = {
  id: ZET_BUS_STOPS_DATA_SET_ID,
  fetchUrl:
    "https://data.zagreb.hr/dataset/cc7e45ae-4bad-4a07-bca2-25e82f1e082c/resource/3b12a182-afa3-4b07-833f-17d8bcf80ea9/download/data.geojson",
  getDisplayData: (feature) => ({
    title: feature.properties.Naziv_stajališta,
    details: [
      { label: "Opis", value: feature.properties.Opis },
      { label: "Linije", value: feature.properties.Linije },
      { label: "Displej", value: feature.properties.Displej },
      { label: "Nadstrešnica", value: feature.properties.Nadstresnica },
    ],
  }),
};

export const HZ_TRAIN_STOPS_DATA_SET: DataSetConfig<HzRailwayStop> = {
  id: HZ_RAILWAY_STOPS_DATA_SET_ID,
  fetchUrl:
    "https://data.zagreb.hr/dataset/d0886c88-cdc8-43fa-ac94-67a8d128d0c2/resource/af3dbe3e-68fd-4862-bb6a-e39790f76dce/download/data.geojson",
  getDisplayData: (feature) => ({
    title: feature.properties.Naziv,
    details: [
      { label: "Opis", value: feature.properties.Opis },
      { label: "Vrsta", value: feature.properties.Vrsta },
      { label: "Peron", value: feature.properties.Peron },
      { label: "Stacionaža", value: feature.properties.Stacionaza },
    ],
  }),
};

export const PEDESTRIAN_ZONES_DATA_SET: DataSetConfig<ReservedParkingZone> = {
  id: PEDESTRIAN_ZONES_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/3aabf37d1d8b497c970dcddc21ed9612_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: () => ({
    title: "Pješačke zone",
    details: [{ label: "", value: null }],
  }),
};

export const RESERVED_PARKING_ZONES_DATA_SET: DataSetConfig<ReservedParkingZone> =
  {
    id: RESERVED_PARKING_ZONES_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/04e3d79e90b04167a6efa8d277e5a482_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.Naziv,
      details: [{ label: "Opis", value: feature.properties.Opis }],
    }),
  };

export const PUBLIC_GARAGES_DATA_SET: DataSetConfig<PublicGarage> = {
  id: PUBLIC_GARAGES_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/3e3484aca5284b16b4a1c41bd6594711_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.naziv,
    details: [
      { label: "Adresa", value: feature.properties.adresa },
      { label: "Telefon", value: feature.properties.telefon },
      { label: "Kapacitet", value: feature.properties.kapacitet },
      { label: "Invalidska mjesta", value: feature.properties.invalidska_mj },
      { label: "Punionica za EV", value: feature.properties.punionica_za_EV },
      {
        label: "Parkirališta za bicikle",
        value: feature.properties.parkiraliste_za_bic,
      },
      { label: "Obiteljska mjesta", value: feature.properties.obiteljska_mj },
      { label: "Broj etaža", value: feature.properties.br_etaza },
    ],
  }),
};

export const PUBLIC_BICYCLE_PARKING: DataSetConfig<PublicBicycleParking> = {
  id: PUBLIC_BICYCLE_PARKING_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/04012b0e4968447c978a6ee494d76495_2/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.naziv,
    details: [
      { label: "Lokacija", value: feature.properties.lokacija },
      { label: "Vrsta", value: feature.properties.vrsta },
      { label: "Broj stalaka", value: feature.properties.broj_stalaka },
      { label: "Broj bicikala", value: feature.properties.broj_bicikala },
    ],
  }),
};

export const PUBLIC_BICYCLE_SYSTEM_DATA_SET: DataSetConfig<PublicBicycleSystem> =
  {
    id: PUBLIC_BICYCLE_SYSTEM_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/95f8892f77eb45968b65469b9063f8b9_3/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [
        { label: "Lokacija", value: feature.properties.lokacija },
        { label: "Broj stalaka", value: feature.properties.broj_stalaka },
      ],
    }),
  };

export const SURVEILLANCE_CAMERAS_DATA_SET: DataSetConfig<SurveillanceCamera> =
  {
    id: SURVEILLANCE_CAMERAS_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.naziv,
      details: [{ label: "Adresa", value: feature.properties.adresa }],
    }),
  };

export const TAXI_STANDS_DATA_SET: DataSetConfig<TaxiStand> = {
  id: TAXI_STANDS_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/c2a3ae87380b472d9b7e72f31cd296da_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.lokacija,
    details: [{ label: "Nadležan", value: feature.properties.nadlezan }],
  }),
};

export const ELECTRIC_CHARGING_STATIONS_DATA_SET: DataSetConfig<ElectricChargingStation> =
  {
    id: ELECTRIC_CHARGING_STATIONS_DATA_SET_ID,
    fetchUrl:
      "https://opendata.arcgis.com/api/v3/datasets/4a4fc728724b4d319c27a9f647a0bb62_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
    getDisplayData: (feature) => ({
      title: feature.properties.NAZIV,
      details: [
        { label: "Adresa", value: feature.properties.adresa },
        { label: "Broj utičnica", value: feature.properties.BROJ_UTICNICA },
        { label: "Tip utičnice", value: feature.properties.TIP_UTICNICE },
      ],
    }),
  };
export const ZET_TRAM_STOPS_DATA_SET: DataSetConfig<ZetTramStop> = {
  id: ZET_TRAM_STOPS_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/8f84d42e684141eaa7ceb26d9c9b8f5a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.Naziv_stajališta,
    details: [
      { label: "Linije", value: feature.properties.Linije },
      { label: "Opis", value: feature.properties.Opis },
      { label: "Napomena", value: feature.properties.Napomena },
    ],
  }),
};

export const GAS_STATIONS_DATA_SET: DataSetConfig<GasStation> = {
  id: GAS_STATIONS_DATA_SET_ID,
  fetchUrl:
    "https://opendata.arcgis.com/api/v3/datasets/05fa1c92366e415c8ce813b9e28da8c5_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
  getDisplayData: (feature) => ({
    title: feature.properties.NAZIV,
    details: [{ label: "Adresa", value: feature.properties.ADRESA }],
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
  [STATE_ADMINISTRATION_BODIES_DATA_SET_ID]: defineDataSetConfig(
    STATE_ADMINISTRATION_BODIES_DATA_SET,
  ),
  [ZET_BUS_STOPS_DATA_SET_ID]: defineDataSetConfig(ZET_BUS_STOPS_DATA_SET),
  [HZ_RAILWAY_STOPS_DATA_SET_ID]: defineDataSetConfig(HZ_TRAIN_STOPS_DATA_SET),
  [PEDESTRIAN_ZONES_DATA_SET_ID]: defineDataSetConfig(
    PEDESTRIAN_ZONES_DATA_SET,
  ),
  [RESERVED_PARKING_ZONES_DATA_SET_ID]: defineDataSetConfig(
    RESERVED_PARKING_ZONES_DATA_SET,
  ),
  [PUBLIC_GARAGES_DATA_SET_ID]: defineDataSetConfig(PUBLIC_GARAGES_DATA_SET),
  [PUBLIC_BICYCLE_PARKING_DATA_SET_ID]: defineDataSetConfig(
    PUBLIC_BICYCLE_PARKING,
  ),
  [PUBLIC_BICYCLE_SYSTEM_DATA_SET_ID]: defineDataSetConfig(
    PUBLIC_BICYCLE_SYSTEM_DATA_SET,
  ),
  [SURVEILLANCE_CAMERAS_DATA_SET_ID]: defineDataSetConfig(
    SURVEILLANCE_CAMERAS_DATA_SET,
  ),
  [TAXI_STANDS_DATA_SET_ID]: defineDataSetConfig(TAXI_STANDS_DATA_SET),
  [ELECTRIC_CHARGING_STATIONS_DATA_SET_ID]: defineDataSetConfig(
    ELECTRIC_CHARGING_STATIONS_DATA_SET,
  ),
  [ZET_TRAM_STOPS_DATA_SET_ID]: defineDataSetConfig(ZET_TRAM_STOPS_DATA_SET),
  [GAS_STATIONS_DATA_SET_ID]: defineDataSetConfig(GAS_STATIONS_DATA_SET),
} as const;

export type DataSetId = keyof typeof DATA_SET_CONFIGS;

export const getDataSetConfig = (id?: string) => {
  if (!id) return undefined;

  return id in DATA_SET_CONFIGS ? DATA_SET_CONFIGS[id as DataSetId] : undefined;
};
