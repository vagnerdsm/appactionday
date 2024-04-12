import { authClient } from "@/supabaseClient";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { UserMetadataType } from "../types/userMetadata";

const useGetUser = async () => {
  const [userData, setUserData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: { user } } = await authClient.getUser()
        setIsLoading(false)
        setUserData(user?.user_metadata)
        console.log(user?.user_metadata)
      } catch (error) {
        Alert.alert('Error')
      }
    }
    fetchUser()
  }, [])

  return { userData, isLoading }
}

export default useGetUser;
