import axios from "axios";
import { useStateDate } from "./stateDate";

const apiRequest = async (selected: any) => {
    const fixedStartDate = '2023-06-01';
    const fixedEndDate = '2023-09-30';

    // const { startDate, endDate } = useStateDate()

    const zstartdate = useStateDate((state) => state.startDate);
    const zenddate = useStateDate((state) => state.endDate);

    const url = `https://appaction.vercel.app/api/rdstation?squad=educacao&cliente=faex&account_id=2833806533565354&data_inicio=2023-06-01&data_final=2023-09-30&account_id_google=1918176068`

    try {
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
    }
};

export default apiRequest;