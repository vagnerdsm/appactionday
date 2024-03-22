import React, { useState } from "react";
import { Button, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { useApiRequest } from "..";

const CalendarDatePicker = () => {
    const atualDate: any = new Date()

    const [selected, setSelected] = useState({ startDate: '', endDate: '' });
    const [initialDaySelected, setInitialDaySelected] = useState(false)

    const handleDaySelection = (day: any) => {
        if (!initialDaySelected) {
            setSelected({ ...selected, startDate: day.dateString })

            setInitialDaySelected(true)
        } else {
            setSelected({ ...selected, endDate: day.dateString })
        }
    }

    const handleUpdateQuery = async () => {
        try {
            const response = await useApiRequest(selected.startDate, selected.endDate)

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Calendar
                maxDate={atualDate}
                onDayPress={handleDaySelection}
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
        </>
    );
}

export default CalendarDatePicker;