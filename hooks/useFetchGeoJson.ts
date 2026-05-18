import { fetchGeoJsonData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchGeoJson = (url: string) => {
  return useQuery({
    queryKey: ["geo-json"],
    queryFn: () => fetchGeoJsonData(url),
    staleTime: 1000 * 60 * 5,
  });
};
