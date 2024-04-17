// import axios from "axios";

// const apiService = async (selected: any) => {
//     const fixedStartDate = '2023-06-01';
//     const fixedEndDate = '2023-09-30';

//     const url = `https://appaction.vercel.app/api/rdstation?squad=educacao&cliente=faex&account_id=2833806533565354&data_inicio=${selected.startDate ? selected.startDate : fixedStartDate}&data_final=${selected.endDate ? selected.endDate : fixedEndDate}&account_id_google=1918176068`

//     try {
//         const response = await axios.get(url);

//         return response.data;
//     } catch (error) {
//         console.error('Erro ao fazer a solicitação:', error);
//     }
// };

// export default apiService;