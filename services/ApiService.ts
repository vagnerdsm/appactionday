import axios from "axios";

const url = "https://appaction.vercel.app/api/rdstation?squad=educacao&cliente=sudamerica&account_id=2924147639128&data_inicio=2023-06-01&data_final=2023-09-30&account_id_google=1462556333"
const method = 'get'

const useApiRequest = async () => {
    try {
        const response = await axios({
            method,
            url
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
        throw error;
    }
};

export default useApiRequest;