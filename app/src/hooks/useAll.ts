import axios from "axios";
import { useState } from "react";
import { authClient } from "@/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useStateDate } from "../services/stateDate";
import { useUser } from "./useUser";

export const useAll = () => {
    const zenddate = useStateDate((state) => state.endDate);
    const zstartdate = useStateDate((state) => state.startDate);

    const {  data: userData, isError: isErrorUser, error: errorUser } = useUser()

    const { data, refetch, isPending, error, isError  } = useQuery({
        queryKey: ['useApiData'],
        queryFn: async () => {
            const url = `https://appaction.vercel.app/api/rdstation?squad=${userData?.user_metadata?.squad}&cliente=${userData?.user_metadata?.client}&account_id=${userData?.user_metadata?.facebook_ads_id}&data_inicio=${zstartdate}&data_final=${zenddate}&account_id_google=${userData?.user_metadata?.google_ads_id}`

            try {
                const response = await axios.get(url);
                const res = response.data
                return res;   
            } catch (error) {
                console.error('Erro ao fazer a solicitação:', error);
            }
        },
        enabled: !!userData
    })

    return { data, isPending, refetch, error, isError   };
}

