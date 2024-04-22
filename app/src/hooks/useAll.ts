import axios from "axios";
import { useState } from "react";
import { authClient } from "@/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useStateDate } from "../services/stateDate";

export const useAll = () => {
    const [userData, setUserData] = useState<any>([])
    const zenddate = useStateDate((state: any) => state.endDate);
    const zstartdate = useStateDate((state: any) => state.startDate);

    const { data: userdata, status: userstatus, error: usererror, isFetching: isFetchingUser } = useQuery({
        queryKey: ['userdata'],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            const { data: { user } } = await authClient.getUser()
            setUserData(user)
            return user
        },
    })

    const { data, isFetching: isFetchingData, refetch, status: datastatus, error: dataerror } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const url = `https://appaction.vercel.app/api/rdstation?squad=${userData.user_metadata?.squad}&cliente=${userData.user_metadata?.client}&account_id=${userData.user_metadata?.facebook_ads_id}&data_inicio=${zstartdate}&data_final=${zenddate}&account_id_google=${userData.user_metadata?.google_ads_id}`
            // console.log(userData)

            try {
                const response = await axios.get(url);

                return response.data;
            } catch (error) {
                console.error('Erro ao fazer a solicitação:', error);
            }
        },
        enabled: !!userdata

    })
    return { data, isFetchingData, isFetchingUser, refetch, userstatus, datastatus, usererror, dataerror };
}
