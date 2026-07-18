/* eslint-disable max-len */
import {
  Accessibility,
  Balloon,
  Banknote,
  Bike,
  Blocks,
  BookMarked,
  BowArrow,
  Building,
  Bus,
  Cable,
  CarTaxiFront,
  Cat,
  Cctv,
  Church,
  CookingPot,
  Cross,
  Dog,
  Drama,
  Droplet,
  FireExtinguisher,
  Footprints,
  Fuel,
  Gavel,
  GraduationCap,
  HeartPulse,
  Hospital,
  Hotel,
  House,
  HouseHeart,
  Landmark,
  LucideIcon,
  Map,
  Microscope,
  PersonStanding,
  Rabbit,
  Recycle,
  Road,
  Rose,
  Rows4,
  School,
  Shield,
  Siren,
  Sprout,
  SquareParking,
  Store,
  Toilet,
  TrainFront,
  TramFront,
  Trash2,
  TreePalm,
  TreePine,
  Volleyball,
  Wallet,
  Wifi,
  Wind,
  Zap,
} from "lucide-react-native";

import {
  AirQuality,
  BrownFieldArea,
  CapitalInvestment,
  ChildrenHome,
  CityDistrictOffice,
  CityGarden,
  CityMarket,
  CivilProtectionAssemblyPoint,
  CompetentInstitution,
  CroatianInstituteForSocialWork,
  CulturalInstitution,
  DataSetDisplay,
  Disabilityinstitution,
  DometicAnimalKeepingBoundry,
  DrinkingWaterFountain,
  ElderlyHome,
  ElectricChargingStation,
  EvacuationArea,
  Feature,
  Firefighter,
  FreeWifiNetwork,
  GasStation,
  HealthcareInstitution,
  HealthCareInstitution,
  HigherEducationInstitution,
  HighSchool,
  HomelessInstitution,
  HzRailwayStop,
  Kindergarten,
  LocalSelfGovernment,
  Odmorko,
  OtherPublicInstitution,
  OtherSocialWelfareActivitiy,
  Pharmacy,
  PoliceStation,
  PrimaryHealthCenter,
  PublicBicycleParking,
  PublicBicycleSystem,
  PublicDogArea,
  PublicGarage,
  PublicPlayground,
  PublicToilet,
  PublicWell,
  PupilDorm,
  RecyclingYard,
  ReligiousCommunity,
  ReservedParkingZone,
  RomanCatholicParish,
  SemiUndergroundContainer,
  SharedHuntingGround,
  SocialProtectionInstitution,
  SportFacility,
  StateAdministrationBody,
  StudentDorm,
  StudentRestaurant,
  SurveillanceCamera,
  TaxiStand,
  TelecommunicationDistributionCabinet,
  UndergroundContainer,
  VeteransInstitution,
  WildlifeProtectionProgram,
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

// eslint-disable-next-line comma-spacing
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
        id: "student-restaurants",
        icon: CookingPot,
        label: "categories.education.dataSets.studentRestaurant.label",
        description:
          "categories.education.dataSets.studentRestaurant.description",
        fetchUrl:
          "https://data.zagreb.hr/dataset/8b4ab584-5b5a-4d70-9cf3-24897645ad6b/resource/e1caf1d1-ecdf-4d5c-8020-6798c45a188d/download/data.geojson",
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
        id: "student-dorm",
        icon: Hotel,
        label: "categories.education.dataSets.studentDorms.label",
        description: "categories.education.dataSets.studentDorms.description",
        fetchUrl:
          "https://data.zagreb.hr/dataset/cd0afdae-2ef7-44f8-96bb-b96f119aa59b/resource/306ebc37-e4ee-4715-b9e1-8f67418e36e7/download/data.geojson",
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
        id: "cultural-institution",
        icon: Drama,
        label: "categories.education.dataSets.culturalInstitutions.label",
        description:
          "categories.education.dataSets.culturalInstitutions.description",
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
        id: "elementary-school",
        icon: School,
        label: "categories.education.dataSets.elementarySchools.label",
        description:
          "categories.education.dataSets.elementarySchools.description",
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
        id: "odmorko-school",
        icon: TreePalm,
        label: "categories.education.dataSets.odmorko.label",
        description: "categories.education.dataSets.odmorko.description",
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
        id: "public-playground",
        icon: Volleyball,
        label: "categories.education.dataSets.publicSportsPlaygrounds.label",
        description:
          "categories.education.dataSets.publicSportsPlaygrounds.description",
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
        id: "higher-education-institutions",
        icon: GraduationCap,
        label:
          "categories.education.dataSets.higherEducationInstitutions.label",
        description:
          "categories.education.dataSets.higherEducationInstitutions.description",
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
        id: "sport-facilities",
        icon: Volleyball,
        label: "categories.education.dataSets.sportsFacilities.label",
        description:
          "categories.education.dataSets.sportsFacilities.description",
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
        id: "pupil-dorm",
        icon: Building,
        label: "categories.education.dataSets.pupilDorms.label",
        description: "categories.education.dataSets.pupilDorms.description",
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
        id: "high-schools",
        icon: School,
        label: "categories.education.dataSets.highSchools.label",
        description: "categories.education.dataSets.highSchools.description",
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
        id: "capital-investments-2024",
        icon: Banknote,
        label: "categories.economy.dataSets.capitalInvestments2024.label",
        description:
          "categories.economy.dataSets.capitalInvestments2024.description",
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
        id: "capital-investments-2023",
        icon: Banknote,
        label: "categories.economy.dataSets.capitalInvestments2023.label",
        description:
          "categories.economy.dataSets.capitalInvestments2023.description",
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
        id: "other-public-institutions",
        icon: Landmark,
        label:
          "categories.public-sector.dataSets.otherPublicInstitutions.label",
        description:
          "categories.public-sector.dataSets.otherPublicInstitutions.description",
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
        id: "health-care-institutions",
        icon: Hospital,
        label: "categories.public-sector.dataSets.healthcareInstitutions.label",
        description:
          "categories.public-sector.dataSets.healthcareInstitutions.description",
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
        id: "city-district-offices",
        icon: Landmark,
        label: "categories.public-sector.dataSets.cityDistrictOffices.label",
        description:
          "categories.public-sector.dataSets.cityDistrictOffices.description",
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
        id: "local-self-government",
        icon: Landmark,
        label: "categories.public-sector.dataSets.localSelfGovernment.label",
        description:
          "categories.public-sector.dataSets.localSelfGovernment.description",
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
        id: "roman-catholic-parishes",
        icon: Church,
        label: "categories.public-sector.dataSets.romanCatholicParishes.label",
        description:
          "categories.public-sector.dataSets.romanCatholicParishes.description",
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
        id: "local-offices",
        icon: BookMarked,
        label: "categories.public-sector.dataSets.localOffices.label",
        description:
          "categories.public-sector.dataSets.localOffices.description",
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
        id: "higher-education-institutions",
        icon: GraduationCap,
        label:
          "categories.public-sector.dataSets.higherEducationInstitutions.label",
        description:
          "categories.public-sector.dataSets.higherEducationInstitutions.description",
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
        id: "state-administartion-bodies",
        icon: Landmark,
        label:
          "categories.public-sector.dataSets.stateAdministrationBodies.label",
        description:
          "categories.public-sector.dataSets.stateAdministrationBodies.description",
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
        id: "semi-underground-containers",
        icon: Trash2,
        label:
          "categories.environment.dataSets.semiUndergroundContainers.label",
        description:
          "categories.environment.dataSets.semiUndergroundContainers.description",
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
        id: "underground-containers",
        icon: Trash2,
        label: "categories.environment.dataSets.undergroundContainers.label",
        description:
          "categories.environment.dataSets.undergroundContainers.description",
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
        id: "drinking-water-fountains",
        icon: Droplet,
        label: "categories.environment.dataSets.drinkingWaterFountains.label",
        description:
          "categories.environment.dataSets.drinkingWaterFountains.description",
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
        id: "city-gardens",
        icon: Rose,
        label: "categories.environment.dataSets.cityGardens.label",
        description: "categories.environment.dataSets.cityGardens.description",
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
        id: "recycling-yards",
        icon: Recycle,
        label: "categories.environment.dataSets.recyclingYards.label",
        description:
          "categories.environment.dataSets.recyclingYards.description",
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
        id: "air-quality",
        icon: Wind,
        label: "categories.environment.dataSets.airQuality.label",
        description: "categories.environment.dataSets.airQuality.description",
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
        id: "brownfield-areas",
        icon: Blocks,
        label: "categories.environment.dataSets.brownfieldAreas.label",
        description:
          "categories.environment.dataSets.brownfieldAreas.description",
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
    ],
  },
  {
    id: "agriculture",
    label: "categories.agriculture.label",
    description: "Bibendum tristique congue maximus litora sem vulputate.",
    icon: Sprout,
    dataSets: [
      dataSet({
        id: "domestic-animal-keeping-boundaries",
        icon: Cat,
        label:
          "categories.agriculture.dataSets.domesticAnimalKeepingBoundaries.label",
        description:
          "categories.agriculture.dataSets.domesticAnimalKeepingBoundaries.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/7e93637c72ac4c278c69ad5260611c39_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<DometicAnimalKeepingBoundry>) => ({
          title: "Granice dopuštenog držanja domaćih životinja",
          details: [
            { label: "Izvor", value: feature.properties.Izvor },
            { label: "Izradio", value: feature.properties.Izradio },
            { label: "Nadležan", value: feature.properties.Nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "city-markets",
        icon: Store,
        label: "categories.agriculture.dataSets.cityMarkets.label",
        description: "categories.agriculture.dataSets.cityMarkets.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/55461536a14e46a69c81a0a67e56c53f_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CityMarket>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Radno vrijeme", value: feature.properties.radno_vrijeme },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Web", value: feature.properties.web },
            { label: "Email", value: feature.properties.email },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "shared-hunting-grounds",
        icon: BowArrow,
        label: "categories.agriculture.dataSets.sharedHuntingGrounds.label",
        description:
          "categories.agriculture.dataSets.sharedHuntingGrounds.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/d87e492a5c994e04b47b1eaa7a06699d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<SharedHuntingGround>) => ({
          title: feature.properties.Naziv,
          details: [
            { label: "Površina", value: feature.properties.Area_ha },
            { label: "Status", value: feature.properties.STATUS },
          ],
        }),
      }),

      dataSet({
        id: "wildlife-protection-program",
        icon: Rabbit,
        label:
          "categories.agriculture.dataSets.wildlifeProtectionProgram.label",
        description:
          "categories.agriculture.dataSets.wildlifeProtectionProgram.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/96a059b8909a4d70b81bbbae9d883a25_5/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<WildlifeProtectionProgram>) => ({
          title: feature.properties.Naziv,
          details: [
            { label: "Površina", value: feature.properties.Povrsina_ha },
          ],
        }),
      }),
    ],
  },
  {
    id: "judiciary",
    label: "categories.judiciary.label",
    description: "Pulvinar maecenas placerat faucibus per senectus ligula.",
    icon: Gavel,
    dataSets: [
      dataSet({
        id: "surveillance-cameras-judiciary",
        icon: Cctv,
        label: "categories.judiciary.dataSets.surveillanceCameras.label",
        description:
          "categories.judiciary.dataSets.surveillanceCameras.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<SurveillanceCamera>) => ({
          title: feature.properties.naziv,
          details: [{ label: "Adresa", value: feature.properties.adresa }],
        }),
      }),
      dataSet({
        id: "police-stations",
        icon: Siren,
        label: "categories.judiciary.dataSets.police.label",
        description: "categories.judiciary.dataSets.police.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/30d4d80d445a46d99f2f802814d70833_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PoliceStation>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Web", value: feature.properties.web },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "firefighters",
        icon: FireExtinguisher,
        label: "categories.judiciary.dataSets.firefighters.label",
        description: "categories.judiciary.dataSets.firefighters.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/11ac9ebf240e4d2382ef7fd0b16ef9ac_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<Firefighter>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Gradska četvrt", value: feature.properties.grad_cetv },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Nadležan", value: feature.properties.nadlezan },
            { label: "Izvor", value: feature.properties.izvor },
          ],
        }),
      }),
    ],
  },
  {
    id: "traffic",
    label: "categories.traffic.label",
    description: "Efficitur ridiculus iaculis parturient morbi netus aliquam.",
    icon: Road,
    dataSets: [
      dataSet({
        id: "zet-bus-stops",
        icon: Bus,
        label: "categories.traffic.dataSets.zetBusStops.label",
        description: "categories.traffic.dataSets.zetBusStops.description",
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
        id: "hz-railway-stops",
        icon: TrainFront,
        label: "categories.traffic.dataSets.hzRailwayStops.label",
        description: "categories.traffic.dataSets.hzRailwayStops.description",
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
        id: "pedestrian-zones",
        icon: Footprints,
        label: "categories.traffic.dataSets.pedestrianZone.label",
        description: "categories.traffic.dataSets.pedestrianZone.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3aabf37d1d8b497c970dcddc21ed9612_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: () => ({
          title: "Pješačke zone",
          details: [{ label: "", value: null }],
        }),
      }),
      dataSet({
        id: "reserved-parking-zones",
        icon: SquareParking,
        label: "categories.traffic.dataSets.reservedParkingZones.label",
        description:
          "categories.traffic.dataSets.reservedParkingZones.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/04e3d79e90b04167a6efa8d277e5a482_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<ReservedParkingZone>) => ({
          title: feature.properties.Naziv,
          details: [{ label: "Opis", value: feature.properties.Opis }],
        }),
      }),
      dataSet({
        id: "public-garages",
        icon: Rows4,
        label: "categories.traffic.dataSets.publicGarages.label",
        description: "categories.traffic.dataSets.publicGarages.description",
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
        id: "public-bicycle-parking",
        icon: SquareParking,
        label: "categories.traffic.dataSets.publicBicycleParking.label",
        description:
          "categories.traffic.dataSets.publicBicycleParking.description",
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
        id: "public-bicycle-system",
        icon: Bike,
        label: "categories.traffic.dataSets.publicBicycleSystem.label",
        description:
          "categories.traffic.dataSets.publicBicycleSystem.description",
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
        id: "bicycle-lanes",
        icon: Road,
        label: "categories.traffic.dataSets.bicycleLanes.label",
        description: "categories.traffic.dataSets.bicycleLanes.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/b10db2ae3a5b4e4b8dbee85a89d4b5b1_4/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: () => ({
          title: "Biciklističke trake",
          details: [],
        }),
      }),
      dataSet({
        id: "surveillance-cameras",
        icon: Cctv,
        label: "categories.traffic.dataSets.surveillanceCameras.label",
        description:
          "categories.traffic.dataSets.surveillanceCameras.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<SurveillanceCamera>) => ({
          title: feature.properties.naziv,
          details: [{ label: "Adresa", value: feature.properties.adresa }],
        }),
      }),
      dataSet({
        id: "taxi-stands",
        icon: CarTaxiFront,
        label: "categories.traffic.dataSets.taxiStands.label",
        description: "categories.traffic.dataSets.taxiStands.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/c2a3ae87380b472d9b7e72f31cd296da_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<TaxiStand>) => ({
          title: feature.properties.lokacija,
          details: [{ label: "Nadležan", value: feature.properties.nadlezan }],
        }),
      }),
      dataSet({
        id: "electric-charging-stations",
        icon: Cable,
        label: "categories.traffic.dataSets.electricChargingStations.label",
        description:
          "categories.traffic.dataSets.electricChargingStations.description",
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
        id: "zet-tram-stops",
        icon: TramFront,
        label: "categories.traffic.dataSets.zetTramStops.label",
        description: "categories.traffic.dataSets.zetTramStops.description",
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
        id: "gas-stations",
        icon: Fuel,
        label: "categories.traffic.dataSets.gasStations.label",
        description: "categories.traffic.dataSets.gasStations.description",
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
      dataSet({
        id: "public-wells",
        icon: Droplet,
        label: "categories.society.dataSets.publicWells.label",
        description: "categories.society.dataSets.publicWells.description",
        fetchUrl:
          "https://data.zagreb.hr/dataset/0d1c65b5-6e8f-4b6a-be90-cc9ecb6fa374/resource/2010797b-3e1e-4a43-9a5a-b1619722d2ac/download/data.geojson",
        getDisplayData: (feature: Feature<PublicWell>) => ({
          title: feature.properties.lokacija,
          details: [
            { label: "Napomena", value: feature.properties.napomena_teren },
            { label: "Vrsta", value: feature.properties.ki_vrsta },
            { label: "Tip zdenca", value: feature.properties.tip_zdenca },
            { label: "Aktivan", value: feature.properties.aktivan_da_ne },
            { label: "Gradska četvrt", value: feature.properties.naziv_gc },
            { label: "Održava", value: feature.properties.odrzava_ki },
            { label: "Upravitelj", value: feature.properties.upravitelj },
            {
              label: "Status održavanja",
              value: feature.properties.status_odrz,
            },
          ],
        }),
      }),
      dataSet({
        id: "children-homes",
        icon: HouseHeart,
        label: "categories.society.dataSets.childrenHomes.label",
        description: "categories.society.dataSets.childrenHomes.description",
        fetchUrl:
          "https://data.zagreb.hr/dataset/65e1cb89-9cc7-43d2-a94d-3305e2917224/resource/e0f7e07d-73e1-4c9e-a81b-30369204b201/download/data.geojson",
        getDisplayData: (feature: Feature<ChildrenHome>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Vrsta", value: feature.properties.vrsta },
            { label: "Podružnica", value: feature.properties.podruznica },
            { label: "Web", value: feature.properties.web },
            { label: "Email", value: feature.properties.email },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "disability-institutions",
        icon: Accessibility,
        label: "categories.society.dataSets.disabilityInstitutions.label",
        description:
          "categories.society.dataSets.disabilityInstitutions.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanove_TUR_i_OSI/FeatureServer/replicafilescache/Geoportal_ustanove_TUR_i_OSI_-7182187914465045449.geojson",
        getDisplayData: (feature: Feature<Disabilityinstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta", value: feature.properties.vrsta },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Web", value: feature.properties.web },
            { label: "Email", value: feature.properties.email },
            { label: "Podružnica", value: feature.properties.podruznica },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "civil-protection-assembly-points",
        icon: Accessibility,
        label:
          "categories.society.dataSets.civilProtectionAssemblyPoints.label",
        description:
          "categories.society.dataSets.civilProtectionAssemblyPoints.description",
        fetchUrl:
          "https://data.zagreb.hr/dataset/d736c146-6497-4915-894b-41bdf51267b0/resource/d30eb215-3ce2-48f8-88b2-6ffac82d46b5/download/zborna_mjesta_civilne_zatite_grada_zagreba-1.geojson",
        getDisplayData: (feature: Feature<CivilProtectionAssemblyPoint>) => ({
          title: feature.properties.zboriste,
          details: [
            { label: "Gradska četvrt", value: feature.properties.gradska_ce },
          ],
        }),
      }),
      dataSet({
        id: "evacuation-areas",
        icon: Map,
        label: "categories.society.dataSets.evacuationAreas.label",
        description: "categories.society.dataSets.evacuationAreas.description",
        fetchUrl:
          "https://data.zagreb.hr/dataset/b3c27d0f-b9b5-4140-b0cf-670e5cc1c19b/resource/479205c7-f75a-46a6-ac38-1499fcdca3d3/download/evakuacijske_povrsine.geojson",
        getDisplayData: (feature: Feature<EvacuationArea>) => ({
          title: feature.properties.NAZIV,
          details: [
            { label: "Gradska četvrt", value: feature.properties.G_cetvrt },
            { label: "Tip", value: feature.properties.Tip },
            {
              label: "Površina",
              value: `${feature.properties.Povrsina_ha.toFixed(2)} ha / ${(feature.properties.Povrsina_ha * 10000).toFixed(2)} m2`,
            },
          ],
        }),
      }),
      dataSet({
        id: "croatian-institute-for-social-work",
        icon: Landmark,
        label:
          "categories.society.dataSets.croatianInstituteForSocialWork.label",
        description:
          "categories.society.dataSets.croatianInstituteForSocialWork.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_centar_za_socijalnu_skrb/FeatureServer/replicafilescache/Geoportal_centar_za_socijalnu_skrb_-2638481923376160763.geojson",
        getDisplayData: (feature: Feature<CroatianInstituteForSocialWork>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            {
              label: "Područje nadležnosti",
              value: feature.properties.podr_nadleznosti,
            },
            { label: "Osnivač", value: feature.properties.osnivac },
            { label: "Nadležan", value: feature.properties.nadlezan },
            { label: "Gradska četvrt", value: feature.properties.IME_GC },
          ],
        }),
      }),
      dataSet({
        id: "social-protection-institutions",
        icon: Landmark,
        label: "categories.society.dataSets.socialProtectionInstitutions.label",
        description:
          "categories.society.dataSets.socialProtectionInstitutions.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_nadlezna_institucija/FeatureServer/replicafilescache/Geoportal_nadlezna_institucija_2079182892719747966.geojson",
        getDisplayData: (feature: Feature<SocialProtectionInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Osnivač", value: feature.properties.osnivac },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "other-social-welfare-wctivities",
        icon: Landmark,
        label: "categories.society.dataSets.otherSocialWelfareActivities.label",
        description:
          "categories.society.dataSets.otherSocialWelfareActivities.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ostale_djelatnosti_socijalne_skrbi/FeatureServer/replicafilescache/Geoportal_ostale_djelatnosti_socijalne_skrbi_-2781268371483281578.geojson",
        getDisplayData: (feature: Feature<OtherSocialWelfareActivitiy>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta", value: feature.properties.vrsta },
            { label: "Kapacitet", value: feature.properties.kapacitet },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Osnivač", value: feature.properties.osnivac },
            { label: "Podružnica", value: feature.properties.podruznica },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "veterans-institutions",
        icon: Shield,
        label: "categories.society.dataSets.veteransInstitutions.label",
        description:
          "categories.society.dataSets.veteransInstitutions.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanova_za_branitelje/FeatureServer/replicafilescache/Geoportal_ustanova_za_branitelje_-3924332151953522156.geojson",
        getDisplayData: (feature: Feature<VeteransInstitution>) => ({
          title: feature.properties.NAZIV,
          details: [
            { label: "Vrsta", value: feature.properties.VRSTA },
            { label: "Adresa", value: feature.properties.ADRESA },
            { label: "Telefon", value: feature.properties.TELEFON },
            { label: "Email", value: feature.properties.EMAIL },
            { label: "Web", value: feature.properties.WEB },
            { label: "Osnivač", value: feature.properties.OSNIVAC },
            {
              label: "Gradska četvrt",
              value: feature.properties.gradska_cetvrt,
            },
            { label: "Nadležan", value: feature.properties.NADLEZAN },
          ],
        }),
      }),
      dataSet({
        id: "homeless-institutions",
        icon: Landmark,
        label: "categories.society.dataSets.homelessInstitutions.label",
        description:
          "categories.society.dataSets.homelessInstitutions.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanova_za_beskucnike/FeatureServer/replicafilescache/Geoportal_ustanova_za_beskucnike_-235981892016937521.geojson",
        getDisplayData: (feature: Feature<HomelessInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta", value: feature.properties.vrsta },
            {
              label: "Kapacitet",
              value: feature.properties.kapacitet,
            },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Podružnica", value: feature.properties.podruznica },
            { label: "Vlasništvo", value: feature.properties.vlasnistvo },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "elderly-homes",
        icon: House,
        label: "categories.society.dataSets.elderlyHomes.label",
        description: "categories.society.dataSets.elderlyHomes.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_domovi_za_starije_osobe/FeatureServer/replicafilescache/Geoportal_domovi_za_starije_osobe_8327597670917525104.geojson",
        getDisplayData: (feature: Feature<ElderlyHome>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Vrsta", value: feature.properties.vrsta },
            {
              label: "Kapacitet",
              value: feature.properties.kapacitet,
            },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Podružnica", value: feature.properties.podruznica },
            { label: "Osnivač", value: feature.properties.osnivac },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "public-toilets",
        icon: Toilet,
        label: "categories.society.dataSets.publicToilets.label",
        description: "categories.society.dataSets.publicToilets.description",
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/javni_wc/FeatureServer/replicafilescache/javni_wc_-4667436749754589776.geojson",
        getDisplayData: (feature: Feature<PublicToilet>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Naplata", value: feature.properties.naplata },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "free-wifi-network",
        icon: Wifi,
        label: "categories.society.dataSets.freeWifiNetwork.label",
        description: "categories.society.dataSets.freeWifiNetwork.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/59efced0d006469fa858ab07764735b0_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<FreeWifiNetwork>) => ({
          title: feature.properties.Lokacija,
          details: [
            { label: "Godina", value: feature.properties.godina },
            { label: "Gradska četvrt", value: feature.properties.IME_GC },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "kindergartens",
        icon: Balloon,
        label: "categories.society.dataSets.kindergartens.label",
        description: "categories.society.dataSets.kindergartens.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/49bb07d4efc34bd5bacc1d330dc28a07_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<Kindergarten>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Gradska četvrt", value: feature.properties.grad_cetvr },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Vrsta", value: feature.properties.vr_vrtica },
            { label: "Tip", value: feature.properties.tip_vrtica },
            { label: "Građevina", value: feature.properties.gradjevina },
            { label: "Kuhinja", value: feature.properties.kuhinja },
            { label: "Dvorana", value: feature.properties.dvorana },
            { label: "Vdi", value: feature.properties.vdi },
            { label: "Strani jezik", value: feature.properties.strani_jez },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "city-gardens-society",
        icon: Rose,
        label: "categories.environment.dataSets.cityGardens.label",
        description: "categories.environment.dataSets.cityGardens.description",
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
        id: "city-district-offices-society",
        icon: Landmark,
        label: "categories.public-sector.dataSets.cityDistrictOffices.label",
        description:
          "categories.public-sector.dataSets.cityDistrictOffices.description",
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
        id: "roman-catholic-parishes-society",
        icon: Church,
        label: "categories.public-sector.dataSets.romanCatholicParishes.label",
        description:
          "categories.public-sector.dataSets.romanCatholicParishes.description",
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
        id: "city-markets-society",
        icon: Store,
        label: "categories.agriculture.dataSets.cityMarkets.label",
        description: "categories.agriculture.dataSets.cityMarkets.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/55461536a14e46a69c81a0a67e56c53f_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CityMarket>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Radno vrijeme", value: feature.properties.radno_vrijeme },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Web", value: feature.properties.web },
            { label: "Email", value: feature.properties.email },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "public-dog-areas",
        icon: Dog,
        label: "categories.society.dataSets.publicDogAreas.label",
        description: "categories.society.dataSets.publicDogAreas.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/78e1786ccdd544cfb8465b73051f22c9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PublicDogArea>) => ({
          title: "Javna površina za pse",
          details: [
            { label: "Lokacija", value: feature.properties.Lokacija },
            { label: "Gradska četvrt", value: feature.properties.GC },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "public-playground-society",
        icon: Volleyball,
        label: "categories.education.dataSets.publicSportsPlaygrounds.label",
        description:
          "categories.education.dataSets.publicSportsPlaygrounds.description",
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
        id: "competent-institution",
        icon: Landmark,
        label: "categories.society.dataSets.competentInstitution.label",
        description:
          "categories.society.dataSets.competentInstitution.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<CompetentInstitution>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Osnivač", value: feature.properties.osnivac },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "religious-communities",
        icon: Church,
        label: "categories.society.dataSets.religiousCommunities.label",
        description:
          "categories.society.dataSets.religiousCommunities.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/26e9553b2fb34513ac2f8e4468d6b652_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<ReligiousCommunity>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Nadležan", value: feature.properties.nadlezan },
          ],
        }),
      }),
      dataSet({
        id: "firefighters-society",
        icon: FireExtinguisher,
        label: "categories.judiciary.dataSets.firefighters.label",
        description: "categories.judiciary.dataSets.firefighters.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/11ac9ebf240e4d2382ef7fd0b16ef9ac_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<Firefighter>) => ({
          title: feature.properties.naziv,
          details: [
            { label: "Gradska četvrt", value: feature.properties.grad_cetv },
            { label: "Adresa", value: feature.properties.adresa },
            { label: "Telefon", value: feature.properties.telefon },
            { label: "Email", value: feature.properties.email },
            { label: "Web", value: feature.properties.web },
            { label: "Nadležan", value: feature.properties.nadlezan },
            { label: "Izvor", value: feature.properties.izvor },
          ],
        }),
      }),
    ],
  },
  {
    id: "health-care",
    label: "categories.health-care.label",
    description: "Nascetur vehicula platea condimentum rutrum eros donec.",
    icon: HeartPulse,
    dataSets: [
      dataSet({
        id: "healthcare-institutions",
        icon: Cross,
        label: "categories.health-care.dataSets.healthcareInstitutions.label",
        description:
          "categories.health-care.dataSets.healthcareInstitutions.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/fcadb80196684cc09f8c8a76852a4aa9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<HealthcareInstitution>) => ({
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
        id: "primary-health-centers",
        icon: Cross,
        label: "categories.health-care.dataSets.healthCenters.label",
        description:
          "categories.health-care.dataSets.healthCenters.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ddc03fc26c6145e7a4a84b35a41d68d1_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<PrimaryHealthCenter>) => ({
          title: feature.properties.Domovi_zdravlja_naziv,
          details: [
            {
              label: "Adresa",
              value: feature.properties.Domovi_zdravlja_adresa,
            },
            {
              label: "Telefon",
              value: feature.properties.Domovi_zdravlja_telefon,
            },
            { label: "Web", value: feature.properties.Domovi_zdravlja_web },
            {
              label: "Nadležan",
              value: feature.properties.Domovi_zdravlja_nadlezan,
            },
          ],
        }),
      }),
      dataSet({
        id: "pharmacies",
        icon: Cross,
        label: "categories.health-care.dataSets.pharmacies.label",
        description: "categories.health-care.dataSets.pharmacies.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/861f84594b034965b4c0ac96cf4083b0_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (feature: Feature<Pharmacy>) => ({
          title: feature.properties.naziv,
          details: [
            {
              label: "Adresa",
              value: feature.properties.adresa,
            },
            {
              label: "Telefon",
              value: feature.properties.telefon,
            },
            {
              label: "Email",
              value: feature.properties.email,
            },
            { label: "Web", value: feature.properties.web },
            {
              label: "Nadležan",
              value: feature.properties.nadlezan,
            },
          ],
        }),
      }),
    ],
  },
  {
    id: "science",
    label: "categories.science.label",
    description: "Sollicitudin feugiat penatibus tincidunt mauris.",
    icon: Microscope,
    dataSets: [
      dataSet({
        id: "telecommunication-distribution-cabinets",
        icon: Zap,
        label:
          "categories.science.dataSets.telecommunicationDistributionCabinets.label",
        description:
          "categories.science.dataSets.telecommunicationDistributionCabinets.description",
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/f72999526a9b4105b2af4f6f036a16fa_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
        getDisplayData: (
          feature: Feature<TelecommunicationDistributionCabinet>,
        ) => ({
          title: feature.properties.Adresa,
          details: [
            { label: "Operater", value: feature.properties.Operater },
            { label: "Tip ormara", value: feature.properties.Tip_ormara },
            { label: "Dužina", value: feature.properties.Dužina },
            { label: "Visina", value: feature.properties.Visina },
            { label: "Širina", value: feature.properties.Širina },
            { label: "Površina", value: feature.properties.Površina },
            { label: "Tip površine", value: feature.properties.Tip_površine },
            {
              label: "Katastarska općina",
              value: feature.properties.Katastarska_općina,
            },
            {
              label: "Katastarska čestica",
              value: feature.properties.Katastarska_čestica,
            },
          ],
        }),
      }),
    ],
  },
];
