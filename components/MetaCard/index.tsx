import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const MetaCard = () => {
    const data = {
        labels: ["Swim"],
        data: [2],
    };

    const windowWidth = Dimensions.get("window").width - 2;

    return (
        <View style={styles.metaContainer}>
            <View style={styles.textContent}>
                <Text style={styles.textContentTitle}>Vendas</Text>
                <Text>Vendas/Meta</Text>
                <Text style={styles.valueContent}>400/200</Text>
            </View>
            <View style={styles.valueContainer}>
                <ProgressChart
                    data={data}
                    width={120}
                    height={120}
                    strokeWidth={6}
                    radius={52}
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        color: () => "#00D7FF",
                        labelColor: () => "#fff",
                    }}
                    hideLegend={true}
                />
                <View style={styles.percentContainer}>
                    <Text style={styles.valuePercent}>20%</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    metaContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 335,
        height: 128,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingLeft: 10,
    },
    textContent: {
        gap: 10,
    },
    textContentTitle: {
        fontSize: 20,
    },
    valueContent: {
        fontSize: 32,
    },
    valueContainer: {
        position: "relative",
    },
    percentContainer: {
        position: "absolute",
        top: "38%",
        left: "35%",
    },
    valuePercent: {
        fontSize: 20,
    },
});

export default MetaCard;