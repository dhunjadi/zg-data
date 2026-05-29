import { FeatureCollection } from "@/types";
import axios from "axios";

export const fetchGeoJsonData = async <TProperties = Record<string, unknown>>(
  url: string,
): Promise<FeatureCollection<TProperties>> => {
  const response = await axios.get(url);
  return response.data;
};
