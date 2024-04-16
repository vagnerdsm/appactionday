import { create } from "zustand";

interface StateDateProps {
    startDate: string;
    endDate: string;
    // isLoading: boolean;
    updateDate: (newStartDate: string, newEndDate: string) => Promise<void>;
}

export const useStateDate = create<StateDateProps>((set) => ({
    startDate: '2023-06-01',
    endDate: '2023-09-30',
    updateDate: async (newStartDate, newEndDate) => {
        set({startDate: newStartDate, endDate: newEndDate})
    },
}));
