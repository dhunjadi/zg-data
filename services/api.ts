import { CKANRecordResponse, FeatureCollection } from "@/types";
import axios from "axios";

export const fetchGeoJsonData = async <TProperties = Record<string, unknown>>(
  url: string,
  signal: AbortSignal,
): Promise<FeatureCollection<TProperties>> => {
  const response = await axios.get(url, { signal });
  return response.data;
};

export const fetchCKAN = async <TProperties = Record<string, unknown>>(
  url: string,
  signal: AbortSignal,
): Promise<CKANRecordResponse<TProperties>> => {
  const response = await axios.get(url, { signal });
  return response.data;
};
