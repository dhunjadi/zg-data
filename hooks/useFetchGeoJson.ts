import { fetchGeoJsonData } from "@/services/api";
import { FeatureCollection } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchGeoJson = <TProperties = Record<string, unknown>>(
  url: string,
) => {
  return useQuery<FeatureCollection<TProperties>>({
    queryKey: ["geo-json", url],
    queryFn: ({ signal }) => fetchGeoJsonData<TProperties>(url, signal),
    enabled: Boolean(url),
    staleTime: 0,
    gcTime: 0,
  });
};
