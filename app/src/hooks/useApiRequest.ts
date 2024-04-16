import { useQuery } from "@tanstack/react-query";
import apiRequest from "../services/apiRequest";
import axios from "axios";
import { useStateDate } from "../services/stateDate";

export function useApiRequest() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['useApiData'],
        queryFn: async () => {
            const zstartdate = useStateDate((state) => state.startDate);
            const zenddate = useStateDate((state) => state.endDate);
            const url = `https://appaction.vercel.app/api/rdstation?squad=educacao&cliente=faex&account_id=2833806533565354&data_inicio=${zstartdate}&data_final=${zenddate}&account_id_google=1918176068`

            try {
                const response = await axios.get(url);
                return response.data;
            } catch (error) {
                console.error('Erro ao fazer a solicitação:', error);
            }
        }
    })

    return { data, isLoading, error }
}
