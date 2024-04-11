import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, StyleSheet } from "react-native"



const chartConfig = {
    backgroundGradientFrom: "#174a53",
    backgroundGradientTo: "#174a53",
    backgroundGradientToOpacity: 2,
    color: (opacity = 1) => `rgba(27, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.5,
    withVerticalLines: false,
    useShadowColorFromDataset: false,
}

const ChartLine = (props: any) => {
    const { data, label } = props

    const dataG = {
        
        labels: label,
        datasets: [
            {
                data: data,
            }
        ],
        legend: ["Oportunidades por mês"]
    }

    return (
        <View style={styles.chartContainer}>
            <LineChart
                data={dataG}
                width={350}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    chartContainer: {
        backgroundColor: '#174a53',
        paddingBottom: 22,
        paddingTop: 18,
        paddingLeft: 12,
        borderRadius: 18,
        marginBottom: 18,
    },
});


export default ChartLine; 