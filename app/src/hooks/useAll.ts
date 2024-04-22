import axios from "axios";
import { useState } from "react";
import { authClient } from "@/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useStateDate } from "../services/stateDate";

export const useAll = () => {
    const [userData, setUserData] = useState<any>([])
    const zenddate = useStateDate((state: any) => state.endDate);
    const zstartdate = useStateDate((state: any) => state.startDate);

    // const { data: userdata, status: userstatus, error: usererror, isFetching: isFetchingUser } = useQuery({
    //     queryKey: ['userdata'],
    //     queryFn: async () => {
    //         await new Promise(resolve => setTimeout(resolve, 500));
    //         const { data: { user } } = await authClient.getUser()
    //         setUserData(user)
    //         return user
    //     },
    // })

    const { data, isFetching, refetch, status, error, isError } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const url = `https://appaction.vercel.app/api/rdstation?squad=educacao&cliente=uri&account_id=122388731196060&data_inicio=${zstartdate}&data_final=${zenddate}&account_id_google=2488912156`
            // console.log(userData)

            try {
                const response = await axios.get(url);

                return response.data;
            } catch (error) {
                console.error('Erro ao fazer a solicitação:', error);
            }
        },
        // enabled: !!userdata

    })
    return { data, isFetching, refetch, status, error, isError };
}
