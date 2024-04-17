import { create } from "zustand";
import apiRequest from "./apiRequest";

const currentDate = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const threeMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
const yformat = yesterday.toISOString().split('T')[0];
const tformat = threeMonthsAgo.toISOString().split('T')[0];


interface UserApiServiceState {
    startDate: string;
    endDate: string;
    updateDate: (startDate: string, endDate: string) => Promise<void>;
}

export const useStateDate = create<UserApiServiceState>((set) => ({
    startDate: `${tformat}`,
    endDate: `${yformat}`,
    updateDate: async (newStartDate, newEndDate) => {
        set({ startDate: newStartDate, endDate: newEndDate })
    },
}));