import { create } from "zustand";
import apiRequest from "./apiRequest";


interface UserApiServiceState {
    startDate: string;
    endDate: string;
    updateDate: (startDate: string, endDate: string) => Promise<void>;
}

export const useStateDate = create<UserApiServiceState>((set) => ({
    startDate: '2024-01-01',
    endDate: '2024-02-02',
    updateDate: async (newStartDate, newEndDate) => {
        set({startDate: newStartDate, endDate: newEndDate})
    },
}));