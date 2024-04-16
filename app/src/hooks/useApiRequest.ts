import { useQuery } from "@tanstack/react-query";
import apiRequest from "../services/apiRequest";
import apiService from "../services/apiService";
export function useApiRequest() {
    const { data, isLoading } = useQuery({
        queryKey: ['useApiData'],
        queryFn: apiService
    })

    return { data, isLoading }
}
