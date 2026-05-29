import { DataSetConfig, StudentRestaurantProperties } from "@/types";
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

export const STUDENT_RESTAURANT_DATA_SET: DataSetConfig<StudentRestaurantProperties> =
  {
    id: STUDENT_RESTAURANT_DATA_SET_ID,
    label: "Studentski restoran",
    fetchUrl:
      "https://data.zagreb.hr/dataset/8b4ab584-5b5a-4d70-9cf3-24897645ad6b/resource/e1caf1d1-ecdf-4d5c-8020-6798c45a188d/download/data.geojson",
    getTitle: (properties) => properties.naziv,
    getDetails: (properties) => [
      { label: "Adresa", value: properties.adresa },
      { label: "Email", value: properties.email },
      { label: "Web", value: properties.web },
    ],
  };

export const DATA_SET_CONFIGS = {
  [STUDENT_RESTAURANT_DATA_SET_ID]: STUDENT_RESTAURANT_DATA_SET,
} as const;

export type DataSetId = keyof typeof DATA_SET_CONFIGS;

export const getDataSetConfig = (id?: string) => {
  if (!id) return undefined;

  return id in DATA_SET_CONFIGS ? DATA_SET_CONFIGS[id as DataSetId] : undefined;
};
