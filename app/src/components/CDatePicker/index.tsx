import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import apiRequest from "@/app/src/services/apiService"
import userApiService from "../../services/useApiService";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useStore } from "zustand";
import { set } from "date-fns";
import { useStateDate } from "../../services/stateDate";

const CDatePicker = () => {
    const router = useRouter()
    const atualDate = new Date
    const [selected, setSelected] = useState({ startDate: '', endDate: '' });

    
    const { refetch } = useQuery({
        queryKey: ['useApiData']
    })
    
    const updateDate = useStateDate((state) => state.updateDate)
    const zenddate = useStateDate((state) => state.endDate);
    const zstartdate = useStateDate((state) => state.startDate);


    const handleDaySelection = (day: any) => {
        if (!selected.startDate) {
            setSelected({ ...selected, startDate: day.dateString });
        } else if (!selected.endDate) {
            setSelected({ ...selected, endDate: day.dateString });
        } else {
            setSelected({ startDate: day.dateString, endDate: '' });
        }
    };

    const handleUpdateQuery = async () => {

        await updateDate(selected.startDate, selected.endDate);
        await setTimeout(async () => {
            console.log(zstartdate, zenddate);
            router.replace("../../(tabs)/home");
            refetch()
        }, 1000)

    };

    return (
        <View>
            <Calendar
                onDayPress={handleDaySelection}
                // maxDate={atualDate}
                markedDates={{
                    [selected.startDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: 'purple'
                    },
                    [selected.endDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: 'purple'
                    }
                }}
            />

            <Text style={{ fontSize: 22 }}>Data inicial: {selected.startDate} </Text>
            <Text style={{ fontSize: 22 }}>Data final: {selected.endDate} </Text>

            <Button
                title="Att"
                onPress={handleUpdateQuery}
            />
        </View>
    );
};

export default CDatePicker;
