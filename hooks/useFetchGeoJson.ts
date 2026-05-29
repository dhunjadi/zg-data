import { fetchGeoJsonData } from "@/services/api";
import { FeatureCollection } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchGeoJson = <TProperties = Record<string, unknown>>(
  url: string,
) => {
  return useQuery<FeatureCollection<TProperties>>({
    queryKey: ["geo-json", url],
    queryFn: () => fetchGeoJsonData<TProperties>(url),
    enabled: Boolean(url),
    staleTime: 1000 * 60 * 5,
  });
};
