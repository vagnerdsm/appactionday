import { create } from "zustand";

const currentDate = new Date();
const threeMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
const cformat = currentDate.toISOString().split('T')[0];
const tformat = threeMonthsAgo.toISOString().split('T')[0];

interface UserApiServiceState {
    startDate: string;
    endDate: string;
    updateDate: (startDate: string, endDate: string) => Promise<void>;
}

// export interface UserDataProps {
//     client: string
//     crm: string
//     display_name: string
//     facebook_ads_id: string
//     google_ads_id: string
//     photo_url: string
//     squad: string
//   }

export const useStateDate = create<UserApiServiceState>((set) => ({
    startDate: `${tformat}`,
    endDate: `${cformat}`,
    updateDate: async (newStartDate, newEndDate) => {
        set({ startDate: newStartDate, endDate: newEndDate })
    },
}));