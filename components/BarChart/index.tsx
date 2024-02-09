import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const ChartBar = (props: any) => {
    const { label, data } = props

    const windowWidth = Dimensions.get('window').width - 5

    const chartData = {
        labels: label || "",
        datasets: [
            {
                data: data || [],
            },
        ],
    };

    return (
        <View>
            <BarChart
                data={chartData}
                chartConfig={{
                    backgroundColor: '#262450',
                    backgroundGradientFrom: '#262450',
                    backgroundGradientTo: '#262450',
                    color: () => "#00D7FF",
                    labelColor: () => "#fff",
                }}
                width={windowWidth}
                height={220}
                withInnerLines={false}
                showValuesOnTopOfBars={true}
                withHorizontalLabels={false}
                yAxisLabel=""
                yAxisSuffix=""
                style={{
                    borderRadius: 8,
                }}
            />
        </View>
    );
}


export default ChartBar