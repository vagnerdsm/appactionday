import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useStateDate } from "../../services/stateDate";

const CDatePicker = () => {
    const router = useRouter()
    const atualDate: any = new Date
    const [selected, setSelected] = useState({ startDate: '', endDate: '' });
    const [isLoading, setIsLoading] = useState(false)


    const { refetch } = useQuery({
        queryKey: ['useApiData']
    })

    const updateDate = useStateDate((state) => state.updateDate)
    const zenddate = useStateDate((state) => state.endDate);
    const zstartdate = useStateDate((state) => state.startDate);

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
        setIsLoading(true);
        await updateDate(selected.startDate, selected.endDate);
        await setTimeout(async () => {
            console.log(zstartdate, zenddate);
            router.replace("../../(tabs)/home");
            refetch()
            setIsLoading(false);
        }, 3000)

    };
    if (isLoading) {
        return (
            <View>
                <Text>Carregando os dados...</Text>
            </View>
        )
    }

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
                title="Att"
                onPress={handleUpdateQuery}
            />
        </View>
    );
};

export default CDatePicker;
