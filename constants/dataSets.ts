import {
  AnyDataSetConfig,
  CulturalInstitutionProperties,
  DataSetConfig,
  ElementarySchoolProperties,
  OdmorkoProperties,
  StudentDormProperties,
  StudentRestaurantProperties,
} from "@/types";
import {
  Baby,
  BookMarked,
  Bus,
  CookingPot,
  Droplets,
  Landmark,
  TrainFront,
  Trash,
  Trash2,
} from "lucide-react-native";

export const DATASETS = [
  {
    label: "Javni zdenci",
    description: "Velit cursus magna fringilla natoque.",
    icon: Droplets,
  },
  {
    label: "Autobusna stajališta ZET",
    description: "Velit cursus magna fringilla natoque.",
    icon: Bus,
  },
  {
    label: "Željeznička stajališta HŽ",
    description: "Velit cursus magna fringilla natoque.",
    icon: TrainFront,
  },
  {
    label: "Studentski restoran",
    description: "Velit cursus magna fringilla natoque.",
    icon: CookingPot,
  },
  {
    label: "Studentsko naselje",
    description: "Velit cursus magna fringilla natoque.",
    icon: BookMarked,
  },
  {
    label: "Polupodzemni spremnik",
    description: "Velit cursus magna fringilla natoque.",
    icon: Trash2,
  },
  {
    label: "Podzemni spremnik",
    description: "Velit cursus magna fringilla natoque.",
    icon: Trash,
  },
  {
    label: "Područni odsjeci",
    description: "Velit cursus magna fringilla natoque.",
    icon: Landmark,
  },
  {
    label: "Domovi za djecu",
    description: "Velit cursus magna fringilla natoque.",
    icon: Baby,
  },
];

export const STUDENT_RESTAURANT_DATA_SET_ID = "student-restaurants";
export const STUDENT_DORM_DATA_SET_ID = "student-dorm";
export const CULTURAL_INSTITUTION_DATA_SET_ID = "cultural-institution";
export const ELEMENTARY_SCHOOL_DATA_SET_ID = "elementary-school";
export const ODMORKO_DATA_SET_ID = "odmorko-school";

export const STUDENT_RESTAURANT_DATA_SET: DataSetConfig<StudentRestaurantProperties> =
  {
    id: STUDENT_RESTAURANT_DATA_SET_ID,
    label: "Studentski restoran",
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
  label: "Studentski restoran",
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
    label: "Kulturne ustanove",
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
    label: "Osnovne škole",
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
  label: "Odmorko",
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
} as const;

export type DataSetId = keyof typeof DATA_SET_CONFIGS;

export const getDataSetConfig = (id?: string) => {
  if (!id) return undefined;

  return id in DATA_SET_CONFIGS ? DATA_SET_CONFIGS[id as DataSetId] : undefined;
};
