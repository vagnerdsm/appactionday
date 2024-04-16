import { useEffect } from "react";
import apiRequest from "./apiService";
import { useUserApiService } from "./store";

const userApiService = () => {
    const { data, isLoading, updateData } = useUserApiService();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await apiRequest("");
                updateData(fetchedData); 
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        };

        fetchData();
    }, [updateData]); 

    console.log(data);

    return { data, isLoading, updateData };
};

export default userApiService;
