import axios from "axios";

const url = "https://appaction.vercel.app/api/rdstation?squad=educacao&cliente=fema&account_id=973201103251387&data_inicio=2023-08-01&data_final=2023-09-30&account_id_google=9073090275"
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