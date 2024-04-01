import { authClient } from "@/supabaseClient"

export const getUserData = () => {
    const data = authClient.getUser()
    console.log(data)
}