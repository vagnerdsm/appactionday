import axios from "axios";

const apiRequestBoleto = async () => {
    const url = `https://appaction.vercel.app/api/boletos?cliente=URI SANTO ANGELO`;

    try {
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
    }
};

export default apiRequestBoleto;
