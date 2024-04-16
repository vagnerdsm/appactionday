import { useEffect } from "react";
import apiService from "./apiService";
import { useUserApiService } from "./store";

const userApiService = () => {
    const { data, isLoading, updateData } = useUserApiService();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await apiService("");

                updateData(fetchedData.startDate, fetchedData.endDate);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        };

        fetchData();
    }, [updateData]);

    return { data, isLoading, updateData };
};

export default userApiService;
