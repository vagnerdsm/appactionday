import { useEffect, useState } from "react";
import apiRequestBoleto from "./apiServiceBoleto";

const userApiServiceBoleto = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDataBoleto = async () => {
            try {
                const fetchedData = await apiRequestBoleto();

                setData(fetchedData);
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDataBoleto();
    }, []);

    return { data, isLoading };
};

export default userApiServiceBoleto;
