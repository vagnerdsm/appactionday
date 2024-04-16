import { create } from "zustand";
import apiRequest from "./apiService";
import apiService from "./apiService";

interface UserApiServiceState {
    data: any;
    isLoading: boolean;
    updateData: (startDate: string, endDate: string) => Promise<void>;
}

export const useUserApiService = create<UserApiServiceState>((set) => ({
    data: [],
    isLoading: true,
    updateData: async (startDate, endDate) => {
        try {
            const newData = await apiService({ startDate, endDate });

            set({ data: newData, isLoading: false });
        } catch (error) {

            console.error("Erro ao atualizar dados:", error);
        }
    },
}));
