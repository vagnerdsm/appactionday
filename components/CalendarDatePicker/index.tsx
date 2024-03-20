import React, { useState } from "react";
import { Text } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarDatePicker = () => {
    const atualDate: any = new Date()
    const [selected, setSelected] = useState({ startDate: '', endDate: '' });

    return (
        <>
            <Calendar
                maxDate={atualDate}
                onDayPress={day => {
                    setSelected({ ...selected, startDate: day.dateString });
                    console.log('data inicial', selected.startDate);
                }}
                markedDates={{
                    [selected.startDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: 'purple'
                    }
                }}
            />
            <Text style={{ fontSize: 22 }}>Data inicial: {selected.startDate} </Text>
        </>
    );
}

export default CalendarDatePicker;