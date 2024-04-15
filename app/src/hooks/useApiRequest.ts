import { useQuery } from "@tanstack/react-query";
import apiRequest from "../services/apiRequest";

export function useApiRequest() {
    const { data, isLoading } = useQuery({
        queryKey: ['useApiData'],
        queryFn: apiRequest
    })

    return { data, isLoading }
}
