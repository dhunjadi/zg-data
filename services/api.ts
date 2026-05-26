import { Item } from "@/types";
import axios from "axios";

export const fetchGeoJsonData = async (url: string): Promise<Item> => {
  const response = await axios.get(url);
  return response.data;
};
