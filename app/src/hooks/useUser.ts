import { authClient } from "@/supabaseClient"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"


export const useUser = () => {
    return useQuery({
        queryKey: ['userdata'],
        queryFn: async () => {
            const { data: { user } } = await authClient.getUser()
            return user
        },
    })

}

