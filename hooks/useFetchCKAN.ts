import { fetchCKAN } from "@/services/api";
import { CKANRecordResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchCKAN = <TProperties = Record<string, unknown>>(
  url: string,
) => {
  return useQuery<CKANRecordResponse<TProperties>>({
    queryKey: ["ckan", url],
    queryFn: ({ signal }) => fetchCKAN<TProperties>(url, signal),
    enabled: Boolean(url),
    staleTime: 0,
    gcTime: 0,
  });
};
