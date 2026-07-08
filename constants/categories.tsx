import {
  Banknote,
  Bike,
  Blocks,
  BookMarked,
  Building,
  Bus,
  Cable,
  CarTaxiFront,
  Cctv,
  Church,
  CookingPot,
  Drama,
  Droplet,
  Footprints,
  Fuel,
  Gavel,
  GraduationCap,
  HeartPulse,
  Hospital,
  Hotel,
  Landmark,
  LucideIcon,
  Microscope,
  PersonStanding,
  Recycle,
  Road,
  Rose,
  Rows4,
  School,
  Sprout,
  SquareParking,
  TrainFront,
  TramFront,
  Trash2,
  TreePalm,
  TreePine,
  Volleyball,
  Wallet,
  Wind,
} from "lucide-react-native";

import {
  AirQuality,
  BrownFieldArea,
  CapitalInvestment,
  CityDistrictOffice,
  CityGarden,
  CulturalInstitution,
  DataSetDisplay,
  DrinkingWaterFountain,
  ElectricChargingStation,
  Feature,
  GasStation,
  HealthCareInstitution,
  HigherEducationInstitution,
  HighSchool,
  HzRailwayStop,
  LocalSelfGovernment,
  Odmorko,
  OtherPublicInstitution,
  PublicBicycleParking,
  PublicBicycleSystem,
  PublicGarage,
  PublicPlayground,
  PupilDorm,
  RecyclingYard,
  ReservedParkingZone,
  RomanCatholicParish,
  SemiUndergroundContainer,
  SportFacility,
  StateAdministrationBody,
  StudentDorm,
  StudentRestaurant,
  SurveillanceCamera,
  TaxiStand,
  UndergroundContainer,
  ZetBusStop,
  ZetTramStop,
} from "@/types";

type DataSetItem = {
  label: string;
  description: string;
  icon: LucideIcon;
  id: string;
  fetchUrl: string;
  getDisplayData: (feature: Feature<Record<string, unknown>>) => DataSetDisplay;
};

type Category = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  dataSets: DataSetItem[];
};

const dataSet = <T,>(config: {
  label: string;
  description: string;
  icon: LucideIcon;
  id: string;
  fetchUrl: string;
  getDisplayData: (feature: Feature<T>) => DataSetDisplay;
}): DataSetItem => ({
  ...config,
  getDisplayData:
    config.getDisplayData as unknown as DataSetItem["getDisplayData"],
});

export const CATEGORIES: Category[] = [
  {
    id: "education",
    label: "categories.education.label",
    description: "Velit cursus magna fringilla natoque.",
    icon: GraduationCap,
    dataSets: [
      dataSet({
        label: "categories.education.dataSets.studentRestaurant.label",
        description:
          "categories.education.dataSets.studentRestaurant.description",
        icon: CookingPot,
        id: "student-restaurants",
        fetchUrl:
          "https://data.zagreb.hr/dataset/cd0afdae-2ef7-44f8-96bb-b96f119aa59b/resource/306ebc37-e4ee-4715-b9e1-8f67418e36e7/download/data.geojson",
        getDisplayData: (feature: Feature<StudentRestaurant>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.education.dataSets.studentDorms.label",
        description: "categories.education.dataSets.studentDorms.description",
        icon: Hotel,
        id: "student-dorm",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/83db22aeb39441ec84911ee94f26e746_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<StudentDorm>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.education.dataSets.culturalInstitutions.label",
        description:
          "categories.education.dataSets.culturalInstitutions.description",
        icon: Drama,
        id: "cultural-institution",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/83db22aeb39441ec84911ee94f26e746_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CulturalInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Radno vrijeme", value: feature.properties.radno_vrijeme },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),

      dataSet({
        label: "categories.education.dataSets.elementarySchools.label",
        description:
          "categories.education.dataSets.elementarySchools.description",
        icon: School,
        id: "elementary-school",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/08ff18612cea48a1b1bdb921a83974bc_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<HighSchool>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.education.dataSets.odmorko.label",
        description: "categories.education.dataSets.odmorko.description",
        icon: TreePalm,
        id: "odmorko-school",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/0a671e4943634d42930ba9c0648a9ddb_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<Odmorko>) => ({
          title: feature.properties.lokacija,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.tel },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.education.dataSets.publicSportsPlaygrounds.label",
        description:
          "categories.education.dataSets.publicSportsPlaygrounds.description",
        icon: Volleyball,
        id: "public-playground",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/8e2abb22194b4595965d2056f31ff66e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PublicPlayground>) => ({
          title: feature.properties.lokacija,
          details: [
            { label: "Vrsta", value: feature.properties.Vrsta_objekta },
          ],
        }),
      }),
      dataSet({
        label:
          "categories.education.dataSets.higherEducationInstitutions.label",
        description:
          "categories.education.dataSets.higherEducationInstitutions.description",
        icon: GraduationCap,
        id: "higher-education-institutions",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3f6954c6679f4b299f738304542a4837_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<HigherEducationInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta", value: feature.properties.vrsta },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.education.dataSets.sportsFacilities.label",
        description:
          "categories.education.dataSets.sportsFacilities.description",
        icon: Volleyball,
        id: "sport-facilities",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/c2dd015f24f84bdb9e367b7eafce6762_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<SportFacility>) => ({
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
      }),
      dataSet({
        label: "categories.education.dataSets.pupilDorms.label",
        description: "categories.education.dataSets.pupilDorms.description",
        icon: Building,
        id: "pupil-dorm",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/25bdb57e84e443b38ecf47a912b5c2d1_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PupilDorm>) => ({
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
      }),
      dataSet({
        label: "categories.education.dataSets.highSchools.label",
        description: "categories.education.dataSets.highSchools.description",
        icon: School,
        id: "high-schools",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/1095aeca947440bda0317834daa48c6a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<HighSchool>) => ({
          title: feature.properties.naziv,
          details: [
            {
              label: "Vrsta odgojne ustanove",
              value: feature.properties.vr_odg_us,
            },
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
      }),
    ],
  },
  {
    id: "economy",
    label: "categories.economy.label",
    description: "Quisque himenaeos tempor pharetra.",
    icon: Wallet,
    dataSets: [
      dataSet({
        label: "categories.economy.dataSets.capitalInvestments2024.label",
        description:
          "categories.economy.dataSets.capitalInvestments2024.description",
        icon: Banknote,
        id: "capital-investments-2024",
        fetchUrl:
          "https://hub.arcgis.com/api/v3/datasets/f1871e3fd952438e99dcccd63d37e81b_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CapitalInvestment>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta objekta", value: feature.properties.Vrsta_objekta },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Opis radova", value: feature.properties.Opis_radova },
          ],
        }),
      }),
      dataSet({
        label: "categories.economy.dataSets.capitalInvestments2023.label",
        description:
          "categories.economy.dataSets.capitalInvestments2023.description",
        icon: Banknote,
        id: "capital-investments-2023",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/e898521c36224b05b7bc0778632cd91d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CapitalInvestment>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta objekta", value: feature.properties.Vrsta_objekta },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Opis radova", value: feature.properties.Opis_radova },
          ],
        }),
      }),
    ],
  },
  {
    id: "public-sector",
    label: "categories.public-sector.label",
    description: "Aenean lobortis gravida finibus torquent accumsan.",
    icon: Landmark,
    dataSets: [
      /* {
        label: "categories.public-sector.dataSets.localDepartments.label", // imported the fetched geojson to geojson.io and it doesn't work
        description:
          "categories.public-sector.dataSets.localDepartments.description",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/PO/FeatureServer/replicafilescache/PO_-7066151195297644305.geojson",
      }, */
      /* {
        label: "categories.public-sector.dataSets.cityOwnedCompanies.label", // imported the fetched geojson to geojson.io and it doesn't work
        description:
          "categories.public-sector.dataSets.cityOwnedCompanies.description",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_gradska_trgovacka_drustva/FeatureServer/replicafilescache/Geoportal_gradska_trgovacka_drustva_-4659600723509782750.geojson",
      }, */
      dataSet({
        label:
          "categories.public-sector.dataSets.otherPublicInstitutions.label",
        description:
          "categories.public-sector.dataSets.otherPublicInstitutions.description",
        icon: Landmark,
        id: "other-public-institutions",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/29edc0bf8d604e759bc641fcfd9fec3a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<OtherPublicInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.public-sector.dataSets.healthcareInstitutions.label",
        description:
          "categories.public-sector.dataSets.healthcareInstitutions.description",
        icon: Hospital,
        id: "health-care-institutions",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/fcadb80196684cc09f8c8a76852a4aa9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<HealthCareInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.public-sector.dataSets.cityDistrictOffices.label",
        description:
          "categories.public-sector.dataSets.cityDistrictOffices.description",
        icon: Landmark,
        id: "city-district-offices",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3cabb747881e44b39b561626dcd8b89a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CityDistrictOffice>) => ({
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
      }),
      dataSet({
        label: "categories.public-sector.dataSets.localSelfGovernment.label",
        description:
          "categories.public-sector.dataSets.localSelfGovernment.description",
        icon: Landmark,
        id: "local-self-government",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/f8f6eaeae11b408eaadf20474809a1b3_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<LocalSelfGovernment>) => ({
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
      }),
      dataSet({
        label: "categories.public-sector.dataSets.romanCatholicParishes.label",
        description:
          "categories.public-sector.dataSets.romanCatholicParishes.description",
        icon: Church,
        id: "roman-catholic-parishes",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/97dd39a14cdf4ce38bc3cb8ef484728a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<RomanCatholicParish>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label: "categories.public-sector.dataSets.localOffices.label",
        description:
          "categories.public-sector.dataSets.localOffices.description",
        icon: BookMarked,
        id: "local-offices",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ab488f0b14b54acaaa0b29d35c9af626_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<LocalSelfGovernment>) => ({
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
      }),
      dataSet({
        label:
          "categories.public-sector.dataSets.higherEducationInstitutions.label",
        description:
          "categories.public-sector.dataSets.higherEducationInstitutions.description",
        icon: GraduationCap,
        id: "higher-education-institutions",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3f6954c6679f4b299f738304542a4837_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<HigherEducationInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta", value: feature.properties.vrsta },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
          ],
        }),
      }),
      dataSet({
        label:
          "categories.public-sector.dataSets.stateAdministrationBodies.label",
        description:
          "categories.public-sector.dataSets.stateAdministrationBodies.description",
        icon: Landmark,
        id: "state-administartion-bodies",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/5c237e0b5c84441e80a4c46ffcb30522_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<StateAdministrationBody>) => ({
          title: feature.properties.tdu,
          details: [{ label: "Adresa", value: feature.properties.adresa }],
        }),
      }),
    ],
  },
  {
    id: "environment",
    label: "categories.environment.label",
    description:
      "Porttitor eleifend montes curabitur aptent risus ullamcorper.",
    icon: TreePine,
    dataSets: [
      dataSet({
        label:
          "categories.environment.dataSets.semiUndergroundContainers.label",
        description:
          "categories.environment.dataSets.semiUndergroundContainers.description",
        icon: Trash2,
        id: "semi-underground-containers",
        fetchUrl:
          "https://data.zagreb.hr/dataset/a48f972b-9639-4719-9470-9d398049dbf9/resource/c04a1f0c-ac8a-4156-ba1f-707b1564d2f8/download/data.geojson",
        getDisplayData: (feature: Feature<SemiUndergroundContainer>) => ({
          title: "Polupodzemni spremnici",
          details: [
            { label: "Adrese", value: feature.properties.adrese },
            { label: "Gradska četvrt", value: feature.properties.JMS_IME },
            { label: "Mjesni odbor", value: feature.properties.JMS_IME_1 },
          ],
        }),
      }),
      dataSet({
        label: "categories.environment.dataSets.undergroundContainers.label",
        description:
          "categories.environment.dataSets.undergroundContainers.description",
        icon: Trash2,
        id: "underground-containers",
        fetchUrl:
          "https://data.zagreb.hr/dataset/1c02bf11-26a8-40dd-9a7d-0635dc065325/resource/980478d5-97a8-4b7d-8e92-f404bd0d3a24/download/data.geojson",
        getDisplayData: (feature: Feature<UndergroundContainer>) => ({
          title: feature.properties.Spremnik,
          details: [
            { label: "Gradska četvrt", value: feature.properties.JMS_IME_1 },
            { label: "Mjesni odbor", value: feature.properties.JMS_IME },
          ],
        }),
      }),
      dataSet({
        label: "categories.environment.dataSets.drinkingWaterFountains.label",
        description:
          "categories.environment.dataSets.drinkingWaterFountains.description",
        icon: Droplet,
        id: "drinking-water-fountains",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/pitka_voda/FeatureServer/replicafilescache/pitka_voda_-1391343346496493938.geojson",
        getDisplayData: (feature: Feature<DrinkingWaterFountain>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        label: "categories.environment.dataSets.cityGardens.label",
        description: "categories.environment.dataSets.cityGardens.description",
        icon: Rose,
        id: "city-gardens",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/9858b1819a914c6ba0fedd0069f2d861_1/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CityGarden>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Nadležan", value: feature.properties.nadlezan },
            {
              label: "Godina otvaranja",
              value: feature.properties.godina_otvaranja,
            },
            { label: "Gradska četvrt", value: feature.properties.grad_cetvrt },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Kontakt", value: feature.properties.kontakt },
            { label: "Broj korisnika", value: feature.properties.br_korisnika },
          ],
        }),
      }),
      dataSet({
        label: "categories.environment.dataSets.recyclingYards.label",
        description:
          "categories.environment.dataSets.recyclingYards.description",
        icon: Recycle,
        id: "recycling-yards",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/249fa384ccf9481abf4fd2de73a822f5_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<RecyclingYard>) => ({
          title: feature.properties.NAZIV,
          details: [
            { label: "Adresa", value: feature.properties.ADRESA },
            { label: "Radno vrijeme", value: feature.properties.RADNO_VRIJ },
            { label: "Telefon", value: feature.properties.TELEFON },
            {
              label: "Email",
              value: feature.properties.E_MAIL,
            },
            { label: "Web", value: feature.properties.WEB },
            { label: "Papir", value: feature.properties.PAPIR },
            { label: "Plastika", value: feature.properties.PLASTIKA },
            { label: "Staklo", value: feature.properties.STAKLO },
            { label: "Metalna ambalaža", value: feature.properties.METALNA_AM },
            { label: "Stare baterije", value: feature.properties.STARE_BATE },
            { label: "Biootpad", value: feature.properties.BIOOTPAD },
            { label: "Otpadne gume", value: feature.properties.OTPAD_GUME },
            { label: "Otpad_mu", value: feature.properties.OTPAD_MU },
            {
              label: "Građevinski otpad",
              value: feature.properties.GRADJ_OTPA,
            },
            {
              label: "Elektronički otpad",
              value: feature.properties.ELEK_OTPAD,
            },
            { label: "Ostalo", value: feature.properties.OSTALO },
            { label: "Napomena", value: feature.properties.NAPOMENA },
          ],
        }),
      }),

      dataSet({
        label: "categories.environment.dataSets.airQuality.label",
        description: "categories.environment.dataSets.airQuality.description",
        icon: Wind,
        id: "air-quality",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ed9898e63ec94770a8fb37713c36f8ca_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<AirQuality>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Lokacija", value: feature.properties.lokacija },
            { label: "Opis lokacije", value: feature.properties.opis_lokac },
            { label: "Tip područja", value: feature.properties.tip_podrucja },
            { label: "Tip postaje", value: feature.properties.tip_postaje },
            { label: "Visina (m)", value: feature.properties.visina_m },
            { label: "Dimenzije", value: feature.properties.dimenzija },
            { label: "Mjerne tvari", value: feature.properties.mjerne_tvari },
            {
              label: "Odgovorna institucija",
              value: feature.properties.odgovorna_inst,
            },
            { label: "Izvor", value: feature.properties.izvor },
          ],
        }),
      }),

      dataSet({
        label: "categories.environment.dataSets.brownfieldAreas.label",
        description:
          "categories.environment.dataSets.brownfieldAreas.description",
        icon: Blocks,
        id: "brownfield-areas",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/6a86bf7404fe4cbc88a15ac86856da19_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<BrownFieldArea>) => ({
          title: feature.properties.Naziv,
          details: [
            {
              label: "Oznaka planske namjene",
              value: feature.properties.Oznaka_planske_namjene,
            },
            {
              label: "Obveza izrade UPU-a",
              value: feature.properties.Obveza_izrade_UPUa,
            },
            {
              label: "Nepokretna kulturna dobra",
              value: feature.properties.Nepokretna_kulturna_dobra,
            },
            {
              label: "Zaštićeni dijelovi prirode",
              value: feature.properties.Zastićeni_dijelovi_priroda,
            },
            {
              label: "Obveza provedbe ANU-a",
              value: feature.properties.Obveza_provedbe_AUNa,
            },
            {
              label: "Prethodno korištenje",
              value: feature.properties.Prethodno_koristenje,
            },
            {
              label: "Privremeno korištenje",
              value: feature.properties.Privremeno_korištenje,
            },
            {
              label: "Status UPU-a",
              value: feature.properties.Status_UPUa,
            },
            { label: "Vlasništvo", value: feature.properties.Vlasništvo },
          ],
        }),
      }),
      /* {
        label: "categories.environment.dataSets.brownfieldAreas.label",
        description:
          "categories.environment.dataSets.brownfieldAreas.description",
        icon: Blocks,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/6a86bf7404fe4cbc88a15ac86856da19_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
    ],
  },
  {
    id: "agriculture",
    label: "categories.agriculture.label",
    description: "Bibendum tristique congue maximus litora sem vulputate.",
    icon: Sprout,
    dataSets: [
      /* {
        label:
          "categories.agriculture.dataSets.domesticAnimalKeepingBoundaries.label",
        description:
          "categories.agriculture.dataSets.domesticAnimalKeepingBoundaries.description",
        icon: Cat,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/7e93637c72ac4c278c69ad5260611c39_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.agriculture.dataSets.cityMarkets.label",
        description: "categories.agriculture.dataSets.cityMarkets.description",
        icon: Store,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/55461536a14e46a69c81a0a67e56c53f_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.agriculture.dataSets.sharedHuntingGrounds.label",
        description:
          "categories.agriculture.dataSets.sharedHuntingGrounds.description",
        icon: BowArrow,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/d87e492a5c994e04b47b1eaa7a06699d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label:
          "categories.agriculture.dataSets.wildlifeProtectionProgram.label",
        description:
          "categories.agriculture.dataSets.wildlifeProtectionProgram.description",
        icon: Rabbit,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/96a059b8909a4d70b81bbbae9d883a25_5/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
    ],
  },
  {
    id: "judiciary",
    label: "categories.judiciary.label",
    description: "Pulvinar maecenas placerat faucibus per senectus ligula.",
    icon: Gavel,
    dataSets: [
      /* {
        label: "categories.judiciary.dataSets.surveillanceCameras.label",
        description:
          "categories.judiciary.dataSets.surveillanceCameras.description",
        icon: Cctv,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.judiciary.dataSets.police.label",
        description: "categories.judiciary.dataSets.police.description",
        icon: Siren,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/30d4d80d445a46d99f2f802814d70833_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.judiciary.dataSets.firefighters.label",
        description: "categories.judiciary.dataSets.firefighters.description",
        icon: FireExtinguisher,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/11ac9ebf240e4d2382ef7fd0b16ef9ac_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
    ],
  },
  {
    id: "traffic",
    label: "categories.traffic.label",
    description: "Efficitur ridiculus iaculis parturient morbi netus aliquam.",
    icon: Road,
    dataSets: [
      dataSet({
        label: "categories.traffic.dataSets.zetBusStops.label",
        description: "categories.traffic.dataSets.zetBusStops.description",
        icon: Bus,
        id: "zet-bus-stops",
        fetchUrl:
          "https://data.zagreb.hr/dataset/cc7e45ae-4bad-4a07-bca2-25e82f1e082c/resource/3b12a182-afa3-4b07-833f-17d8bcf80ea9/download/data.geojson",
        getDisplayData: (feature: Feature<ZetBusStop>) => ({
          title: feature.properties.Naziv_stajališta,
          details: [
            { label: "Opis", value: feature.properties.Opis },
            { label: "Linije", value: feature.properties.Linije },
            { label: "Displej", value: feature.properties.Displej },
            { label: "Nadstrešnica", value: feature.properties.Nadstresnica },
          ],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.hzRailwayStops.label",
        description: "categories.traffic.dataSets.hzRailwayStops.description",
        icon: TrainFront,
        id: "hz-railway-stops",
        fetchUrl:
          "https://data.zagreb.hr/dataset/d0886c88-cdc8-43fa-ac94-67a8d128d0c2/resource/af3dbe3e-68fd-4862-bb6a-e39790f76dce/download/data.geojson",
        getDisplayData: (feature: Feature<HzRailwayStop>) => ({
          title: feature.properties.Naziv,
          details: [
            { label: "Opis", value: feature.properties.Opis },
            { label: "Vrsta", value: feature.properties.Vrsta },
            { label: "Peron", value: feature.properties.Peron },
            { label: "Stacionaža", value: feature.properties.Stacionaza },
          ],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.pedestrianZone.label",
        description: "categories.traffic.dataSets.pedestrianZone.description",
        icon: Footprints,
        id: "pedestrian-zones",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3aabf37d1d8b497c970dcddc21ed9612_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: () => ({
          title: "Pješačke zone",
          details: [{ label: "", value: null }],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.reservedParkingZones.label",
        description:
          "categories.traffic.dataSets.reservedParkingZones.description",
        icon: SquareParking,
        id: "reserved-parking-zones",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/04e3d79e90b04167a6efa8d277e5a482_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<ReservedParkingZone>) => ({
          title: feature.properties.Naziv,
          details: [{ label: "Opis", value: feature.properties.Opis }],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.publicGarages.label",
        description: "categories.traffic.dataSets.publicGarages.description",
        icon: Rows4,
        id: "public-garages",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3e3484aca5284b16b4a1c41bd6594711_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PublicGarage>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Kapacitet", value: feature.properties.kapacitet },
            {
              label: "Invalidska mjesta",
              value: feature.properties.invalidska_mj,
            },
            {
              label: "Punionica za EV",
              value: feature.properties.punionica_za_EV,
            },
            {
              label: "Parkirališta za bicikle",
              value: feature.properties.parkiraliste_za_bic,
            },
            {
              label: "Obiteljska mjesta",
              value: feature.properties.obiteljska_mj,
            },
            { label: "Broj etaža", value: feature.properties.br_etaza },
          ],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.publicBicycleParking.label",
        description:
          "categories.traffic.dataSets.publicBicycleParking.description",
        icon: SquareParking,
        id: "public-bicycle-parking",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/04012b0e4968447c978a6ee494d76495_2/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PublicBicycleParking>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Lokacija", value: feature.properties.lokacija },
            { label: "Vrsta", value: feature.properties.vrsta },
            { label: "Broj stalaka", value: feature.properties.broj_stalaka },
            { label: "Broj bicikala", value: feature.properties.broj_bicikala },
          ],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.publicBicycleSystem.label",
        description:
          "categories.traffic.dataSets.publicBicycleSystem.description",
        icon: Bike,
        id: "public-bicycle-system",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/95f8892f77eb45968b65469b9063f8b9_3/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PublicBicycleSystem>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Lokacija", value: feature.properties.lokacija },
            { label: "Broj stalaka", value: feature.properties.broj_stalaka },
          ],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.bicycleLanes.label",
        description: "categories.traffic.dataSets.bicycleLanes.description",
        icon: Road,
        id: "bicycle-lanes",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/b10db2ae3a5b4e4b8dbee85a89d4b5b1_4/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: () => ({
          title: "Biciklističke trake",
          details: [],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.surveillanceCameras.label",
        description:
          "categories.traffic.dataSets.surveillanceCameras.description",
        icon: Cctv,
        id: "surveillance-cameras",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<SurveillanceCamera>) => ({
          title: feature.properties.naziv,
          details: [{ label: "Adresa", value: feature.properties.adresa }],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.taxiStands.label",
        description: "categories.traffic.dataSets.taxiStands.description",
        icon: CarTaxiFront,
        id: "taxi-stands",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/c2a3ae87380b472d9b7e72f31cd296da_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<TaxiStand>) => ({
          title: feature.properties.lokacija,
          details: [{ label: "Nadležan", value: feature.properties.nadlezan }],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.electricChargingStations.label",
        description:
          "categories.traffic.dataSets.electricChargingStations.description",
        icon: Cable,
        id: "electric-charging-stations",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/4a4fc728724b4d319c27a9f647a0bb62_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<ElectricChargingStation>) => ({
          title: feature.properties.NAZIV,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Broj utičnica", value: feature.properties.BROJ_UTICNICA },
            { label: "Tip utičnice", value: feature.properties.TIP_UTICNICE },
          ],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.zetTramStops.label",
        description: "categories.traffic.dataSets.zetTramStops.description",
        icon: TramFront,
        id: "zet-tram-stops",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/8f84d42e684141eaa7ceb26d9c9b8f5a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<ZetTramStop>) => ({
          title: feature.properties.Naziv_stajališta,
          details: [
            { label: "Linije", value: feature.properties.Linije },
            { label: "Opis", value: feature.properties.Opis },
            { label: "Napomena", value: feature.properties.Napomena },
          ],
        }),
      }),
      dataSet({
        label: "categories.traffic.dataSets.gasStations.label",
        description: "categories.traffic.dataSets.gasStations.description",
        icon: Fuel,
        id: "gas-stations",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/05fa1c92366e415c8ce813b9e28da8c5_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<GasStation>) => ({
          title: feature.properties.NAZIV,
          details: [{ label: "Adresa", value: feature.properties.ADRESA }],
        }),
      }),
    ],
  },
  {
    id: "society",
    label: "categories.society.label",
    description: "Convallis sapien molestie cubilia pretium orci hendrerit.",
    icon: PersonStanding,
    dataSets: [
      /* {
        label: "categories.society.dataSets.publicWells.label",
        description: "categories.society.dataSets.publicWells.description",
        icon: Droplets,
        fetchUrl:
          "https://data.zagreb.hr/dataset/0d1c65b5-6e8f-4b6a-be90-cc9ecb6fa374/resource/2010797b-3e1e-4a43-9a5a-b1619722d2ac/download/data.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.childrenHomes.label",
        description: "categories.society.dataSets.childrenHomes.description",
        icon: HouseHeart,
        fetchUrl:
          "https://data.zagreb.hr/dataset/65e1cb89-9cc7-43d2-a94d-3305e2917224/resource/e0f7e07d-73e1-4c9e-a81b-30369204b201/download/data.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.disabilityInstitutions.label",
        description:
          "categories.society.dataSets.disabilityInstitutions.description",
        icon: Accessibility,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanove_TUR_i_OSI/FeatureServer/replicafilescache/Geoportal_ustanove_TUR_i_OSI_-7182187914465045449.geojson",
      }, */
      /* {
        label:
          "categories.society.dataSets.civilProtectionAssemblyPoints.label",
        description:
          "categories.society.dataSets.civilProtectionAssemblyPoints.description",
        icon: Landmark,
        fetchUrl:
          "https://data.zagreb.hr/dataset/d736c146-6497-4915-894b-41bdf51267b0/resource/d30eb215-3ce2-48f8-88b2-6ffac82d46b5/download/zborna_mjesta_civilne_zatite_grada_zagreba-1.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.evacuationAreas.label",
        description: "categories.society.dataSets.evacuationAreas.description",
        icon: Map,
        fetchUrl:
          "https://data.zagreb.hr/dataset/b3c27d0f-b9b5-4140-b0cf-670e5cc1c19b/resource/479205c7-f75a-46a6-ac38-1499fcdca3d3/download/evakuacijske_povrsine.geojson",
      }, */
      /* {
        label:
          "categories.society.dataSets.croatianInstituteForSocialWork.label",
        description:
          "categories.society.dataSets.croatianInstituteForSocialWork.description",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_centar_za_socijalnu_skrb/FeatureServer/replicafilescache/Geoportal_centar_za_socijalnu_skrb_-2638481923376160763.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.socialProtectionInstitutions.label",
        description:
          "categories.society.dataSets.socialProtectionInstitutions.description",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_nadlezna_institucija/FeatureServer/replicafilescache/Geoportal_nadlezna_institucija_2079182892719747966.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.otherSocialWelfareActivities.label",
        description:
          "categories.society.dataSets.otherSocialWelfareActivities.description",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ostale_djelatnosti_socijalne_skrbi/FeatureServer/replicafilescache/Geoportal_ostale_djelatnosti_socijalne_skrbi_-2781268371483281578.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.veteransInstitutions.label",
        description:
          "categories.society.dataSets.veteransInstitutions.description",
        icon: Shield,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanova_za_branitelje/FeatureServer/replicafilescache/Geoportal_ustanova_za_branitelje_-3924332151953522156.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.homelessInstitutions.label",
        description:
          "categories.society.dataSets.homelessInstitutions.description",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanova_za_beskucnike/FeatureServer/replicafilescache/Geoportal_ustanova_za_beskucnike_-235981892016937521.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.elderlyHomes.label",
        description: "categories.society.dataSets.elderlyHomes.description",
        icon: House,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_domovi_za_starije_osobe/FeatureServer/replicafilescache/Geoportal_domovi_za_starije_osobe_8327597670917525104.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.publicToilets.label",
        description: "categories.society.dataSets.publicToilets.description",
        icon: Toilet,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/javni_wc/FeatureServer/replicafilescache/javni_wc_-4667436749754589776.geojson",
      }, */
      /* {
        label: "categories.society.dataSets.freeWifiNetwork.label",
        description: "categories.society.dataSets.freeWifiNetwork.description",
        icon: Wifi,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/59efced0d006469fa858ab07764735b0_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.kindergartens.label",
        description: "categories.society.dataSets.kindergartens.description",
        icon: Balloon,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/49bb07d4efc34bd5bacc1d330dc28a07_0/downloads/data?format=fgdb&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.cityGardens.label",
        description: "categories.society.dataSets.cityGardens.description",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/9858b1819a914c6ba0fedd0069f2d861_1/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.cityDistrictOffices.label",
        description:
          "categories.society.dataSets.cityDistrictOffices.description",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3cabb747881e44b39b561626dcd8b89a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.romanCatholicParishes.label",
        description:
          "categories.society.dataSets.romanCatholicParishes.description",
        icon: Church,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/97dd39a14cdf4ce38bc3cb8ef484728a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.cityMarkets.label",
        description: "categories.society.dataSets.cityMarkets.description",
        icon: Store,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/55461536a14e46a69c81a0a67e56c53f_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.cityGardenPoints.label",
        description: "categories.society.dataSets.cityGardenPoints.description",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3df175d45719402fa2526013a897e43e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.capitalInvestments2023.label",
        description:
          "categories.society.dataSets.capitalInvestments2023.description",
        icon: Banknote,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/e898521c36224b05b7bc0778632cd91d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.publicDogAreas.label",
        description: "categories.society.dataSets.publicDogAreas.description",
        icon: Dog,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/78e1786ccdd544cfb8465b73051f22c9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.publicSportsPlaygrounds.label",
        description:
          "categories.society.dataSets.publicSportsPlaygrounds.description",
        icon: Volleyball,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/8e2abb22194b4595965d2056f31ff66e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.competentInstitution.label",
        description:
          "categories.society.dataSets.competentInstitution.description",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.religiousCommunities.label",
        description:
          "categories.society.dataSets.religiousCommunities.description",
        icon: Church,
        fetchUrl:
          "hhttps://opendata.arcgis.com/api/v3/datasets/26e9553b2fb34513ac2f8e4468d6b652_0/downloads/data?format=shp&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.society.dataSets.firefighters.label",
        description: "categories.society.dataSets.firefighters.description",
        icon: FireExtinguisher,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/11ac9ebf240e4d2382ef7fd0b16ef9ac_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
    ],
  },
  {
    id: "health-care",
    label: "categories.health-care.label",
    description: "Nascetur vehicula platea condimentum rutrum eros donec.",
    icon: HeartPulse,
    dataSets: [
      /* {
        label: "categories.health-care.dataSets.healthcareInstitutions.label",
        description:
          "categories.health-care.dataSets.healthcareInstitutions.description",
        icon: Cross,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/fcadb80196684cc09f8c8a76852a4aa9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.health-care.dataSets.healthCenters.label",
        description:
          "categories.health-care.dataSets.healthCenters.description",
        icon: Cross,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ddc03fc26c6145e7a4a84b35a41d68d1_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
      /* {
        label: "categories.health-care.dataSets.pharmacies.label",
        description: "categories.health-care.dataSets.pharmacies.description",
        icon: Cross,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/861f84594b034965b4c0ac96cf4083b0_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
    ],
  },
  {
    id: "science",
    label: "categories.science.label",
    description: "Sollicitudin feugiat penatibus tincidunt mauris.",
    icon: Microscope,
    dataSets: [
      /* {
        label:
          "categories.science.dataSets.telecommunicationDistributionCabinets.label",
        description:
          "categories.science.dataSets.telecommunicationDistributionCabinets.description",
        icon: Zap,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/f72999526a9b4105b2af4f6f036a16fa_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      }, */
    ],
  },
];
