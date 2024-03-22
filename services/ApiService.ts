import axios from "axios";

const method = 'get'


const useApiRequest = async (startDate: any, endDate: any) => {
    const fixedStartDate = '2023-06-01';
    const fixedEndDate = '2023-09-30';

    const url = `https://appaction.vercel.app/api/rdstation?squad=educacao&cliente=sudamerica&account_id=2924147639128&data_inicio=${fixedStartDate}&data_final=${fixedEndDate}&account_id_google=1462556333`

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