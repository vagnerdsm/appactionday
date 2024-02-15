import React from "react";
import { PieChart } from "react-native-chart-kit";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const chartConfig = {
    backgroundGradientFrom: "#174a53",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#174a53",
    backgroundGradientToOpacity: 0.5,

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 0,
    legend: {
        enabled: true,
        position: "bottom",
        legendFontSize: 15,
        legendFontColor: "#fff",
        legendFontWeight: "bold",
    },
};

const ChartPie = () => {
    const screenWidth = Dimensions.get('window').width - 32;

    const data = [
        {
            name: "Custo Por Matrícula",
            population: 21,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#fff",
            legendFontSize: 15,
        },
        {
            name: "Ticket Médio",
            population: 28,
            color: "#F00",
            legendFontColor: "#fff",
            legendFontSize: 15,
        },
    ];

    return (
        <View style={styles.chartContainer}>
            <PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"5"}
                absolute
                hasLegend={false}
                center={[82, 12]}
            />
            <View style={styles.legendContainer}>
                {data.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: item.color,
                                marginRight: 5,
                            }}
                        />
                        <Text style={{ color: "#fff", fontSize: 15 }}>
                            {item.name}: {item.population}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        position: 'relative',
        backgroundColor: '#174a53',
        paddingBottom: 22,
        paddingTop: 18,
        paddingLeft: 12,
        borderRadius: 18,
        marginBottom: 18,
    },
    legendContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
    },
});

export default ChartPie;
