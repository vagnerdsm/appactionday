import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import apiService from "../../services/apiService";
import userApiService from "../../services/useApiService";
import { useRouter } from "expo-router";

const CalendarDatePicker = () => {
    const router = useRouter();
    let atualDate: any = new Date();
    const { updateData } = userApiService()
    const [selected, setSelected] = useState({ startDate: '', endDate: '' });

    const handleDaySelection = (day: any) => {
        console.log(day.dateString)
        if (!selected.startDate) {
            setSelected({ ...selected, startDate: day.dateString });
        } else if (!selected.endDate) {
            if (new Date(day.dateString) >= new Date(selected.startDate)) {
                setSelected({ ...selected, endDate: day.dateString });
            } else {
                console.error('Data Final não pode ser anterior que a data inicial')
            }
        } else {
            setSelected({ startDate: day.dateString, endDate: '' });
        }
    };

    const handleUpdateQuery = async () => {
        try {
            if (!selected.endDate) {
                console.error('Por favor, selecione uma data final.');
                return;
            }

            const { startDate, endDate } = selected;
            await apiService({ startDate, endDate });

            updateData(startDate, endDate);
            router.replace("../../(tabs)/home");
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <View>
            <Calendar
                onDayPress={handleDaySelection}
                maxDate={atualDate}
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
                title="att"
                onPress={handleUpdateQuery}
            />

        </View>

    );
};

export default CalendarDatePicker;
